import '../styles/BrowserCard.scss';
import Button from './Button';

const BrowserCard = ({logo, title, version, dots}) => {

    // button props
    const buttonProps = {
        text : 'Add & Install Extension',
        style : false,
        className :''
    }

    return (
        <>
            <div className='card-container'>
                <img className='card-image' src={logo} alt={logo}></img>
                <h3 className='card-title'>{title}</h3>
                <p className='card-version'>{version}</p>
                <img className='card-dots' src={dots} alt='dots'/>
                <Button 
                    text={buttonProps.text} 
                    buttonStyle={buttonProps.style}
                    additionalClass={buttonProps.className}
                />
            </div>
        </>
    )
}

export default BrowserCard;