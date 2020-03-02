import React from "react";
import "./index.scss";

const PriceItem = props => {
  const { data } = props;
  const getCurrStatus = status => {
    let className = "";
    switch (status) {
      case "Available":
        className = "available";
        break;
      case "Last Spaces":
        className = "lastspace";
        break;
      case "Sold Out":
        className = "sold-out";
        break;
      default:
        className = "";
    }
    return className;
  };

  const status = getCurrStatus(data.status)

  return (
    <div className="coupon">
      <div className="coupon-top">
        <div className="origin-price price">{data.price}</div>
        <div className="discount-price price">{data.priceWithDiscount}</div>
      </div>
      <div className={`coupon-bottom ${status}`} >
        <div className={`price-status ${status}`} >
          {data.status}
        </div>
      </div>
    </div>
  );
};

export default PriceItem;
