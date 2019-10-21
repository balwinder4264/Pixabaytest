import React, { useEffect, useState, useRef, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Search from "./search";
import Context from "./context";
const App = () => {
  const [imamgeurl, setimgurl] = useState();

  const context = useContext(Context);
  const refinput = useRef();
  useEffect(() => {
    axios("https://pixabay.com/api/?key=13978674-e22e59e4c29d0664c99010e98")
      .then(data => {
        // console.log("this ", data.data);
        setimgurl(data.data.hits);
        //  console.log("sec ", imamgeurl);
      })
      .catch(er => er);
  }, []);
  const searhandler = e => {
    const input = refinput.current.value;
    axios(
      `https://pixabay.com/api/?key=13978674-e22e59e4c29d0664c99010e98&q=${input}&image_type=photo`
    ).then(data => {
      setimgurl(data.data.hits);
      console.log("Still work ");
    });
  };

  const favhandler = data => {
    console.log(data);
    console.log(context);
    context.fav.push(data);
    // context.fav.push(data.largeImageURL);
    // console.log(context.fav);
  };
  if (!imamgeurl) return <p>loading</p>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div>
          <input type="text" ref={refinput} onChange={searhandler}></input>
        </div>
      </div>
      <div className="row justify-content-md-center">
        {imamgeurl.map(data => {
          return (
            <div key={data.id}>
              <div className="row">
                <img
                  className="mt-5 mr-2"
                  src={data.userImageURL}
                  alt="Smiley face"
                />
              </div>
              <div className="row">
                <button onClick={() => favhandler(data)}>Like </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
