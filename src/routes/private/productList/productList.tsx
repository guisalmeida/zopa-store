import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TProduct } from "../../../types";
import {
  selectAllProducts,
  selectIsLoading
} from "../../../store/selectors/productsSelectors";
import Spinner from "../../../components/client/spinner/spinner";

import { ProductListContainer, DeleteForeverIcon } from './styled'

export default function ProductList() {
  const allProducts: TProduct[] = useSelector(selectAllProducts);
  const isLoading: boolean = useSelector(selectIsLoading);

  const handleDelete = (id: string) => {
    console.log(id);

    // deleteProduct(id, dispatch);
  };

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params: { row: { images: string[]; name: string }; }) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.images[0]} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Quantidade", width: 100 },
    { field: "price", headerName: "Preço", width: 100 },
    {
      field: 'edit',
      headerName: 'Editar',
      width: 100,
      renderCell: (params) => {
        return (
          <Link to={'/admin/products/' + params.id}>
            <button className="productListEdit">Editar</button>
          </Link>
        );
      },
    },
    {
      field: 'delete',
      headerName: 'Deletar',
      width: 100,
      renderCell: (params) => {
        return (
          <button
            className="productListDelete"
            onClick={() => handleDelete(params.id)}>
            <DeleteForeverIcon />
          </button>
        );
      },
    },
  ];

  return isLoading ? (
    <Spinner />
  ) : (
    <ProductListContainer>
      <DataGrid
        rows={allProducts}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </ProductListContainer>
  );
}
