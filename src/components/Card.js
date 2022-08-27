import React from "react";

const Card = ({item}) => {
  return (
    <div className="card" style={{minWidth: "200px"}}>
      <img src={item.image} alt=""/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <hr />
        <p className="card-text"> Especie: {item.species}</p>
        <p className="card-text"> Ubicación: {item.location.name}</p>
        <a href="#" className="btn btn-primary">Ver mas</a>
      </div>
    </div>
  )
}

export default Card;