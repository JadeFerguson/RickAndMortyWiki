import React from 'react';

// Destructed pagination and made a function here
const Pagination = ({pageNumber, setPageNumber}) => {
    let next = () => {
        // x represents the prev value which is number 1
        // so doing x + 1 so update page from 1 to 2 and so on
        setPageNumber(x => x + 1);
    };
    let prev = () => {
        if(pageNumber === 1) return;
        setPageNumber(x => x - 1);
    };
    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={prev} className="btn btn-primary">Prev</button>
            <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    );
};

export default Pagination