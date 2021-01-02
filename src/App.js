import React from 'react';
import PropTypes from "prop-types";

function Food({ name, rating, picture }) {
	return (
    <div>
      <h3>내가 좋아하는 음식: {name}</h3>
      <h4>선호도: {rating} / 10</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  picture: PropTypes.string.isRequired
}

const foodILike = [
  {
    id: 0,
    name: "김치",
    rating: 3,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDrNtl4pG_zepTDko3IUhgHaHa%26pid%3DApi&f=1"
  },
  {
    id: 1,
    name: "짜장",
    rating: 2.5,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DxzM698upNhEDSm6_A5agQHaE6%26pid%3DApi&f=1"
  },
  {
    id: 2,
    name: "밥",
    rating: 6.1,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2FFbMetaImage%2F201811%2F2f2968c7-c62f-4358-bae3-e59121293e05.jpg&f=1&nofb=1"
  }
]

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} rating={dish.rating} picture={dish.image} />
}

function App() {
  return (
    <div>
      <h1>Hello Ham</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
