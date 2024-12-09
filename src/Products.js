import { useState, useEffect } from "react";
import "./App.css";

function Product() {
  // Define the function before usage
  const calculateTimeLeft = (expiryTime) => {
    const difference = expiryTime - Date.now();
    if (difference <= 0) {
      return null; // Deal expired
    }
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const initialProducts = [
    {
      //product 1///
      name: "TEKCOOL Hot Water Bag",
      description: "High quality guaranteed rubber hot bag, leak-proof, colorful, easy to clean, and keeps water hot for a long time.",
      image: "image1.jpg",
      buyLink: "https://amzn.to/3Zv8ggo",
      expiryTime: Date.now() + 43200, // Example: 2 hours from now


    },
    {
      //product 2///
      name: "TEKCOOL Toothbrush Holders",
      description: "The length of the holder is 17.5cms, the breadth is 9cms and the height is 11.5cms. This stand is neither too big nor too small. It has an ideal size and has a perfect storage capacity.",
      image: "image2.jpg",
      buyLink: "https://amzn.to/3Xexample",
      expiryTime: Date.now() + 43200, // Example: 2 hours from now

    },

    {
      //product 3///
      name: "FUAARK Oversized Solid Round Neck Tshirts for Men",
      description: "tylish and affordable product!",
      image: "image3.jpg",
      buyLink: "https://amzn.to/4fOC6lT",
      expiryTime: Date.now() + 43200, // Example: 2 hours from now

    },
    {
      //product 4///
      name: "Herbals Sheasoft Honey & Saffron Lotion for All Skin Types",
      description: "Daily Hydration with Sun Protection: This lotion offers daily moisture while shielding from the sun",
      image: "image4.jpg",
      buyLink: "https://amzn.to/4example",
      expiryTime: Date.now() + 43200, // Example: 2 hours from now

    },
    {
      //product 5///
      name: "Oshea Herbals Almondfine Anti Ageing Face Serum for Normal Skin Type",
      description: "Youthful Radiance: Revitalize your skin with our targeted treatment, reducing wrinkles while enhancing hydration, texture, elasticity, and firmness.",
      image: "image5.jpg",
      buyLink: "https://amzn.to/4example",
      expiryTime: Date.now() + 43200, // Example: 2 hours from now

    },

    {
      //product 6///
      name: "Buraaq 44 Watt Flash Charger Type",
      description: "Comprehensive Charger Set: Our mobile charger adaptor comes with a 44W power unit and a Type C USB cable, ensuring you have everything required for efficient charging and seamless data transfer, all in one package.",
      image: "image6.jpg",
      buyLink: "https://amzn.to/4example",
      expiryTime: Date.now() + 43200, // Example: 2 hours from now

    },

    {
      //product 7///
      name: "TEKCOOL Wall Clock 12 Silent Quartz Decorative Latest Wall Clock Non-Ticking",
      description: "🕘 Non-ticking Wall Clock--- Built-in quiet sweep continuous-movement second-hand, wall clock ensures a silent sleeping or working environment.",
      image: "image7.jpg",
      buyLink: "https://amzn.to/4fbFdTQ",
      expiryTime: Date.now() + 43200000, // Example: 2 hours from now

    },

    {
      //product 8///
      name: "AERYS Digital Display Alarm Clock Table Clock",
      description: "🕘 Three steps crescendo alarm: alarm will sound loudly gradually, gently wake you up from sleeping..",
      image: "image8.jpg",
      buyLink: "https://amzn.to/4fTcW5r",
      expiryTime: Date.now() + 43200000, // Example: 2 hours from now

    },
   {
      //product 9///
      name: "Royal Export Women's Silk Blend Yoke Design Solid Straight Kurta Pant with Dupatta",
      description: "Kurta Color- Teal Blue, Pant Color- Teal Blue, Dupatta Color- Teal Blue",
      image: "image9.jpg",
      buyLink: "https://amzn.to/3OJ1jC8",
      expiryTime: Date.now() + 43200000, // Example: 2 hours from now

    },
   {
      //product 10///
      name: "Royal Export Women's Chanderi Ethnic Motifs Embroidered Straight Kurta Pant with Dupatta",
      description: "Kurta Color- Teal Blue, Pant Color- Teal Blue, Dupatta Color- Teal Blue",
      image: "image10.jpg",
      buyLink: "https://amzn.to/4ieMzZk",
      expiryTime: Date.now() + 43200000, // Example: 2 hours from now

    },

       {
      //product 11///
      name: "ABSO ESSENTIALS Barrier Repair Moisturizer | Lightweight",
      description: "Intensive Hydration: Enriched with nourishing ingredients, this moisturiser deeply hydrates and restores the skin's natural moisture barrier.",
      image: "image11.jpg",
      buyLink: "https://amzn.to/49kpbWt",
      expiryTime: Date.now() + 43200000, // Example: 2 hours from now

    },

       {
      //product 12///
      name: "Naturow Extra Virgin Avocado Oil | Cold Pressed",
      description: "❇️ DELICIOUS AND VERSATILE: With a high smoke point, Naturow’s Avocado oil can be used for high heat cooking, Frying, Baking, Homemade Sauces, Dressings and Marinades.",
      image: "image12.jpg",
      buyLink: "https://amzn.to/3VoQ1ab",
      expiryTime: Date.now() + 43200000, // Example: 2 hours from now

    },
    
  ]

  const [products] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [timeLeft, setTimeLeft] = useState(
    initialProducts.map((product) => calculateTimeLeft(product.expiryTime))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) =>
        products.map((product) => calculateTimeLeft(product.expiryTime))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [products]);

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
            {timeLeft[index] ? (
              <div className="countdown">
                Time Left: {timeLeft[index].hours}h {timeLeft[index].minutes}m {timeLeft[index].seconds}s
              </div>
            ) : (
              <div className="expired">Expired Deal</div>
            )}
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
