import './Table.scss';

const Table = ({head, body}) => {
    return (
        <table className='table' >
            <thead className='table__head '>
                {head}
            </thead>
            <tbody className='table__body'>
                {body}
            </tbody>
        </table>
    )
}

export default Table;