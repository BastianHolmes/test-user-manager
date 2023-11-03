import React, { useState, useRef, useEffect } from "react";
import styles from "./SearchUser.module.css";
import UserItem from "../UserItem";
import { IUser } from "@/models/IUser";

interface Props {
  users: IUser[];
}

const SearchUser: React.FC<Props> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IUser[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = users.filter((user) => {
      if (user.username && user.id) {
        const titleMatch = user.username
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const idMatch = user.id.toString().includes(searchTerm);
        return titleMatch || idMatch;
      }
    });

    setSearchResults(results);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={styles.search} ref={searchRef}>
      <label htmlFor="search" className={styles.label}>
        Find <span className={styles.highlight}>me!</span>
      </label>
      <input
        name="search"
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={handleFocus}
        placeholder="Search tasks"
      />

      {isFocused && (
        <div
          className={styles.resultsContainer}
          onClick={() => setIsFocused(false)}
        >
          <ul>
            {searchResults.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
