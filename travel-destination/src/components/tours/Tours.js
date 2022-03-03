import React from 'react';
import "./Tours.css";
import Tour from './tour/Tour';
const Tours = (props) =>{
    return(
        <>
        <div id="con">
        {
            props.tour.map(data => {
                return(
                    <>
                    <Tour data={data}/>
                    </>
                )
                
            })
        }

        </div>
        </>
        
        
    )
};

export default Tours;