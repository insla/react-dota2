import './SideMenu.scss';
import logoIcon from '../../resources/icons/Logo-mini.png';
import arrowRightIcon from '../../resources/icons/arrow-right.png';
import personIcon from '../../resources/icons/person.png';
import personIconGreen from '../../resources/icons/person-green.png';
import searchIcon from '../../resources/icons/search.png';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { useState } from 'react';

const SideMenu = ({state, changeState}) => {
    const [iconLogin, setIconLogin] = useState(true);

    return (
        <aside className={state ? 'side-menu side-menu_active' : 'side-menu'}>
            <div onClick={() => changeState(false)} className='side-menu__overlay'></div>
            <div className='side-menu__logo'>
                <p onClick={() => changeState(false)}>✕</p>
                <img src={logoIcon} alt="logo" />
            </div>
            <div className='side-menu__search'>
                <input type="sarch" placeholder="Найти профиль"/>
                <img src={searchIcon} alt="search" />
                <div className='side-menu__line'></div>
            </div>
            <div className='side-menu__link'>
                <Link to='/matches'>
                    <p>Список матчей</p>
                    <img src={arrowRightIcon} alt="arrowRight" />
                </Link>
            </div>
            <div className='side-menu__link'>
                <Link to='/teams'>
                    <p>Список команд</p>
                    <img src={arrowRightIcon} alt="arrowRight" />
                </Link>
            </div>
            <div className='side-menu__button'>
                <Button 
                    className='button_bg-none button_full-parent'
                    onMouseEnter={() => setIconLogin(false)}
                    onMouseLeave={() => setIconLogin(true)}>
                    <div className='button__icon'>
                        <img src={iconLogin ? personIcon : personIconGreen} alt="personal" />
                    </div>
                    Вход
                </Button>
            </div>
        </aside>
    )
}

export default SideMenu;