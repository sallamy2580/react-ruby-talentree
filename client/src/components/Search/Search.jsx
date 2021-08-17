import { useState } from "react";
import "./Search.css";
const Search = ({ setDisplayArray, valuesArray, courses, teachers }) => {
  const [input, setInput] = useState("");
  const handleDropdownChange = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setDisplayArray(courses.concat(teachers));
    } else if (value === "teachers") {
      setDisplayArray(teachers);
    } else {
      setDisplayArray(courses);
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setDisplayArray(
      valuesArray.filter((card) =>
        card.username !== undefined
          ? card?.username?.toLowerCase().includes(e.target.value.toLowerCase())
          : card?.name?.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="browse-search">
      <h2>Search</h2>
      <div className="search-bar">
        <select
          name="search_type"
          id="search-type"
          onChange={handleDropdownChange}
        >
          <option value="all">All</option>
          <option value="teachers">Teachers</option>
          <option value="courses">Courses</option>
        </select>
        <input type="text" value={input} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Search;
