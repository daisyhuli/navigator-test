import React from "react";
import Swiper from "react-id-swiper";
import PriceItem from "@/components/PriceItem/priceItem";
import { setPriceList } from "@/store/home";
import { connect } from "react-redux";
import "./index.scss";

const PriceSwiper = props => {
  const params = {
    slidesPerView: 8,
    // spaceBetween: ,
    navigation: {
      nextEl: ".swiper-button-next.customized-swiper-button-next",
      prevEl: ".swiper-button-prev.customized-swiper-button-prev"
    }
  };

  return (
    <Swiper {...params}>
      { props.home.priceList.map((item, index) => (
        <div key={index}>
          <div className="price-swiper-wrapper">
            <div className="time-text">{item.dateText}</div>
            <div className="time-text">({item.dateDay})</div>
            <div className="temper-box">{item.temperature} </div>
            {
                item.products.map(((data, index) => (
                    <div className="coupon-item-container" key={index}>
                        <PriceItem data={ data }/>
                    </div>
                )))
            }
          </div>
        </div>
      ))}
    </Swiper>
  );
};

const mapStateToProps = state => ({
  home: state.home
});
const mapActionsToProps = { setPriceList };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PriceSwiper);
