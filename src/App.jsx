import React, { useState } from "react";
import ProductPage from "./components/ProductPage";

const demoProducts = [
  {
    label: "Tech (TV)",
    props: {
      title: "UltraVision 65'' 4K Smart TV",
      price: "$899.99",
      images: [
        "https://via.placeholder.com/400x400?text=TV+Front",
        "https://via.placeholder.com/400x400?text=TV+Side"
      ],
      description:
        "Experience stunning 4K visuals and smart features with the UltraVision 65'' TV. Perfect for movies, gaming, and streaming.",
      options: [
        { label: "Model", values: ["Standard", "Pro"], type: "button" },
        { label: "Color", values: ["#000", "#fff"], type: "color" }
      ],
      actions: [
        { label: "Add to Cart", onClick: () => alert("Added to cart!"), variant: "primary" },
        { label: "Add to Wish List", onClick: () => alert("Added to wish list!"), variant: "secondary" }
      ],
      extraInfo: <div className="text-sm mt-2">Free shipping on all TVs!</div>
    }
  },
  {
    label: "Clothing (Shirt)",
    props: {
      title: "Julio 5708 Camp-Collar Linen Shirt",
      price: "$125",
      images: [
        "https://via.placeholder.com/400x400/7a4b32/fff?text=Linen+Shirt",
        "https://via.placeholder.com/400x400/fff/7a4b32?text=Shirt+Alt"
      ],
      description:
        "NN07's 'Julio 5708' shirt is ideal for laid-back days, whether you're on holiday or relaxing at the weekend. Cut from breathable linen in a boxy shape.",
      options: [
        { label: "Color", values: ["#7a4b32", "#fff", "#7a7a52"], type: "color" },
        { label: "Size", values: ["S", "M", "L", "XL", "XXL"], type: "button" }
      ],
      actions: [
        { label: "Add to Bag", onClick: () => alert("Added to bag!"), variant: "primary" },
        { label: "Add to Wish List", onClick: () => alert("Added to wish list!"), variant: "secondary" }
      ],
      extraInfo: <div className="text-sm mt-2">Earn exclusive rewards on every purchase.</div>
    }
  },
  {
    label: "Footwear (Sneakers)",
    props: {
      title: "AirMax Pro Sneakers",
      price: "$159.99",
      images: [
        "https://via.placeholder.com/400x400/222/fff?text=Sneakers",
        "https://via.placeholder.com/400x400/fff/222?text=Side+View"
      ],
      description:
        "The AirMax Pro Sneakers combine comfort and style for everyday wear. Lightweight, durable, and available in multiple colors.",
      options: [
        { label: "Color", values: ["#222", "#e63946", "#457b9d"], type: "color" },
        { label: "Size", values: ["7", "8", "9", "10", "11", "12"], type: "button" }
      ],
      actions: [
        { label: "Add to Cart", onClick: () => alert("Added to cart!"), variant: "primary" },
        { label: "Add to Wish List", onClick: () => alert("Added to wish list!"), variant: "secondary" }
      ],
      extraInfo: <div className="text-sm mt-2">Free returns within 30 days.</div>
    }
  }
];

function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 text-center border-b border-border mb-8">
        <h1 className="text-3xl font-bold">Universal Product Page Demo</h1>
        <p className="text-muted-foreground mt-2">Preview for Tech, Clothing, and Footwear products</p>
      </header>
      <div className="flex justify-center mb-8 gap-4">
        {demoProducts.map((prod, idx) => (
          <button
            key={prod.label}
            className={`px-4 py-2 rounded font-medium border transition ${tab === idx ? "bg-primary text-primary-foreground" : "bg-background text-foreground border-border"}`}
            onClick={() => setTab(idx)}
          >
            {prod.label}
          </button>
        ))}
      </div>
      <ProductPage {...demoProducts[tab].props} />
    </div>
  );
}

export default App;