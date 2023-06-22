import ActionBtn from 'components/ActionBtn/ActionBtn'
import './Packed.scss'

type Props = {}
const Packed = (props: Props) => {
    return (
        <div className="packed">
            <h2 className="warning">Відправлення має бути надійно упаковане</h2>
            <div className="packing-instruction">
                <div className="row">
                    <div className="image">
                        <img src="/images/packed-parcel.svg" />
                    </div>
                    <ol className="text-instr">
                        <li>
                            Упакуйте товар у коробку чи пакет. На упаковці не
                            повинно бути сторонніх наклейок та етикеток;
                        </li>
                        <li>
                            Заклейте упаковку скотчем, щоб не було доступу до
                            вкладених предметів;
                        </li>
                    </ol>
                </div>
            </div>
            <div className="action-btns">
                <ActionBtn to={'..'} type={'outlined'}>
                    Назад
                </ActionBtn>
                <ActionBtn to={'/cell-size'} type={'solid'}>
                    Я добре упакував
                </ActionBtn>
            </div>
        </div>
    )
}
export default Packed
