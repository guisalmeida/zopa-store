import { ChangeEvent, FormEvent, useState } from "react";

import { NewProductContainer } from './styled'
import { createProduct } from "../../../utils/api";
import { TProduct } from "../../../types";

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState<TProduct>({
    name: '',
    description: '',
    onSale: false,
    quantity: 1,
    categories: [],
    discount: 0,
    price: 0,
    oldPrice: 0,
    sizes: [{
      available: true,
      size: "M",
    }],
    inStock: false,
    colors: [],
    images: [
      'https://zopa-clothing.s3.amazonaws.com/images/beanie_black.jpg',
      'https://zopa-clothing.s3.amazonaws.com/images/beanie_black_detail.jpg'
    ],
    selectedSize: ''
  });

  const [file, setFile] = useState<File | null>(null)

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

    setNewProduct((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewProduct((prev) => {
      const bool = e.target.value === 'true' ? true : false
      return { ...prev, [e.target.name]: bool };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(newProduct));

    try {
      const res = await createProduct(newProduct);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
  }

  return (
    <NewProductContainer>
      <h1 className="addProductTitle">Cadastrar Novo Produto</h1>

      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Imagens</label>
          <input
            type="file"
            id="file"
            onChange={handleImageUpload}
          />
        </div>

        <div className="addProductItem">
          <label>Nome</label>
          <input
            name="name"
            type="text"
            placeholder="Apple Airpods"
            value={newProduct.name}
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Descrição</label>
          <input
            name="description"
            type="text"
            placeholder="Insira descrição..."
            value={newProduct.description}
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Quatidade</label>
          <input
            name="quantity"
            type="number"
            placeholder="100"
            value={newProduct.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Preço</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            value={newProduct.price}
            onChange={handleChange}
          />
        </div>

        {newProduct.onSale === true ? (
          <div className="addProductItem">
            <label>Preço antigo</label>
            <input
              name="oldPrice"
              type="number"
              placeholder="100"
              value={newProduct.oldPrice}
              onChange={handleChange}
            />
          </div>
        ) : null}

        <div className="addProductItem">
          <label>Categorias</label>
          <input
            name="categories"
            type="text"
            placeholder="Camisetas,bones"
            value={newProduct.categories}
            onChange={handleChange}
          />
        </div>

        {/* <div className="addProductItem">
          <label>Tamanhos</label>
          <input
            name="sizes"
            type="text"
            placeholder="P,M,G,GG"
            value={newProduct.sizes[0]["size"]}
            onChange={handleChange}
          />
        </div> */}

        <div className="addProductItem">
          <label>Cor</label>
          <input
            name="colors"
            type="text"
            placeholder="Preto"
            value={newProduct.colors}
            onChange={handleChange} />
        </div>

        <div className="addProductItem">
          <label>Promoção</label>
          <select
            className="addProductSelect"
            name="onSale"
            onChange={handleSelect}
            defaultValue={String(newProduct?.onSale)}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>

        {newProduct.onSale === true ? (
          <div className="addProductItem">
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

        <div className="addProductItem">
          <label>Em estoque</label>
          <select
            className="addProductSelect"
            name="inStock"
            onChange={handleSelect}
            defaultValue={String(newProduct?.inStock)}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>

        <button type="submit" className="addProductButton">
          Cadastrar
        </button>
      </form>
    </NewProductContainer>
  );
}
