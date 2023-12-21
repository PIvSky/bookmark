import '../styles/Modal.scss';
import {ReactComponent as Close} from '../assets/images/icon-close.svg';
import Tab2 from '../assets/images/illustration-features-tab-2.svg';

const Modal = ({onClick}) => {

    const popupContent = {
        picture : Tab2,
        title : 'Intelligent search',
        content : 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    }

    return (
        <div className='popup-wrapper'>
            <div className="popup" open>
                <div className="popup-pic">
                    <img
                        className="popup-pic__image"
                        src={popupContent.picture}
                        alt={popupContent.title}
                    />
                    <div className='popup-pic__graphic' />
                </div>
                <div className='popup-content'>
                    <h2 className='popup-content__title'>{popupContent.title}</h2>
                    <p className='popup-content__desc'>{popupContent.content}</p>
                </div>
                <Close className='popup-close' onClick={onClick} />
            </div>
        </div>
    )
}

export default Modal;