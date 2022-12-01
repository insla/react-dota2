import './ModalAuthorization.scss';
import Button from '../button/Button';
import arrowRightIcon from '../../resources/icons/arrow-right.png';
import eyeIcon from '../../resources/icons/eye.png';
import { useState } from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import Input from '../input/Input';

const ModalAuthorization = () => {
    const [showPassword, setShowPassword] = useState();

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
    )
}

export default ModalAuthorization;

{/* <div className='modal-authorization'>
<div className='modal-authorization__wrepper-input'>
    <div className='modal-authorization__input'>
        <p>Логин / E-mail</p>
        <input type="text" />
        <div className='modal-authorization__line'></div>
    </div>
    <div className='modal-authorization__input'>
        <p>Пароль</p>
        <input type={showPassword ? "text" :"password"} />
        <div className='modal-authorization__line'></div>
        <img onClick={() => setShowPassword(!showPassword)} src={eyeIcon} alt="eyeIcon" />
    </div>
    <Button className='button_modal button_bg-bright-violet'>Войти</Button>
</div>
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
</div> */}
