import '../styles/Extensions.scss';
import BrowserCard from './BrowserCard';
import ChromeLogo from '../assets/images/logo-chrome.svg'; 
import FirefoxLogo from '../assets/images/logo-firefox.svg';
import OperaLogo from '../assets/images/logo-opera.svg';
import CardDots from '../assets/images/bg-dots.svg';

const Extensions = () => {

    const BrowsersData = [
        {
            logo: ChromeLogo,
            title: 'Add to Chrome',
            version: 'Minimum version 62',
        },
        {
            logo: FirefoxLogo,
            title: 'Add to Firefox ',
            version: 'Minimum version 55',
        },
        {
            logo: OperaLogo,
            title: 'Add to Opera',
            version: 'Minimum version 46',
        }
    ]

    return (
        <>
            <div className='extensions-header'>
                <h2 className='extensions-title'>Download the extension</h2>
                <p className='extensions-desc'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>
            <div className='extensions-container'>
                {BrowsersData.map((browser, index) => (
                    <BrowserCard
                        key={index}
                        logo={browser.logo}
                        title={browser.title}
                        version={browser.version}
                        dots={CardDots}
                    />
                )
                )}
            </div>
        </>
    )
}

export default Extensions;