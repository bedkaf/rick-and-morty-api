import React from "react";

const Navigation = ({page, prev, next, onPrevius, onNext}) => {
  var contador=0;
  const gotoBack = () => {
    contador++;
    onPrevius();
  }
  const gotoAdvance = () => {
    contador=contador+1;
    onNext()
  }

  return(
    <nav>
      <ul className="pagination justify-content-center">
        {
          prev ? (
            <li className="page-item">
              <button className="page-link" onClick={gotoBack}>Anterior</button>
            </li>
          ): null
        }
        <li className="page-item">
          {`${contador}-${page}`}
        </li>
        {
          next ?(
            <li className="page-item">
              <button className="page-link" onClick={gotoAdvance}>Siguiente</button>
            </li>
          ): null
        }
        
      </ul>
    </nav>
  )
}

export default Navigation;