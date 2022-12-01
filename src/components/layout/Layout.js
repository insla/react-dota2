import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import SideMenu from '../sideMenu/SideMenu';
import { useState } from 'react';
import Modal from '../modal/Modal';
import ModalAuthorization from '../modalAuthorization/ModalAuthorization';    
import ModalRegistration from '../modalRegistration/ModalRegistration';

const Layout = () => {
    const [sideMenuActive, setSideMenuActive] = useState(false);

    const changeState = (boolean) => {
        setSideMenuActive(boolean)
    }

    return (
        <>
            <Header changeState={changeState}/>
                <main className='main'>
                    <Outlet/>
                </main>
                <Modal>
                    <ModalRegistration/>
                </Modal>
                <SideMenu state={sideMenuActive} changeState={changeState}/>
            <Footer/>
        </>
    )
}

export default Layout;