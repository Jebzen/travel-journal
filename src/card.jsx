import './card.css';
import Picture from './picture';

const Card = (props)=>{
    console.log(props);
    const Class = `card ${props.destination}`

    return(
        <div className={Class}>
            <Picture destination={props.destination}/>
            <div>
                <div>
                    {props.destination}
                    {props.maps}
                </div>
                <h1>{props.attraction}</h1>
                <p>{props.dates}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card;