import './FixButton.scss';
import Button from '../button/Button';
import arrow from '../../resources/icons/arrow.png';

const FixButton = () => {
    return (
        <div className='fix-button'>
            <Button className='button_up'>
                <img src={arrow} alt="arrow-up"/>
            </Button>
        </div>
    )
}

export default FixButton;