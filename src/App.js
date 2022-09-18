
import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";

function App() {
  //   variable      function               default value
  // and use this to bind to numbers for pagination     
  let [pageNumber, setPageNumber] = useState(1);

  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;

  console.log(results);
  // cant use double quotes or we cant use variables in here
  // use a template literal using backtics
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  // To actually fill with data you have to use a useEffect Hook
  // Whenevr API changes we want to fetch it below
  useEffect(()=>{
    // async function to fetch data from api
    // IIFE JS is a function that runs as soon as it is defined so we do not have
    // to call the function
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })();
  },[api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters></Filters>
          </div>  
          <div className="col-8">
            <div className="row">
              <Cards></Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
