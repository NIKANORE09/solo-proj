import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../providers/cart.providers.js";
import Cats from "../components/Cats.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import YouMayAlsoLike from "../components/YouMayAlsoLike.jsx";

export default function Home() {
  const { data } = useContext(CartContext);
  const uniqCat = Array.from(new Set(data.map((el) => el.category)));

  return (
    <div>
      <Cats />

      <FeaturedProducts />
    </div>
  );
}
