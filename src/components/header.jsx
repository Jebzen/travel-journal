import './header.css';
//import SocialLink from './components/SocialLink';

function Header() {
    /* 
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
    
            {data.map((item)=>{
                return <SocialLink icon={item.icon} link={item.link}/>
            })}
    */
    return(
        <div className='header'>
            <i className="bi bi-globe"></i>
            <p>my travel journal</p>
        </div>
    )
}

export default Header;