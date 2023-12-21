import '../styles/Newsletter.scss';
import Button from './Button';
import '../styles/Button.scss';
import { useSpring, animated } from 'react-spring';

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
                    <p className='newsletter-container__joined'><AnimatedCounting n={0} /> + ALREADY JOINED</p>
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