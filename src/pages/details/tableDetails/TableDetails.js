import './TableDetails.scss';
import Table from '../../../components/table/Table';
import heroes from '../../../resources/icons/Heroes.png';

const TableDetails = () => {
    return (
        <Table
            head={
                <tr>
                    <th style={{width: '28%'}}>Игрок</th>
                    <th style={{width: '6%'}}>LVL</th>
                    <th style={{width: '6%'}} className='table__text-lime' >K</th>
                    <th style={{width: '6%'}} className='table__text-orange' >D</th>
                    <th style={{width: '6%'}}>A</th>
                    <th style={{width: '7%'}} className='table__text-yellow' >NET</th>
                    <th style={{width: '7%'}}>HD</th>
                    <th style={{width: '7%'}}>TD</th>
                    <th style={{width: '7%'}}>HH</th>
                    <th style={{width: '7%'}}>LH/DN</th>
                    <th style={{width: '13%'}}>GMP/XPM</th>
                </tr>
            }
            body={
                <>
                    <tr>
                        <td>
                            <div className='table__name'>
                                <img src={heroes} alt="heroes" />
                                <p>Long user name</p>
                            </div>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p className='table__text-lime'>99</p>
                        </td>
                        <td>
                            <p className='table__text-orange'>99</p>
                        </td>
                        <td>
                            <p>99</p>
                        </td>
                        <td>
                            <p className='table__text-yellow'>99.9k</p>
                        </td>
                        <td>
                            <p>999.k</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999/99</p>
                        </td>
                        <td>
                            <p>9999/9999</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='table__name'>
                                <img src={heroes} alt="heroes" />
                                <p>Long user name</p>
                            </div>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p className='table__text-lime'>99</p>
                        </td>
                        <td>
                            <p className='table__text-orange'>99</p>
                        </td>
                        <td>
                            <p>99</p>
                        </td>
                        <td>
                            <p className='table__text-yellow'>99.9k</p>
                        </td>
                        <td>
                            <p>999.k</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999/99</p>
                        </td>
                        <td>
                            <p>9999/9999</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='table__name'>
                                <img src={heroes} alt="heroes" />
                                <p>Long user name</p>
                            </div>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p className='table__text-lime'>99</p>
                        </td>
                        <td>
                            <p className='table__text-orange'>99</p>
                        </td>
                        <td>
                            <p>99</p>
                        </td>
                        <td>
                            <p className='table__text-yellow'>99.9k</p>
                        </td>
                        <td>
                            <p>999.k</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999/99</p>
                        </td>
                        <td>
                            <p>9999/9999</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='table__name'>
                                <img src={heroes} alt="heroes" />
                                <p>Long user name</p>
                            </div>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p className='table__text-lime'>99</p>
                        </td>
                        <td>
                            <p className='table__text-orange'>99</p>
                        </td>
                        <td>
                            <p>99</p>
                        </td>
                        <td>
                            <p className='table__text-yellow'>99.9k</p>
                        </td>
                        <td>
                            <p>999.k</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999/99</p>
                        </td>
                        <td>
                            <p>9999/9999</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='table__name'>
                                <img src={heroes} alt="heroes" />
                                <p>Long user name</p>
                            </div>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p className='table__text-lime'>99</p>
                        </td>
                        <td>
                            <p className='table__text-orange'>99</p>
                        </td>
                        <td>
                            <p>99</p>
                        </td>
                        <td>
                            <p className='table__text-yellow'>99.9k</p>
                        </td>
                        <td>
                            <p>999.k</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999</p>
                        </td>
                        <td>
                            <p>999/99</p>
                        </td>
                        <td>
                            <p>9999/9999</p>
                        </td>
                    </tr>
                </>
            }
        />
    )
}

export default TableDetails;