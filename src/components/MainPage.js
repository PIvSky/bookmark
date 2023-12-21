import '../styles/MainPage.scss';
import MainImage from '../assets/images/illustration-hero.svg';
import Button from './Button';

const MainPage = () => {

    // button props
    const buttonProps = [
        {
            text : 'Get it on Chrome',
            style : false,
            className :'button-red'
        },
        {
            text : 'Get it on Firefox',
            style : true,
            className :'button-grey'
        },
    ];
    
    return (
        <div className='main-container'>
            <div className='main-pic'>
                <img className='main-pic__image' src={MainImage} alt='main-hero' />                
                <div className='main-pic__graphic' />
            </div>
            <div className='main-content'>
                <h2>A Simple Bookmark <br></br> Manager</h2>
                <p>A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sited load instantly. Try it for free.
                </p>
                <div className='main-buttons'>
                    {buttonProps.map((data, index) => (
                        <Button
                            key={index}
                            text={data.text} 
                            buttonStyle={data.style}
                            additionalClass={data.className}
                        />
                    ))
                    
                    }
                </div>
            </div>
            <div className='pic-graphic' />
        </div>
    )
}

export default MainPage;