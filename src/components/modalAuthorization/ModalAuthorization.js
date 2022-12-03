import './ModalAuthorization.scss';
import Button from '../button/Button';
import arrowRightIcon from '../../resources/icons/arrow-right.png';
import eyeIcon from '../../resources/icons/eye.png';
import arrowRightGreen from '../../resources/icons/arrow-right-green.png';
import { useState } from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import Input from '../input/Input';

const ModalAuthorization = () => {
    const [showPassword, setShowPassword] = useState();
    const [iconGreenRegistration, setIconGreenRegistration] = useState(false)
    const [iconGreenRecover, setIconGreenRecover] = useState(false)

    return (
        <div className='modal-authorization'>
            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                validationSchema = {Yup.object({
                    login: Yup.string()
                        .min(2, 'Минимум два символа!')
                        .required('Обязательное поле!'),
                    password: Yup.string()
                        .min(8, 'Минимум восемь символов!')
                        .required('Обязательное поле!'), 
                })}
                onSubmit= {(value, {resetForm}) => {
                    console.log(JSON.stringify(value, null, 2))
                    resetForm({value: ''})
                }}>
                <Form className='modal-authorization__wrepper-input'>
                    <div className='modal-authorization__input'>
                        <p>Логин / E-mail</p>
                        <Input 
                            type="text"
                            name="login" 
                            id="login"
                            as="input"
                        />
                    </div>
                    <div className='modal-authorization__input'>
                        <p>Пароль</p>
                        <Input 
                            type={showPassword ? "text" :"password"}
                            name="password" 
                            id="password"
                            as="input"
                        />
                        <img 
                            className='input__img' 
                            onClick={() => setShowPassword(!showPassword)} src={eyeIcon} 
                            alt="eyeIcon"
                        />
                    </div>
                    <Button 
                        className='button_modal button_bg-bright-violet'
                        type='submit'>
                            Войти
                    </Button>
                </Form>
            </Formik>
            
            <div className='modal-authorization__registration-password'>
                <p>Нет учетной записи?</p>
                <div 
                    className='modal-authorization__registration'
                    onMouseLeave={() => setIconGreenRegistration(false)}
                    onMouseEnter={() => setIconGreenRegistration(true)}>
                    <p>Регистрация</p>
                    <img src={iconGreenRegistration ? arrowRightGreen : arrowRightIcon} alt="arrowRightIcon" />
                </div>
            </div>
            <div className='modal-authorization__registration-password'>
                <p>Забыли пароль?</p>
                <div 
                    className='modal-authorization__registration'
                    onMouseLeave={() => setIconGreenRecover(false)}
                    onMouseEnter={() => setIconGreenRecover(true)}>
                    <p>Восстановить пароль</p>
                    <img src={iconGreenRecover ? arrowRightGreen : arrowRightIcon} alt="arrowRightIcon" />
                </div>
            </div>
        </div>
    )
}

export default ModalAuthorization;