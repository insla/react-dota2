import './Header.scss';
import hamburger from '../../resources/icons/hamburger.png';
import logo from '../../resources/icons/Logo-mini.png';
import shade from '../../resources/img/Corner-shade-left.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <img className='header__shade' src={shade} alt="shade" />
            <div className='header__wrapper'>
                <img src={hamburger} alt="hamburger" />
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
        </header>
    )
}

export default Header;