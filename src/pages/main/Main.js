import './Main.scss';
import cornerShade from '../../resources/img/Corner-shade.png';
import iconPerson from '../../resources/icons/person.png';
import iconPersonGreen from '../../resources/icons/person-green.png'
import iconSearch from '../../resources/icons/search.png';
import logo from '../../resources/icons/Logo-on-main-page.png';
import openSource from '../../resources/img/start-page/open-source.png';
import data from '../../resources/img/start-page/date.png';
import free from '../../resources/img/start-page/free.png';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FixButton from '../../components/fixButton/FixButton';
import Footer from '../../components/footer/Footer';

const Main = () => {
    const [login, setLogin] = useState(true)

    return (
        <>
            <main>
                <section className="start-page">
                    <div className='container'>
                        <img className="start-page__shade" src={cornerShade} alt="shade"/>

                        <div className="start-page__button-authorization">
                            <Button 
                                className='button_with-icon button_bg-none' 
                                onMouseEnter = {() => setLogin(false)} 
                                onMouseLeave = {() => setLogin(true)}>
                                <div className='button__icon'>
                                    <img 
                                        src={login ? iconPerson : iconPersonGreen}
                                        alt="person"
                                    />
                                </div>
                                Авторизация
                            </Button>
                        </div>

                        <div className="start-page__logo-and-search">

                            <img src={logo} alt="logo" className="start-page__logo"/>

                            <div className="start-page__wrapper-search">
                                <div className="start-page__search">
                                    <input type="sarch" placeholder="Поиск по сайту..."/>
                                    <img src={iconSearch} alt="search"/>
                                    <div></div>
                                </div>

                                <div className="start-page__wrapper-button">
                                    <Link to='/matches'>
                                        <Button className='button_long button_bg-white'>Список матчей</Button>
                                    </Link>

                                    <Link to='/teams'>
                                        <Button className='button_long button_bg-white'>Список команд</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="start-page__description">
                            <div className="start-page__description-wrapper">
                                <img src={openSource} alt="source"/>
                                <span>ОТКРЫТЫЙ ИСТОЧНИК</span>
                                <p>Вся информация и данные для сайта берутся из OpenSource данных.</p>
                            </div>

                            <div className="start-page__description-wrapper">
                                <img src={data} alt="date"/>
                                <span>ПОДРОБНЕ ДАННЫЕ</span>
                                <p>Анализ файлов повторов предоставляет очень подробные данные о матче.</p>
                            </div>

                            <div className="start-page__description-wrapper">
                                <img src={free} alt="free"/>
                                <span>БЕСПЛАТНО</span>
                                <p>Серверы финансируются спонсорами, а код поддерживают волонтеры, поэтому услуга предоставляется бесплатно.</p>
                            </div>
                        </div>
                        <FixButton/>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Main;