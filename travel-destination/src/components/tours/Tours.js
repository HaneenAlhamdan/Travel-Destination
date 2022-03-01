import "./Tours.css";
const Tours = (props) =>{
    return(
        <>
        <div id="Tou">
        {
            props.tour.map(data => {
                return(
                    <div id="divTour">
                        <h2>City :{data.name}</h2>
                        <img src={data.image} alt="" />
                    </div>
                )
                
            })
        }

        </div>
        </>
        
        
    )
};

export default Tours;