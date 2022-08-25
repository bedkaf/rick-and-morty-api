import React from "react";

const Card = ({item}) => {
  return (
    <div className="card" style={{minWidth: "200px"}}>
      <img src={item.image} alt=""/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <hr />
        <p></p>
      </div>
    </div>
  )
}

export default Card;