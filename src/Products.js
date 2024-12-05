import { useState } from "react";
import "./App.css";

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      //product 1///
      name: "TEKCOOL Hot Water Bag",
      description: "High quality guaranteed rubber hot bag, leak-proof, colorful, easy to clean, and keeps water hot for a long time.",
      image: "image1.jpg",
      buyLink: "https://amzn.to/3Zv8ggo",

    },
    {
      //product 2///
      name: "TEKCOOL Toothbrush Holders",
      description: "The length of the holder is 17.5cms, the breadth is 9cms and the height is 11.5cms. This stand is neither too big nor too small. It has an ideal size and has a perfect storage capacity.",
      image: "image2.jpg",
      buyLink: "https://amzn.to/3Xexample",
    },

    {
      //product 3///
      name: "FUAARK Oversized Solid Round Neck Tshirts for Men",
      description: "tylish and affordable product!",
      image: "image3.jpg",
      buyLink: "https://amzn.to/4fOC6lT",
    },
    {
      //product 4///
      name: "Herbals Sheasoft Honey & Saffron Lotion for All Skin Types",
      description: "Daily Hydration with Sun Protection: This lotion offers daily moisture while shielding from the sun",
      image: "image4.jpg",
      buyLink: "https://amzn.to/4example",
    },
    {
      //product 5///
      name: "Oshea Herbals Almondfine Anti Ageing Face Serum for Normal Skin Type",
      description: "Youthful Radiance: Revitalize your skin with our targeted treatment, reducing wrinkles while enhancing hydration, texture, elasticity, and firmness.",
      image: "image5.jpg",
      buyLink: "https://amzn.to/4example",
    },

    {
      //product 6///
      name: "Buraaq 44 Watt Flash Charger Type",
      description: "Comprehensive Charger Set: Our mobile charger adaptor comes with a 44W power unit and a Type C USB cable, ensuring you have everything required for efficient charging and seamless data transfer, all in one package.",
      image: "image6.jpg",
      buyLink: "https://amzn.to/4example",
    },

    {
      //product 7///
      name: "TEKCOOL Wall Clock 12 Silent Quartz Decorative Latest Wall Clock Non-Ticking",
      description: "🕘 Non-ticking Wall Clock--- Built-in quiet sweep continuous-movement second-hand, wall clock ensures a silent sleeping or working environment.",
      image: "image7.jpg",
      buyLink: "https://amzn.to/3Zxnthb",
    },

    {
      //product 8///
      name: "AERYS Digital Display Alarm Clock Table Clock",
      description: "🕘 Three steps crescendo alarm: alarm will sound loudly gradually, gently wake you up from sleeping..",
      image: "image8.jpg",
      buyLink: "https://amzn.to/4fTcW5r",
    },

  ]

  return (
    <div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button
              onClick={() => setSelectedProduct(product)}
              className="view-details-button"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="popup-image"
            />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <button
              onClick={() => window.open(selectedProduct.buyLink, "_blank")}
              className="buy-on-amazon-button"
            >
              Buy on Amazon
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;