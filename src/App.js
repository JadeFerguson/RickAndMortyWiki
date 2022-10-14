
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/episodes" element={<Episodes></Episodes>}></Route>
        <Route path="/location" element={<Location></Location>}></Route>
      </Routes>
    </Router>
  );
}

const Home = () => {
  //   variable      function               default value
  // and use this to bind to numbers for pagination     
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")

  let [fetchedData, updateFetchedData] = useState([]);

  // This is called destructured 
  let {info, results} = fetchedData;

  // cant use double quotes or we cant use variables in here
  // use a template literal using backtics
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // To actually fill with data you have to use a useEffect Hook
  // Whenever API changes we want to fetch it below
  useEffect(()=>{
    // async function to fetch data from api
    // IIFE JS is a function that runs as soon as it is defined so we do not have
    // to call the function
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} ></Search>

      <div className="container">
        <div className="row">
            <Filters 
              setGender={setGender}
              setStatus={setStatus}
              setSpecies={setSpecies}
              setPageNumber={setPageNumber}></Filters> 
          <div className="col-8">
            <div className="row">
              <Cards results={results}></Cards>
            </div>
          </div>
        </div>
      </div>

      <Pagination 
        info={info}
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}>
      </Pagination>
    </div>
  );
};

export default App;
