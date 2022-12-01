import './Input.scss';
import { useField } from 'formik';

const Input = ({...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <input className='input' {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className='input__error'>{meta.error}</div>
            ) : null}
            <div className='input__line'></div>
        </>
    )
}

export default Input;