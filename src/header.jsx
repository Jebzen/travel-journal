import './header.css';
import SocialLink from './components/SocialLink';

function Header() {
    const data = [
        {
            icon: 'github',
            link: 'www.github.com'
        },
        {
            icon: 'facebook',
            link: 'www.facebook.com'
        }
    ];
    return(
        <div className='header'>
            {data.map((item)=>{
                return <SocialLink icon={item.icon} link={item.link}/>
            })}
        </div>
    )
}

export default Header;