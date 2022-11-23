import './Teams.scss';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import team from '../../resources/img/teams/1Spirit.png'

const Teams = () => {
    return (
        <section className='teams'>
            <div className="container">
                <h2 className='title'>СПИСОК КОМАНД</h2>
                <Table >
                    <thead className='table__head text-white'>
                        <tr>
                            <th>Ранг</th>
                            <th>Название команды</th>
                            <th>Рейтинг</th>
                            <th>Победы</th>
                            <th>Проигрыши</th>
                        </tr>
                    </thead>
                    <tbody className='table__body text-white'>
                        <tr>
                            <td>1st</td>
                            <td>
                                <div className="table__team-table">
                                    <div className="table__icon-table">
                                        <img src={team} alt="spirit"/>
                                    </div>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </td>
                            <td>
                                <div className="table__rang-table">
                                    <p>1550</p>
                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="table__win-table">
                                    <p>216</p>
                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="table__lose-table">
                                    <p>173</p>
                                    <div></div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>1st</td>
                            <td>
                                <div className="teams-list__team-table">
                                    <div className="teams-list__icon-table">
                                        <img src={team} alt="spirit"/>
                                    </div>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </td>
                            <td>
                                <div className="teams-list__rang-table">
                                    <p>1550</p>
                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="teams-list__win-table">
                                    <p>216</p>
                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="teams-list__lose-table">
                                    <p>173</p>
                                    <div></div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>1st</td>
                            <td>
                                <div className="teams-list__team-table">
                                    <div className="teams-list__icon-table">
                                        <img src={team} alt="spirit"/>
                                    </div>
                                    <span>Team spirit</span>
                                    <p>26 дней назад</p>
                                </div>
                            </td>
                            <td>
                                <div className="teams-list__rang-table">
                                    <p>1550</p>
                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="teams-list__win-table">
                                    <p>216</p>
                                    <div></div>
                                </div>
                            </td>
                            <td>
                                <div className="teams-list__lose-table">
                                    <p>173</p>
                                    <div></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </section>
    )
}

export default Teams;