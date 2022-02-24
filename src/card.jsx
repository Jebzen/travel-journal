import './card.css';
import Picture from './picture';

const Card = (props)=>{
    //console.log(props);
    const Class = `card ${props.destination}`

    return(
        <div className={Class}>
            <Picture destination={props.destination}/>
            <div>
                <div className='line'>
                    <h3><i className='bi bi-geo-alt-fill'></i>{props.destination}</h3>
                    <p className='link'>
                        <a href={props.maps} target="_blank" rel="noopener noreferrer">View On Google Maps</a>
                    </p>
                </div>
                <h1>{props.attraction}</h1>
                <p className='dates'>{props.dates}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card;