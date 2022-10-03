import React from 'react';
import styles from './Cards.module.scss';

const Cards = ({results}) => {

  let display;
  if(results){
    // map function to automatically make cards
    // mapping the results the x will target the results one by one
    // img-fluid is hwat makes cards web responsive in bootstrap
    // can find in console when opening window to see variable names for api
    // for status badge we used a template literal to make styles.badge a variable to use the Cards.module.scss
    display = results.map(x=>{
      let {id, name, image, location, status} = x;
      return(<div key={id} className="col-4 mb-4 position-relative">
        <div className={styles.cards}>
          <img src={image} alt="" className={`${styles.img} img-fluid`}></img>
          <div style={{padding: "10px"}}className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="fs-6">Last Location</div>
            <div className="fs-5">{location.name}</div>
          </div>
        </div>
        {(()=>{ // IIFE function
          if(status === "Dead"){
            return (<div className={`${styles.badge} position-absolute badge bg-danger`}> {status} </div>)
          }
          else if(status === "Alive"){
            return (<div className={`${styles.badge} position-absolute badge bg-success`}> {status} </div>)
          }
          else{
            return (<div className={`${styles.badge} position-absolute badge bg-secondary`}> {status} </div>)
          };
        })()}
      </div>
      );
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
