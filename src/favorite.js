import React, { useContext, useState } from "react";
import Context from "./context";
const Favorite = () => {
  const context = useContext(Context);
  const [favitem, setfaviem] = useState(context.fav);
  const dislike = data => {
    context.fav.pop(data.userImageURL);
    // const fav = context.fav;
    // setfaviem(fav);
    console.log("favitem ", context.fav);
  };
  return (
    <div className="container ">
      <div className="row ">
        {context.fav.map(data => {
          return (
            <div key={data.id}>
              <div className="row">
                <img
                  className="mt-5 mr-2"
                  src={data.userImageURL}
                  alt="Smiley face"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
