import Button from '../../components/button/Button';
import TableTeams from './tableTeams/TableTeams';

const Teams = () => {
    return (
        <section className='teams'>
            <div className="container">
                <h2 className='title'>СПИСОК КОМАНД</h2>
                <TableTeams/>
                <Button className='button_small button_bg-white'>Загрузить еще</Button>
            </div>
        </section>
    )
}

export default Teams;