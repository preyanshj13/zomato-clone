import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/Carousel/NextArrow";
import PrevArrow from "../../common/Carousel/PrevArrow";
import "./DeliveryCollections.css";
import DeliveryItem from "./DeliveryItem/DeliveryItem";

function DeliveryCollections() {
  const deliveryItems = [
    {
      id: 1,
      title: "Pizza",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      id: 2,
      title: "Burger",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
    },
    {
      id: 3,
      title: "Rolls",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
    },
    {
      id: 4,
      title: "Cake",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    },
    {
      id: 5,
      title: "Biryani",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
    },
    {
      id: 6,
      title: "Chaat",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
    },
    {
      id: 7,
      title: "Momos",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
  ];

  const settings = {
    // dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
            {deliveryItems.map((item)=>{
                return <DeliveryItem item={item} />
            })}
        </Slider>
      </div>
    </div>
  );
}

export default DeliveryCollections;
