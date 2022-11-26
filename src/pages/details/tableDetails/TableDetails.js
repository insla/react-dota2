import './TableDetails.scss';
import Table from '../../../components/table/Table';

const TableDetails = () => {
    return (
        <Table
            head={
                <tr>
                    <th style={{width: '20%'}}>Id</th>
                    <th style={{width: '10%'}}>Time</th>
                    <th style={{width: '35%'}}>Radiant</th>
                    <th style={{width: '35%'}}>Dire</th>
                </tr>
            }
            body={
                <>
                    <tr>

                    </tr>
                </>
            }
        />
    )
}

export default TableDetails;