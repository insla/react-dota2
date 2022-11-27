import './ModalAuthorization.scss';
import Button from '../button/Button';
import arrowRightIcon from '../../resources/icons/arrow-right.png';

const ModalAuthorization = () => {
    return (
        <div className='modal-authorization'>
            <div className='modal-authorization__wrepper-input'>
                <div className='modal-authorization__input'>
                    <p>Логин / E-mail</p>
                    <input type="text" />
                </div>
                <div className='modal-authorization__input'>
                    <p>Пароль</p>
                    <input type="text" />
                </div>
                <Button>Войти</Button>
                <div className='modal-authorization__registration-password'>
                    <p>Нет учетной записи?</p>
                    <div className='modal-authorization__registration'>
                        <p>Регистрация</p>
                        <img src={arrowRightIcon} alt="arrowRightIcon" />
                    </div>
                </div>
                <div className='modal-authorization__registration-password'>
                    <p>Забыли пароль?</p>
                    <div className='modal-authorization__registration'>
                        <p>Восстановить пароль</p>
                        <img src={arrowRightIcon} alt="arrowRightIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAuthorization;