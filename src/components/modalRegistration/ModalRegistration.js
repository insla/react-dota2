import './ModalRegistration.scss';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from '../button/Button';
import Input from '../input/Input';

const ModalRegistration = () => {
    return (
        <div className='modal-registration'>
            <Formik 
                initialValues={{
                    email: '',
                    login: '',
                    password: '',
                    checkPassword: '',
                    checkbox : false                    
                }}
                validationSchema = {Yup.object({
                    email: Yup.string()
                        .email('Неправильный email адрес!')
                        .required('Обязательное поле!'),
                    login: Yup.string()
                        .min(2, 'Минимум 2 символа!')
                        .matches(/^[A-Za-z0-9]+$/, 'Латинские буквы и цифры!')
                        .required('Обязательное поле!'),
                    password: Yup.string()
                        .matches(/^(?=.*[A-Za-zА-ЯЁа-яё])(?=.*\d)[A-Za-zА-ЯЁа-яё\d]{8,}$/, 'Минимум восемь символов, одна буква и цифра!')
                        .required('Обязательное поле!'),
                    checkPassword: Yup.string()
                        .required('Повторите пароль!')
                        .oneOf([Yup.ref('password'), null], 'Пароль не совпвдвет!'),
                    checkbox: Yup.boolean()
                        .required('Обязательное поле!')
                        .oneOf([true], 'Обязательное поле!')
                })}  
                onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
                >
                <Form noValidate>
                    <div className='modal-registration__wrepper-input'>
                        <div className='modal-registration__input-left'>
                            <div className='modal-registration__input'>
                                <p>E-mail</p>
                                <Input
                                    type = 'email'
                                    name = 'email'
                                    id = 'email'
                                    as = 'input'
                                />
                            </div>
                            <div className='modal-registration__input'>
                                <p>Пароль</p>
                                <Input
                                    type = 'password'
                                    name = 'password'
                                    id = 'password'
                                    autoComplete = "new-password"
                                    as = 'input'
                                />
                            </div>
                        </div>

                        <div className='modal-registration__input-right'>
                            <div className='modal-registration__input'>
                                <p>Логин</p>
                                <Input
                                    type = 'text'
                                    name = 'login'
                                    id = 'login'
                                    as = 'input'
                                />
                            </div>
                            <div className='modal-registration__input'>
                                <p>Повторите пароль</p>
                                <Input 
                                    type = 'password'
                                    name = 'checkPassword'
                                    id = 'checkPassword'
                                    autoComplete = "current-password"
                                    as = 'input'
                                />
                            </div>
                        </div>
                    </div>
                    <label className="modal-registration__label">
                        <Field 
                            type = "checkbox"
                            name = 'checkbox'
                        />
                        <span>Соглашаетесь с политикой конфиденциальности?</span>
                        <ErrorMessage className='modal-registration__error' name='checkbox' component='div'/>
                    </label>
                    <Button 
                        type = 'submit'
                        className = 'button_modal button_bg-bright-violet'>
                        Регистрация     
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}

export default ModalRegistration;