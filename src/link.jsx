const Link = (props)=>{

    return(
        <>
            {props.maps && <a href={props.maps} target="_blank" rel="noopener noreferrer">View On Google Maps</a>}
        </>
    )
}

export default Link;