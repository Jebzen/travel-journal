const SocialLink = (props) =>{
    console.log(props);
    const classes = `bi-${props.icon}`;

    return(
        <>
            {props.link && <i className={classes}></i>}
        </>
    )
}

export default SocialLink;