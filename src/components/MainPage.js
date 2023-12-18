import '../styles/MainPage.scss';
import MainImage from '../assets/images/illustration-hero.svg';

const MainPage = () => {
    return (
        <div className='main-container'>
            <div className='main-pic'>
                <img className='main-pic__image' src={MainImage} alt='main-hero'></img>                
                <svg width="100%" height="100%">
                    <rect x="80" y="0" width="150%" height="75%" rx="90" ry="90" fill="none"/>
                </svg>

            </div>
            <div className='main-content'>
                <h2>A Simple Bookmark <br></br> Manager</h2>
                <p>A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sited load instantly. Try it for free.
                </p>
                <div className='main-buttons'>
                    <button className='main-buttons__chrome'>Get it on Chrome</button>
                    <button className='main-buttons__firefox'>Get it on Firefox</button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;