import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrepper">
                <p>2022© OpenDota</p>
                <div className="footer__about">
                    <a href="#">О нас</a>
                    <a href="#">Политика конфидициальности</a>
                    <a href="#">Документация API</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;