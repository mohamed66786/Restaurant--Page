import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Explore a menu that reflects our commitment to culinary excellence. From mouthwatering appetizers to decadent desserts, each dish is a masterpiece in its own right",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Our diverse menu caters to a range of tastes and dietary preferences, ensuring there's something to delight every palate.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "From the moment you walk through our doors until the last bite, expect impeccable service that anticipates your needs and exceeds your expectations.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our chefs meticulously craft each dish to tell a story on your palate,
          bringing together locally-sourced produce, international inspirations,
          and a touch of innovation
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
