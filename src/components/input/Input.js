import './Input.scss';
import { useField } from 'formik';

const Input = ({...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <input className='input input_modal' {...props} {...field}/>
            <div className='input__line'></div>
            {meta.touched && meta.error ? (
                <div className='input__error'>{meta.error}</div>
            ) : null}
        </>
    )
}

export default Input;