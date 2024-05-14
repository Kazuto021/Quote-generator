import { React, useState } from "react";
import CategoryOptions from "./CategoryOptions";
const Quotes = () => {
  const [cat, setCategory] = useState("");
  const [data, setData] = useState("");
  const [author, setAuthor] = useState("");
  const requestAPI = async () => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${cat}`;
    const requestedURL = await fetch(url, {
      method: "Get",
      headers: {
        "X-Api-Key": "0H0NTxbmJLxhY51sw1K1NQ==TGIW7Qkzvxx8IezC",
      },
    });
    let apiResponse = await requestedURL.json();
    const [{quote,author,category}] = apiResponse    
    setData(quote);
    setCategory(category);
    setAuthor(author);
  };

  const onHandleClick = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <h2>Choose your today's quote on</h2>

      <select
        value={cat}
        onChange={onHandleClick}
        name="quote-category"
        id=""
      >
        <CategoryOptions value="age" />
        <CategoryOptions value="alone" />
        <CategoryOptions value="amazing" />
        <CategoryOptions value="anger" />
        <CategoryOptions value="architecture" />
        <CategoryOptions value="art" />
        <CategoryOptions value="birthday" />
        <CategoryOptions value="business" />
        <CategoryOptions value="car" />
        <CategoryOptions value="change" />
        <CategoryOptions value="communication" />
        <CategoryOptions value="computers" />
        <CategoryOptions value="cool" />
        <CategoryOptions value="courage" />
        <CategoryOptions value="dating" />
        <CategoryOptions value="death" />
        <CategoryOptions value="design" />
        <CategoryOptions value="education" />
        <CategoryOptions value="faith" />
        <CategoryOptions value="family" />
        <CategoryOptions value="fitness" />
        <CategoryOptions value="friendship" />
        <CategoryOptions value="funny" />
        <CategoryOptions value="future" />
        <CategoryOptions value="god" />
        <CategoryOptions value="health" />
        <CategoryOptions value="history" />
        <CategoryOptions value="home" />
        <CategoryOptions value="hope" />
        <CategoryOptions value="humour" />
        <CategoryOptions value="imagination" />
        <CategoryOptions value="jealousy" />
        <CategoryOptions value="knowledge" />
        <CategoryOptions value="life" />
        <CategoryOptions value="legal" />
        <CategoryOptions value="love" />
        <CategoryOptions value="marriage" />
        <CategoryOptions value="medical" />
        <CategoryOptions value="men" />
        <CategoryOptions value="money" />
        <CategoryOptions value="morning" />
        <CategoryOptions value="movies" />
        <CategoryOptions value="success" />
      </select>
      <div>
        <button onClick={requestAPI}>confirm</button>
      </div>
      {data != "" ? (
        <div>
          <h4><strong>Quote:</strong> {data}</h4>
          <h5>Author: {author}</h5>
          <h6>Category: {cat}</h6>
        </div>
      ) : (
        <h3>No option choosen.</h3>
      )}
    </>
  );
};

export default Quotes;
