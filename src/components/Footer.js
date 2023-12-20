import '../styles/Footer.scss';
import { navElements } from './Navbar';
import { ReactComponent as BookmarkLogo} from '../assets/images/logo-bookmark.svg';
import { ReactComponent as FbIcon } from '../assets/images/icon-facebook.svg';
import { ReactComponent as TwIcon } from '../assets/images/icon-twitter.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-title'>
                <BookmarkLogo />
            </div>
            <ul className='footer-nav'>
                {navElements.map((element, index) => (
                    <li className='footer-nav__element' key={index}>
                        {element}
                    </li>
                ))}
            </ul>
            <div className='footer-socialmedia'>
                <FbIcon className='footer-socialmedia__item'/>
                <TwIcon className='footer-socialmedia__item'/>
            </div>
        </footer>
    )
}

export default Footer;