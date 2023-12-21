import {useRef, useState} from 'react'
import '../styles/Navbar.scss';
import CloseMenuIcon from '../assets/images/icon-close.svg';
import Button from './Button';
import {ReactComponent as BookmarkLogo} from '../assets/images/logo-bookmark.svg';
import HamburgerMenuIcon from '../assets/images/icon-hamburger.svg';
import {ReactComponent as FacebookIcon} from '../assets/images/icon-facebook.svg';
import {ReactComponent as TwitterIcon} from '../assets/images/icon-twitter.svg';

export const navElements = ['FEATURES', 'PRICING', 'CONTACT'];

const Navbar = () => {

    const navRef = useRef();
    const [isVisible, setIsVisible] = useState(true);

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
        setIsVisible(!isVisible);
        // Scrolling to top of the page
        window.scrollTo({
            top: 0,
          });
    }

    // button props
    const buttonProps = {
        text : 'Login',
        style : true,
        className :'button-navbar'
    }

    return (
        <header>
            <div 
                className='header-logo' 
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
                <BookmarkLogo className='bookmark-logo' alt='bookmark-logo'/>

            </div>
            <nav className='navbar' ref={navRef}>
                <div className='navbar-header'>
                    <BookmarkLogo className='bookmark-logo' alt='bookmark-logo'/>
                    <button className='navbar-btn-close'>
                        <img 
                            className='navbar-btn__icon' 
                            src={CloseMenuIcon}
                            alt='hamburger-menu-icon'
                            onClick={showNavbar}
                        />
                    </button>
                </div>
                <ul className='navbar-elements'>
                    {navElements.map((element, index) => (
                        <li key={index} className='navbar-elements__item'>
                        {element}
                    </li>
                    ))}
                </ul>
                <Button 
                    text={buttonProps.text} 
                    buttonStyle={buttonProps.style}
                    additionalClass={buttonProps.className}
                />
                <div className='navbar-sm'>
                    <FacebookIcon className='navbar-sm__fb' alt='facebook-icon' />
                    <TwitterIcon className='navbar-sm__tw' alt='twitter-icon' />
                </div>
            </nav>
            <button 
                className='header-btn'
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
                <img 
                    className='header-btn__icon' 
                    src={HamburgerMenuIcon}
                    alt='hamburger-menu-icon'
                    onClick={showNavbar}
                />
            </button>
        </header>
    )
}

export default Navbar;