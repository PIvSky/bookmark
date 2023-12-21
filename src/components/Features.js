import {useState} from 'react';
import '../styles/Features.scss';
import Button from './Button';
import Tab1 from '../assets/images/illustration-features-tab-1.svg';
import Tab2 from '../assets/images/illustration-features-tab-2.svg';
import Tab3 from '../assets/images/illustration-features-tab-3.svg';


const Features = () => {

    const [selectedFeature, setSelectedFeature] = useState(null);

    const handleFeatureSelect = (feature) => {
        setSelectedFeature(feature);
      };

    //   const Tab1 = '../assets/images/illustration-features-tab-1.svg';
    
      let picture;
      let title;
      let content;

      switch (selectedFeature) {
        case 'bookmarking':
          picture = Tab1;
          title = 'Bookmark in one click';
          content = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
          break;
        case 'searching':
          picture = Tab2;
          title = 'Intelligent search';
          content = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
          break;
        case 'sharing':
          picture = Tab3;
          title = 'Share your bookmarks';
          content = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a buton.';
          break;
        default:
            title = 'Bookmark in one click';
            content = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites';
      }

    // button props
    const buttonProps = {
        text : 'More Info',
        style : true,
        className :'button-tab'
    }
            
    return (
    <>
        <div className="features-container">
            <div className="features-content">
            <h2 className="features-content__title">Features</h2>
            <p className="features-content__article">
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so you
                can access them on the go.
            </p>
            </div>
            <ul className="features-nav">
                <li
                    className={`features-nav__element ${selectedFeature === 'bookmarking' ? 'active' : ''}`}
                    onClick={() => handleFeatureSelect("bookmarking")}
                >
                    Simple Bookmarking
                </li>
                <li
                    className={`features-nav__element ${selectedFeature === 'searching' ? 'active' : ''}`}
                    onClick={() => handleFeatureSelect("searching")}
                >
                    Speedy Searching
                </li>
                <li
                    className={`features-nav__element ${selectedFeature === 'sharing' ? 'active' : ''}`}
                    onClick={() => handleFeatureSelect("sharing")}
                >
                    Easy Sharing
                </li>
            </ul>
            
        </div>
        <div className="features-tab">
            <div className="tab-pic">
                <img
                    className="tab-pic__image"
                    src={picture}
                    alt={title}
                />
                <svg className="tab-pic__graphic" width="100%" height="100%">
                    <rect
                        x="-90"
                        y="0"
                        width="104%"
                        height="100%"
                        rx="90"
                        ry="90"
                        fill="none"
                    />
                </svg>
            </div>
            <div className='tab-content'>
                <h2 className='tab-content__title'>{title}</h2>
                <p className='tab-content__content'>{content}</p>
                <Button 
                    text={buttonProps.text} 
                    buttonStyle={buttonProps.style}
                    additionalClass={buttonProps.className}
                />
                {/* <button className='tab-content_button'>More Info</button> */}
            </div>
        </div>
    </>
    );
}

export default Features;