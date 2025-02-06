import React, { useState } from "react";
import styles from "./ProductCategories.module.scss";

const categories = [
  {
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Cameras", "Accessories"],
  },
  {
    name: "Clothing",
    subcategories: ["Men", "Women", "Kids", "Accessories"],
  },
  {
    name: "Home & Kitchen",
    subcategories: ["Furniture", "Appliances", "Decor", "Cookware"],
  },
  {
    name: "Sports & Outdoors",
    subcategories: ["Fitness", "Camping", "Cycling", "Accessories"],
  },
];

const Navbar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {categories.map((category) => (
          <li
            key={category.name}
            className={styles.navItem}
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {category.name}
            <div
              className={`${styles.dropdown} ${
                activeCategory === category.name ? styles.active : ""
              }`}
            >
              {category.subcategories.map((sub, index) => (
                <div key={index} className={styles.dropdownItem}>
                  {sub}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
