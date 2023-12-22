import { useState, useRef } from 'react';
import '../styles/Newsletter.scss';
import Button from './Button';
import '../styles/Button.scss';
import { useSpring, animated } from 'react-spring';
import IconError from '../assets/images/icon-error.svg';
import validEmail from '../validation/Validation';

const AnimatedCounting = ({n}) => {
    const { number } = useSpring({
        from: {number: 35000},
        number: n,
        delay: 1000,
        config: {mass: 1, tension: 20, friction: 10, duration: 20000},
    });

    return <animated.span>{number.to((n)=> n.toLocaleString('en-US', { maximumFractionDigits: 0 }))}</animated.span>
}

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const emailRef = useRef(null);
    const errorRef = useRef(null);
    const validationRef = useRef(null);

    // button props
    const buttonProps = {
        text : 'Contact Us',
        style : true,
        className :'button-red'
    }

    // email value
    const emailValue = (event) => {
        setEmail(event.target.value)
    }

    // on click handler
    const newsletterHandler = () => {
        const emailBorder = emailRef.current && emailRef.current.style;
        const validationText = validationRef.current && validationRef.current.style;
        const errorImage = errorRef.current && errorRef.current.style;

        // validation of input
        if (emailBorder && validationText && errorImage) {
            if (!validEmail.test(email) || email === '') {
            emailBorder.border = '2px solid hsl(0, 94%, 66%)';
            emailBorder.borderBottomRightRadius = '0px';
            emailBorder.borderBottomLeftRadius = '0px'
            validationText.display = 'block';
            errorImage.display = 'block';
            } else {
                alert('Newsletter signed up!')
                emailBorder.border = '2px solid hsl(0, 0%, 100%)';
                emailBorder.borderBottomRightRadius = '5px';
                emailBorder.borderBottomLeftRadius = '5px'
                validationText.display = 'none';
                errorImage.display = 'none';
            }
        }

        console.log(email)
        setEmail('')
    }

    return (
        <>
            <div className='newsletter'>
                <div className='newsletter-container'>
                    <p className='newsletter-container__joined'><AnimatedCounting n={0} /> + ALREADY JOINED</p>
                    <h2 className='newsletter-container__title'>Stay up-to-date with what we're doing</h2>
                    <div className='email-container'>
                        <div className='input-container'>
                            <input 
                                ref={emailRef}
                                type='email' 
                                value={email} 
                                onChange={emailValue} 
                                className='input-container__input' 
                                placeholder='Enter your email adress'>
                            </input>
                            <img ref={errorRef} className='input-container__error' src={IconError} alt='error' />   
                            <span ref={validationRef} className='input-container__validation'> Whoops, make sure it's an email</span>
                        </div>
                        <Button 
                            onClick={newsletterHandler}
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