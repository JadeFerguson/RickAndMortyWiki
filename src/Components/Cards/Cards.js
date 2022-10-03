import React from 'react'

const Cards = ({results}) => {

  let display;
  if(results){
    // map function to automatically make cards
    // mapping the results the x will target the results one by one
    display = results.map(x=>{
      let {id, name} = x;
      return(<div key={id} className="col-4">{name}</div> )
    });
  }
  else{
    display = "No Characters Found :/";
  }

  return (
    // These are called empty
    <>
      {display}
    </>
  )
};

export default Cards
