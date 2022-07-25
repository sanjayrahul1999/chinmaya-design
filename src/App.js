import React from "react";
import Card from "./components/Card";
import card1Image2 from "./asserts/image 2 (Traced).png";
import card1Image1 from "./asserts/Vector.png";
const App = () => {
  return (
    <div>
      <Card
        image1={card1Image1}
        image2={card1Image2}
        desc={
          "Silently hear everyonce.Accept what is good.Reject and forget what is not.This is intelligent living."
        }
        para={"Chinmayananda Saraswati"}
        image3={card1Image1}
      />
    </div>
  );
};

export default App;
