import './Modal.scss';

const Modal = ({children, title}) => {
    return (
        <div className='modal'>
            <div className='modal__content'>
                <p className='modal__close'>✕</p>
                <h2 className='modal__title'>Регистрация</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal;