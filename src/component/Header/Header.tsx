import styles from "./Header.module.scss";
import { useState } from "react";
import SearchInput from "../Search/Search";
import { FaTiktok, FaInstagram } from "react-icons/fa"; // Import Facebook and Instagram icons

const Header: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };
  return (
    <div className={styles.header}>
      {/* Logo div */}
      <div className={styles.logo}>Logo</div>

      {/* Search input div */}
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={handleSearch}
      />

      {/* Right section with social media icons */}
      <div className={styles["right-section"]}>
        <FaInstagram size={24} color="#E4405F" className={styles.icon} />
        <FaTiktok size={24} color="#E4405F" className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
