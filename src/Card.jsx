

const Card = (props) =>{ 
   
    return(
        <div className="card">
         <div className="img">
            <img src={`./images/${props.imageUrl}`} />
        </div>

        <div className="inner-card">
       
            <h3>{props.title}<span>View on google maps</span></h3>

            <h1>{props.location}</h1>

            <p className="dates">{props.startDate} - {props.endDate}</p>

            <p>{props.description}</p>

        </div>
        
        </div>
    )

}

export default Card;