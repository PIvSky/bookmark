import '../styles/Button.scss';

const Button = ({content, buttonStyle, additionalClass}) => {

    const buttonClasses = buttonStyle ? `button ${additionalClass}` : 'button';
 

    return (
        <button className={buttonClasses}>{content}</button>
    )
}

export default Button;