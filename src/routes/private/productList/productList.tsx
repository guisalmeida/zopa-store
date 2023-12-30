import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TProduct } from "../../../types";
import {
  selectAllProducts,
  selectIsLoading
} from "../../../store/selectors/productsSelectors";
import Spinner from "../../../components/client/spinner/spinner";

import { ProductListContainer, DeleteForeverIcon } from './styled'
import { deleteProduct } from "../../../utils/api";
import { fetchProductsStart } from "../../../store/actions/productsActions";
import { toast } from "react-toastify";
import { AxiosResponse, HttpStatusCode } from "axios";

export default function ProductList() {
  const dispatch = useDispatch()
  const allProducts: TProduct[] = useSelector(selectAllProducts);
  const isLoading: boolean = useSelector(selectIsLoading);

  const handleDelete = async (productId: string) => {
    try {
      const res = await deleteProduct(productId);

      if (res.status === 200) {
        //@ts-ignore
        if (res.data) {
          //@ts-ignore
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
          });
        }


        dispatch(fetchProductsStart());
      }

    } catch (error) {
      console.log(error);
    }
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
            onClick={() => handleDelete(params.id as string)}>
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
