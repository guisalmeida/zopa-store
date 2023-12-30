import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { TProduct } from "../../../types";
import {
  selectAllProducts,
  selectIsLoading
} from "../../../store/selectors/productsSelectors";

import { NewProductContainer, PublishIcon } from './styled'
import Spinner from "../../../components/client/spinner/spinner";
import { updateProduct } from "../../../utils/api";

export default function EditProduct() {
  const location = useLocation();
  const productId = location.pathname.split('/')[3];
  const allProducts: TProduct[] = useSelector(selectAllProducts);
  const isLoading: boolean = useSelector(selectIsLoading);

  const product = allProducts.find((product) => product._id === productId);

  const [newProduct, setNewProduct] = useState(product as TProduct);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let key = e.target.name;
    let value: string | string[] | number;

    if (key === 'price' || key === 'oldPrice' || key === 'discount') {
      value = Number(e.target.value)
    } else if (key === 'categories' || key === 'colors' || key === 'sizes') {
      value = [...e.target.value.split(',')]
    } else {
      value = e.target.value
    }

    setNewProduct((prev: TProduct) => {
      return { ...prev, [key]: value };
    });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewProduct((prev: TProduct) => {
      const bool = e.target.value === 'true' ? true : false
      return { ...prev, [e.target.name]: bool };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(JSON.stringify(newProduct));

    try {
      const res = await updateProduct(newProduct)
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <NewProductContainer>
      <h1 className="editProductTitle">Produto: {newProduct?.name}</h1>

      <form className="editProductForm" onSubmit={handleSubmit}>

        <div className="editProductItem">
          <img src={newProduct?.images[0]} alt="" className="editProductUploadImg" />
          {/* <label htmlFor="file">
            <PublishIcon /> Salvar Imagem
          </label>
          <input
            type="file"
            id="file"
          // onChange={(e) => setFile(e.target.files[0])}
          // onChange={(e) => console.log(e?.target?.files[0])}
          /> */}
        </div>

        <div className="editProductItem">
          <label>Nome</label>
          <input
            name="name"
            type="text"
            value={newProduct?.name}
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="editProductItem">
          <label>Descrição</label>
          <input
            name="description"
            type="text"
            value={newProduct?.description}
            placeholder="Insira descrição..."
            onChange={handleChange}
          />
        </div>

        <div className="editProductItem">
          <label>Quatidade</label>
          <input
            name="quantity"
            type="number"
            placeholder="100"
            value={newProduct?.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="editProductItem">
          <label>Preço</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            value={newProduct?.price}
            onChange={handleChange}
          />
        </div>

        {newProduct.onSale === true ? (
          <div className="editProductItem">
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

        <div className="editProductItem">
          <label>Categorias</label>
          <input
            name="categories"
            type="text"
            placeholder="Camisetas,bones"
            onChange={handleChange}
            value={newProduct?.categories}
          />
        </div>

        {/* <div className="editProductItem">
          <label>Tamanhos</label>
          <input
            name="sizes"
            type="text"
            placeholder="P,M,G,GG"
            onChange={handleCat}
            value={newProduct?.sizes[0]["size"]}
          />
        </div> */}

        <div className="editProductItem">
          <label>Cor</label>
          <input
            name="colors"
            type="text"
            placeholder="Preto"
            onChange={handleChange}
            value={newProduct?.colors}
          />
        </div>

        <div className="editProductItem">
          <label>Promoção</label>
          <select
            className="editProductSelect"
            name="onSale"
            onChange={handleSelect}
            defaultValue={String(newProduct?.onSale)}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>

        {newProduct?.onSale === true ? (
          <div className="editProductItem">
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

        <div className="editProductItem">
          <label>Em estoque</label>
          <select
            className="editProductSelect"
            name="inStock"
            onChange={handleSelect}
            defaultValue={String(newProduct?.inStock)}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>

        <button type="submit" className="editProductButton">
          Salvar
        </button>
      </form>
    </NewProductContainer>
  )
};


