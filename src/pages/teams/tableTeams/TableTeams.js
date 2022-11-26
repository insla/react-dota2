import './TableTeams.scss';
import team from '../../../resources/img/teams/1Spirit.png';
import Table from '../../../components/table/Table';

const TableTeams = () => {
    return (
        <Table
            head = {
                <tr>
                    <th style={{width: '15%'}}>Ранг</th>
                    <th style={{width: '40%'}}>Название команды</th>
                    <th style={{width: '15%'}}>Рейтинг</th>
                    <th style={{width: '15%'}}>Победы</th>
                    <th style={{width: '15%'}}>Проигрыши</th>
                </tr>
            }
            body={
                <>
                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1st</td>
                        <td>
                            <div className="table__team-table">
                                <div className="table__icon-table">
                                    <img src={team} alt="spirit"/>
                                </div>
                                <div className='table__name-team'>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__rang-table">
                                <p>1550</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__win-table">
                                <p>216</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table__lose-table">
                                <p>173</p>
                                <div className='table__wrapper-rating'>
                                    <div className='table__rating-fon'></div>
                                    <div className='table__rating-scale'></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </>
            }>

        </Table>
    )
}

export default TableTeams;