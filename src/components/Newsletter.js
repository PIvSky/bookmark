import '../styles/Newsletter.scss';
import Button from './Button';
import '../styles/Button.scss';

const Newsletter = () => {

    return (
        <>
            <div className='newsletter'>
                <div className='newsletter-container'>
                    <p className='newsletter-container__joined'>35,000 + ALREADY JOINED</p>
                    <h2 className='newsletter-container__title'>Stay up-to-date with what we're doing</h2>
                    <div className='email-container'>
                        <input className='email-container__input' placeholder='Enter your email adress'></input>
                        <Button 
                            className='email-container__button' 
                            content={'Contact Us'} 
                            buttonStyle={true}
                            additionalClass={'button-red'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;