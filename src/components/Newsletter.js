import '../styles/Newsletter.scss';
import Button from './Button';
import '../styles/Button.scss';

const Newsletter = () => {

    // button props
    const buttonProps = {
        text : 'Contact Us',
        style : true,
        className :'button-red'
    }

    return (
        <>
            <div className='newsletter'>
                <div className='newsletter-container'>
                    <p className='newsletter-container__joined'>35,000 + ALREADY JOINED</p>
                    <h2 className='newsletter-container__title'>Stay up-to-date with what we're doing</h2>
                    <div className='email-container'>
                        <input className='email-container__input' placeholder='Enter your email adress'></input>
                        <Button 
                            text={buttonProps.text} 
                            buttonStyle={buttonProps.style}
                            additionalClass={buttonProps.className}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;