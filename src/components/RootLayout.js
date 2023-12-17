import Navbar from './Navbar';
import MainPage from './MainPage';
import Footer from './Footer';
import Features from './Features';
import Extensions from './Extensions';
import Questions from './Questions';
import Newsletter from './Newsletter';

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <MainPage/>
            <Features/>
            <Extensions/>
            <Questions/>
            <Newsletter/>
            <Footer/>
        </>
    )
};

export default RootLayout;