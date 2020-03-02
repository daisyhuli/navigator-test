import React, { Component } from "react";
import { connect } from "react-redux";
import { setPriceList } from "@/store/home";
import { getData } from "@/api";
import ImageCard from "@/components/ImageCard/imageCard";
import PriceSwiper from "@/components/PriceSwiper/priceSwiper";
import Loading from "@/components/Loading/loading";
import logo from "@/assets/logo.jpg";
import "./index.scss";

class Home extends Component {
  getItems = async () => {
    try {
      const res = await getData();
      if (res.status === 200) {
        this.props.setPriceList(res.data);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div className="container-home">
        <div className="left-part">
          <img src={logo} alt="logo" className="logo" />
          <ImageCard />
        </div>
        <div className="right-part">
          {this.props.home.priceList.length > 0 ? <PriceSwiper /> : <Loading />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home
});
const mapActionsToProps = { setPriceList };

export default connect(mapStateToProps, mapActionsToProps)(Home);
