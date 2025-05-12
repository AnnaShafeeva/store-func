import { ShopItemFunc } from "./ShopItemFunc";
import "./App.css";

function App() {
  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  };

  return (
    <div className="window">
      <ShopItemFunc
        brand={item.brand}
        title={item.title}
        description={item.description}
        descriptionFull={item.descriptionFull}
        price={item.price}
        currency={item.currency}
      />
    </div>
  );
}

export default App;
