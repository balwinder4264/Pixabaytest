import React, { useState, useRef } from "react";
import axios from "axios";
const Search = () => {
  const [test, settest] = useState();
  const refinput = useRef();
  const searhandler = e => {
    const input = refinput.current.value;
    axios(
      `https://pixabay.com/api/?key=13978674-e22e59e4c29d0664c99010e98&q=${input}&image_type=photo`
    ).then(data => {
      settest(data.data.hits);
      console.log("Still work ", test);
    });
  };
  return (
    <div className="row">
      <div className="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              First and last name
            </span>
          </div>
          <input
            type="text"
            ref={refinput}
            onChange={searhandler}
            class="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
