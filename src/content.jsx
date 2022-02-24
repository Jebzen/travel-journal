import './content.css';
import Card from './card';

function Content(){
    const data =[
        {
            destination: "Japan",
            attraction: "Mount Fuji",
            dates: "12 Jan, 2021 - 24 Jan, 2021",
            maps: "###",
            picture: "japan.jpg",
            desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        }
    ]
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