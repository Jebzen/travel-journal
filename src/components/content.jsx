import Card from './card';

function Content(props){
    let list = props.value;
    return (
       <>
            {
                list.map((item)=> {
                    return <Card 
                        destination={item.destination}
                        attraction={item.attraction}
                        dates={item.dates}
                        maps={item.maps}
                        picture={item.picture}
                        desc={item.desc}
                        />
                })
            }
        </> 
    )
}

export default Content;