import React from "react";
import { Search } from "lucide-react"; // Lucide-react for the search icon
import "./SearchInput.scss"; // Import SCSS file

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  placeholder,
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search..."}
        className="search-input"
      />
      <button className="search-button" onClick={onSearch}>
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchInput;
