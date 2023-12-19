import '../styles/BrowserCard.scss';

const BrowserCard = ({logo, title, version, dots}) => {
    return (
        <>
            <div className='card-container'>
                <img className='card-image' src={logo} alt={logo}></img>
                <h3 className='card-title'>{title}</h3>
                <p className='card-version'>{version}</p>
                <img className='card-dots' src={dots} alt='dots'/>
                <button className='card-button'>Add & Install Extension</button>
            </div>
        </>
    )
}

export default BrowserCard;