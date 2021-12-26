import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import { CartContext } from "../../context/CartContext";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { productDetails } from "../../store/products/productsSlice";
import { getProductById } from "../../store/products/services";
import { Products } from "../../types/types";
import "./productDetail.scss";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart, checkItem } = useContext(CartContext);
  const dispatch = useAppDispatch();
  const itemDetails = useAppSelector(productDetails);
  const isLoadingForProductDetails = useAppSelector(
    (state) => state.products.isLoadingForProductDetails
  );
  const errorForProductDetails = useAppSelector(
    (state) => state.products.errorForProductDetails
  );

  const addItemToCart = (item: Products) => {
    addToCart({ ...item, count: 1, totalPrice: item.price });
  };

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
          <button
            disabled={checkItem(itemDetails.id)}
            style={{
              backgroundColor: checkItem(itemDetails.id)
                ? "#F9F9F8"
                : "#337BB6",
              color: checkItem(itemDetails.id) ? "#337BB6" : "#F9F9F8",
              cursor: checkItem(itemDetails.id) ? "default" : "pointer",
            }}
            onClick={() => addItemToCart(itemDetails)}
          >
            {checkItem(itemDetails.id) ? "Sepete Eklendi" : "Sepete Ekle"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetail;
