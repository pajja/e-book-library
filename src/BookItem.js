import React from "react";

function BookItem(props) {
  const { title, author, release_year, description } = props.book;

  return (
    <div className="ui card">
      <div className="image">
        <div>image</div>
      </div>
      <div className="content">
        <a className="header">{title}</a>
        <div className="meta">
          <div className="date" style={{ color: "black" }}>
            {author}
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">{release_year}</div>
    </div>
  );
}

export default BookItem;
