import React from 'react'

const Cards = ({results}) => {

  let display;
  if(results){
    // map function to automatically make cards
    // mapping the results the x will target the results one by one
    // img-fluid is hwat makes cards web responsive in bootstrap
    display = results.map(x=>{
      let {id, name, image} = x;
      return(<div key={id} className="col-4">
        <div className="">
          <img src={image} alt="" className="img-fluid"></img>
          <div className="content">
            <div className="">{name}</div>
          </div>
        </div>
      </div> )
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
