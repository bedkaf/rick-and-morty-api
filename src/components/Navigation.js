import React from "react";

const Navigation = ({page, prev, next, onPrevius, onNext}) => {
 console.log(next)
  const gotoBack = () => {
    onPrevius();
  }
  const gotoAdvance = () => {
    onNext()
  }

  function getNumbersInString(string) {
    var tmp = string.split("");
    var map = tmp.map(function(current) {
      if (!isNaN(parseInt(current))) {
        return current;
      }
    });
  
    var numbers = map.filter(function(value) {
      return value != undefined;
    });
  
    return numbers.join("")-1;
  }

  return(
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          {prev ? (
            <button className="page-link" onClick={gotoBack}>
              <span aria-hidden="true">&laquo;</span>
              <span className="visually-hidden">Previous</span>
            </button>): null
          }
        </li>
        {next ? (
          <li className="page-item disabled"><a className="page-link">{getNumbersInString(`${next}`)}</a></li>
          ):null
        }
        <li className="page-item disabled"><a className="page-link">{page}</a></li>
        <li className="page-item">
          {next ? (
            <button className="page-link" onClick={gotoAdvance}>
              <span aria-hidden="true">&raquo;</span>
              <span className="visually-hidden">Next</span>
            </button>
            ):null
          }
        </li>
      </ul>
    </nav>
  )

}

export default Navigation;