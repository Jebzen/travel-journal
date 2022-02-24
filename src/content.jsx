import './content.css';
import Card from './card';
import data from './data.js';

function Content(){
    return (
       <div className='content'>
            {
                data.map((item)=> {
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
        </div> 
    )
}

export default Content;