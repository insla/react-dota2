import './Teams.scss';
import Button from '../../components/button/Button';
import Table from './table/Table';

const Teams = () => {
    return (
        <section className='teams'>
            <div className="container">
                <h2 className='title'>СПИСОК КОМАНД</h2>
                <Table/>
                <Button className={'button_button-small'}>Загрузить еще</Button>
            </div>
        </section>
    )
}

export default Teams;