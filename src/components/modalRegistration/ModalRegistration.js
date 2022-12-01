import './ModalRegistration.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../button/Button';
import Input from '../input/Input';

const ModalRegistration = () => {
    return (
        <div className='modal-registration'>
            <Formik>
                <Form className='modal-registration__wrepper-input'>
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
                                name = 'password'
                                id = 'password'
                                as = 'input'
                            />
                        </div>
                    </div>
                    <label className="checkbox">
                        <Field 
                            type="checkbox"
                        />
                        Соглашаетесь с политикой конфиденциальности?
                    </label>
                    <Button>
                        Регистрация     
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}

export default ModalRegistration;