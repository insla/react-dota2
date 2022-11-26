import Button from '../../components/button/Button';
import TableMatches from './tableMatches/TableMatches';

const Matches = () => {
    return (
        <section className='matches'>
            <div className="container">
                <h2 className='title'>СПИСОК КОМАНД</h2>
                <TableMatches/>
                <Button className='button_small button_bg-white'>Загрузить еще</Button>
            </div>
        </section>

    )
}

export default Matches;