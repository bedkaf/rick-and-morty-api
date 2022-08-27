import React from "react";
import Card from "./Card";

const GetCharacter = ({character = []}) => {
  console.log(character);
  return (
    <div className="row">
      {
        character.map((item, index) => (
          <div key={index} className="col mb-4">
            <Card item={item}/>
            <div className="h"/>
          </div>
        ))
      }
    </div>
  )
}

export default GetCharacter;