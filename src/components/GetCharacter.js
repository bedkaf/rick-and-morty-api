import React from "react";
import Card from "./Card";

const GetCharacter = ({character = []}) => {
  return (
    <div className="row">
      {
        character.map((item, index) => (
          <div key={index} className="col">
            <Card item={item}/>
          </div>
        ))
      }
    </div>
  )
}

export default GetCharacter;