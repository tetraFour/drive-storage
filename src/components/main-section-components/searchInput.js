import React from "react";

class SearchInput extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="search-icon">
          <img src="/images/icons/search.svg" alt="search" />
        </div>
        <input className="search-input" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default SearchInput;
