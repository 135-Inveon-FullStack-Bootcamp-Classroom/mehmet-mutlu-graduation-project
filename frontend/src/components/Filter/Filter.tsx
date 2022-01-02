import React from "react";
import "./filter.scss";

const Filter: React.FC = () => {
  return (
    <form action="">
      <h3 className="title">Ürünleri Filtrele</h3>
      <div className="sorting">
        <p className="sub-title">Sıralama Tipi</p>
        <select name="" id="">
          <option disabled selected>
            Sıralama tipi seçiniz
          </option>
          <option value="1">İsme göre artan</option>
          <option value="2">İsme göre azalan</option>
          <option value="3">Fiyata göre artan</option>
          <option value="4">Fiyata göre azalan</option>
        </select>
      </div>
      <div className="price-range">
        <p className="sub-title">Fiyat Aralığı</p>
        <input type="number" />
        -
        <input type="number" />
      </div>
      <div className="search-name">
        <p className="sub-title">Ürün Adı</p>
        <input type="search" />
      </div>
      <button type="submit" className="submit-button">
        Arama Yap
      </button>
    </form>
  );
};

export default Filter;
