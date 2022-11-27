import './Details.scss';
import winRadiantIcon from '../../resources/icons/win-radiant.png';
import warningIcon from '../../resources/icons/warning.png';
import analysisIcon from '../../resources/icons/analysis.png';
import loadingIcon from '../../resources/icons/loading.png';
import Button from '../../components/button/Button';
import TableDetails from './tableDetails/TableDetails';

const Details = () => {
    return (
        <section className='details'>
            <div className='container'>
                <h2 className='title'>ДЕТАЛЬНАЯ ИНФОРМАЦИЯ МАТЧА</h2>
                <div className='details__wrapper'>
                    <div className='details__info'>
                        <div className='details__result'>
                            <div className='details__banner'>
                                <img src={winRadiantIcon} alt="winRadiant" />
                                <p>Победа: Radiant</p>
                            </div>
                        </div>

                        <div className='details__time-and-score'>
                            <p>99</p>
                            <div className='details__time'>
                                <span>All draft</span>
                                <span>99:59:59</span>
                                <p>Закончился 23 часа назад</p>
                            </div>
                            <p>99</p>
                        </div>

                        <div className='details__id-and-region'>
                            <div className='details__id'>
                                <span>ID матча</span>
                                <p>6434888016</p>
                            </div>
                            <div className='details__region'>
                                <span>Регион</span>
                                <p>Singapore</p>
                            </div>
                        </div>
                    </div>
                    <div className='details__warning'>
                        <img src={warningIcon} alt="warning" />
                        <p>
                            Запись этого матча не может быть проанализирована, так как недоступна вся информация о матче
                        </p>
                    </div>
                    <div className='details__button'>
                        <Button className={'button_with-icon button_bg-white'}>
                            <div className='button__icon'>
                                <img src={analysisIcon} alt="analysis" />
                            </div>
                            Анализ
                        </Button>
                        <Button className={'button_with-icon button_bg-white'}>
                            <div className='button__icon'>
                                <img src={loadingIcon} alt="loading" />
                            </div>
                            Загрузить запись
                        </Button>
                    </div>

                </div>
                    
                <div className='details__table-info'>
                    <div className='details__table-header'>
                        <p>Radiant</p>
                        <p>стастистика комманды</p>
                        <span className='details__table-lose'>Проигравшие</span>
                    </div>
                    <TableDetails/>
                </div>

                <div className='details__table-info'>
                    <div className='details__table-header'>
                        <p>Dire</p>
                        <p>стастистика комманды</p>
                        <span className='details__table-win'>Победители</span>
                    </div>
                    <TableDetails/>
                </div>
    
            </div>
        </section>
    )
}

export default Details;