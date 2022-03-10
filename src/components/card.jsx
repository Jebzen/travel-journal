import './card.css';
import Picture from './picture';
import Link from './link';

const Card = (props)=>{
    //console.log(props);
    const Class = `card ${props.destination}`

    return(
        <div className={Class}>
            <Picture destination={props.destination}/>
            <div className='text'>
                <div className='line'>
                    <h3><i className='bi bi-geo-alt-fill'></i>{props.destination}</h3>
                    <p className='link'>
                        <Link maps={props.maps}/>
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