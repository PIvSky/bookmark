import '../styles/BrowserCard.scss';
import Button from './Button';

const BrowserCard = ({logo, title, version, dots}) => {

    const buttonContent = 'Add & Install Extension';

    return (
        <>
            <div className='card-container'>
                <img className='card-image' src={logo} alt={logo}></img>
                <h3 className='card-title'>{title}</h3>
                <p className='card-version'>{version}</p>
                <img className='card-dots' src={dots} alt='dots'/>
                <Button content={buttonContent}/>
            </div>
        </>
    )
}

export default BrowserCard;