import '../styles/Button.scss';

const Button = ({text, buttonStyle, additionalClass, onClick}) => {

    const buttonClasses = buttonStyle ? `button ${additionalClass}` : 'button';
 

    return (
        <button onClick={onClick} className={buttonClasses}>{text}</button>
    )
}

export default Button;