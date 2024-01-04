import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TProduct } from '../../../types';
import {
  createProduct,
  deleteImages,
  updateProduct,
  uploadImages,
} from '../../../utils/api';
import { selectAllProducts } from '../../../store/selectors/productsSelectors';
import { fetchProductsStart } from '../../../store/actions/productsActions';

import Button from '../../../components/client/button';
import { NewProductContainer, PublishIcon, RemoveImageIcon } from './styled';

const BASE_PRODUCT: TProduct = {
  name: '',
  description: '',
  onSale: false,
  quantity: 0,
  categories: [],
  discount: 0,
  price: 0,
  oldPrice: 0,
  sizes: [
    {
      available: true,
      size: 'P',
    },
    {
      available: true,
      size: 'M',
    },
    {
      available: true,
      size: 'G',
    },
  ],
  inStock: false,
  colors: [],
  images: [],
  selectedSize: '',
};

export default function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [newProduct, setNewProduct] = useState<TProduct>(BASE_PRODUCT);

  const allProducts: TProduct[] = useSelector(selectAllProducts);

  useEffect(() => {
    if (productId && productId !== 'new') {
      setNewProduct(
        allProducts.find((product) => product._id === productId) as TProduct
      );
      return;
    }

    setNewProduct(BASE_PRODUCT);
  }, [productId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let key = e.target.name;
    let value: string | string[] | number;

    if (key === 'price' || key === 'oldPrice' || key === 'discount') {
      value = Number(e.target.value);
    } else if (key === 'categories' || key === 'colors' || key === 'sizes') {
      value = [...e.target.value.split(',')];
    } else {
      value = e.target.value;
    }

    setNewProduct((prev: TProduct) => {
      return { ...prev, [key]: value };
    });
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setNewProduct((prevProd) => {
      const bool = e.target.value === 'true' ? true : false;
      return { ...prevProd, [e.target.name]: bool };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newProduct.images.length === 0) {
      toast.error('Selecione pelo menos uma imagem.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
      });
      return;
    }

    try {
      const res =
        productId === 'new'
          ? await createProduct(newProduct)
          : await updateProduct(newProduct);

      if (res.status === 200) {
        const msg = `${
          productId === 'new' ? 'Produto cadastrado' : 'Produto atualizado'
        } com sucesso!`;

        toast.success(msg, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false,
        });

        dispatch(fetchProductsStart());
        return navigate('/admin/products/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles?.length && selectedFiles?.length > 3) {
      toast.error('Selecione até 3 imagens por produto.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
      });
      return;
    }

    if (selectedFiles && selectedFiles.length > 0) {
      setFiles(selectedFiles);
    }
  };

  const handleImageUploadS3 = async () => {
    setIsLoading(true);
    const formData = new FormData();

    for (const file of files as FileList) {
      formData.append('zopa-clothing-images', file);
    }

    try {
      const res = await uploadImages(formData);

      if (res.status === 200) {
        setIsLoading(false);
        //@ts-ignore
        if (res.data && res.data.files) {
          //@ts-ignore
          const newImages = res.data.files.map((file) => file.location);
          setNewProduct((prevProd) => {
            return { ...prevProd, images: [...prevProd.images, ...newImages] };
          });
        }
        //@ts-ignore
        if (res.data && res.data.message) {
          //@ts-ignore
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
          });
        }
      }
    } catch (error) {
      setIsLoading(false);
      const err = error as Error;
      console.log(err);
      toast.error(err.message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
  };

  const handleDeleteImage = async (image: string) => {
    const regexp = /images.+/.exec(image);

    try {
      const key = regexp && regexp[0];

      const res = await deleteImages(key as string);
      console.log(res);

      if (res.status === 200) {
        toast.success('Imagem deletada com sucesso!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false,
        });

        setNewProduct((prevProd) => {
          const newImages = prevProd.images.filter((img) => img !== image);
          return { ...prevProd, images: newImages };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewProductContainer>
      <h1 className="edit-product__title">
        {productId && productId === 'new'
          ? `Novo Produto`
          : `Produto ${newProduct?.name}`}
      </h1>

      <form className="edit-product__Form" onSubmit={handleSubmit}>
        <div className="edit-product__item">
          <label>Imagens</label>

          {files && files.length > 0
            ? Object.entries(files as FileList).map((file, index) => {
                return <p key={index}>{file[1].name}</p>;
              })
            : null}

          {newProduct?.images && newProduct?.images?.length > 0 ? (
            <div className="edit-product__images">
              {newProduct.images.map((image, index) => {
                return (
                  <figure key={index}>
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(image)}
                    >
                      <RemoveImageIcon />
                    </button>
                    <img src={image} alt="image" />
                  </figure>
                );
              })}
            </div>
          ) : null}

          <div className="edit-product__image--container">
            <label htmlFor="file" className="edit-product__label">
              <PublishIcon /> Selecionar Imagens
            </label>
            <input
              type="file"
              id="file"
              onChange={onImageChange}
              accept=".jpg, .jpeg, .png"
              multiple
            />

            <Button
              type="button"
              onClick={handleImageUploadS3}
              isLoading={isLoading}
              buttonType="highlight"
            >
              Carregar Imagens
            </Button>
          </div>
        </div>

        <div className="edit-product__item">
          <label>Nome</label>
          <input
            name="name"
            type="text"
            placeholder="Apple Airpods"
            value={newProduct?.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="edit-product__item">
          <label>Descrição</label>
          <input
            name="description"
            type="text"
            placeholder="Insira descrição..."
            value={newProduct?.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="edit-product__item">
          <label>Preço</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            value={newProduct?.price}
            onChange={handleChange}
          />
        </div>

        <div className="edit-product__item">
          <label>Promoção</label>
          <div className="edit-product__item--radio">
            <input
              type="radio"
              id="yes"
              name="onSale"
              value="true"
              checked={newProduct?.onSale.toString() === 'true'}
              onChange={handleSelect}
            />
            <label htmlFor="yes">Sim</label>

            <input
              type="radio"
              id="no"
              name="onSale"
              value="false"
              onChange={handleSelect}
              checked={newProduct?.onSale.toString() === 'false'}
            />
            <label htmlFor="no">Não</label>
          </div>
        </div>

        {newProduct?.onSale === true ? (
          <div className="edit-product__item">
            <label>Desconto (%)</label>
            <input
              name="discount"
              type="number"
              placeholder="50"
              value={newProduct?.discount}
              onChange={handleChange}
            />
          </div>
        ) : null}

        {newProduct?.onSale === true ? (
          <div className="edit-product__item">
            <label>Preço antigo</label>
            <input
              name="oldPrice"
              type="number"
              placeholder="100"
              value={newProduct?.oldPrice}
              onChange={handleChange}
            />
          </div>
        ) : null}

        <div className="edit-product__item">
          <label>Categorias</label>
          <input
            name="categories"
            type="text"
            placeholder="Camisetas,bones"
            value={newProduct?.categories}
            onChange={handleChange}
            required
          />
        </div>

        <div className="edit-product__item">
          <label>Cor</label>
          <input
            name="colors"
            type="text"
            placeholder="Preto"
            value={newProduct?.colors}
            onChange={handleChange}
            required
          />
        </div>

        <div className="edit-product__item">
          <label>Em estoque</label>

          <div className="edit-product__item--radio">
            <input
              type="radio"
              id="yes"
              name="inStock"
              value="true"
              checked={newProduct?.inStock.toString() === 'true'}
              onChange={handleSelect}
            />
            <label htmlFor="yes">Sim</label>

            <input
              type="radio"
              id="no"
              name="inStock"
              value="false"
              onChange={handleSelect}
              checked={newProduct?.inStock.toString() === 'false'}
            />
            <label htmlFor="no">Não</label>
          </div>
        </div>

        {newProduct?.inStock === true ? (
          <div className="edit-product__item">
            <label>Quatidade</label>
            <input
              name="quantity"
              type="number"
              placeholder="100"
              value={newProduct?.quantity}
              onChange={handleChange}
            />
          </div>
        ) : null}

        {/* <div className="edit-product__item">
          <label>Tamanhos</label>
          <input
            name="sizes"
            type="text"
            placeholder="P,M,G,GG"
            value={newProduct.sizes[0]["size"]}
            onChange={handleChange}
          />
        </div> */}

        <Button
          type="submit"
          className="edit-product__button"
          isLoading={false}
          buttonType="highlight"
        >
          {productId && productId === 'new' ? `Cadastrar` : `Salvar`}
        </Button>
      </form>
    </NewProductContainer>
  );
}
