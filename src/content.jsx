import './content.css';
import Card from './card';

function Content(){
    const data =[
        {
            destination: "Japan",
            attraction: "Mount Fuji",
            dates: "12 Jan, 2021 - 24 Jan, 2021",
            maps: "###",
            desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        },
        {
            destination: "Australia",
            attraction: "Sydney Opera House",
            dates: "27 May, 2021 - 8 Jun, 2021",
            maps: "###",
            desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
        },
        {
            destination: "Norway",
            attraction: "Geirangerfjord",
            dates: "01 Oct, 2021 - 18 Nov, 2021",
            maps: "###",
            desc: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
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