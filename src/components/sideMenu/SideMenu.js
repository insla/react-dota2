import './SideMenu.scss';
import logoIcon from '../../resources/icons/Logo-mini.png';
import arrowRightIcon from '../../resources/icons/arrow-right.png';
import arrowRightIconWhite from '../../resources/icons/arrow-right-white.png';
import personIcon from '../../resources/icons/person.png';
import personIconGreen from '../../resources/icons/person-green.png';
import searchIcon from '../../resources/icons/search.png';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { useState } from 'react';

const SideMenu = ({state, changeState}) => {
    const [iconLogin, setIconLogin] = useState(true);
    const [iconBlackTeams, setIconBlackTeams] = useState(false)
    const [iconBlackMatches, setIconBlackMatches] = useState(false)

    return (
        <aside className={state ? 'side-menu side-menu_active' : 'side-menu'}>
            <div onClick={() => changeState(false)} className='side-menu__overlay'></div>
            <div className='side-menu__logo'>
                <p onClick={() => changeState(false)}>✕</p>
                <img src={logoIcon} alt="logo" />
            </div>
            <div className='side-menu__search'>
                <input className='input input_main-page' type="sarch" placeholder="Найти профиль"/>
                <div className='input__line'></div>
                <img className='input__img input__img_side-menu' src={searchIcon} alt="search" />
            </div>
            <div className='side-menu__link'>
                <Link 
                    to='/matches'
                    onMouseLeave={() => setIconBlackMatches(false)}
                    onMouseEnter={() => setIconBlackMatches(true)}>
                        <p>Список матчей</p>
                        <img src={iconBlackMatches ? arrowRightIcon : arrowRightIconWhite} alt="arrowRight" />
                </Link>
            </div>
            <div className='side-menu__link'>
                <Link 
                    to='/teams'
                    onMouseLeave={() => setIconBlackTeams(false)}
                    onMouseEnter={() => setIconBlackTeams(true)}>
                        <p>Список команд</p>
                        <img src={iconBlackTeams ? arrowRightIcon : arrowRightIconWhite} alt="arrowRight" />
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