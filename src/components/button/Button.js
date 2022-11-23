import './Button.scss';
import classNames from 'classnames';
 
const Button = ({children, className, onClick, disabled, active, ...attrs}) => {
    const clases = classNames(
        'button',
        className,
        {active},
    )
    
    const Tag = attrs.href ? 'a' : 'button'

    return (
        <Tag
            className={clases}
            disabled={disabled}
            onClick={onClick}
            {...attrs}
            >{children}
        </Tag>
    )
}

export default Button;