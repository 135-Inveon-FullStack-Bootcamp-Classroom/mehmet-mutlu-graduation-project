import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { productDetails } from "../../store/products/productsSlice";
import { getProductById } from "../../store/products/services";
import "./productDetail.scss";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();
  const itemDetails = useAppSelector(productDetails);
  const isLoadingForProductDetails = useAppSelector(
    (state) => state.products.isLoadingForProductDetails
  );
  const errorForProductDetails = useAppSelector(
    (state) => state.products.errorForProductDetails
  );

  useEffect(() => {
    dispatch(getProductById(productId));
    console.warn(errorForProductDetails);
  }, [dispatch, errorForProductDetails, productId]);

  if (isLoadingForProductDetails) {
    return <Loader />;
  }

  return (
    <Modal>
      <div className="detail-title">
        <h3>{itemDetails.name}</h3>
      </div>
      <div className="detail-info">
        <div className="detail-info-left">
          <img src={itemDetails.imageURLs} alt="Selected Item Img" />
        </div>
        <div className="detail-info-right">
          <h4>Ürün Detayı</h4>
          <p>{itemDetails.description}</p>
          <h4>Stok Adeti</h4>
          <p>{itemDetails.stockAmount}</p>
          <h4>Fiyatı</h4>
          <p>{itemDetails.price} ₺</p>
          <button>Sepete Ekle</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetail;
