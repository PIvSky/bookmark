import '../styles/Button.scss';

const Button = ({text, buttonStyle, additionalClass}) => {

    const buttonClasses = buttonStyle ? `button ${additionalClass}` : 'button';
 

    return (
        <button className={buttonClasses}>{text}</button>
    )
}

export default Button;