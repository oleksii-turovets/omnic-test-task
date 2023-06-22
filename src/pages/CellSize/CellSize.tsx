import './CellSize.scss'
import { useEffect, useState } from 'react'
import { DeviceUId } from 'container/App/App'
import ActionBtn from 'components/ActionBtn/ActionBtn'
import CellList from 'components/CellList/CellList'

type Props = {
    deviceUId: DeviceUId
    backUrl: string
}

export type Cell = {
    has_empty: boolean
    params: {
        depth: number
        height: number
        label: string
        width: number
    }
    type: string
}
const CellSize = ({ deviceUId, backUrl }: Props) => {
    const [cellsArray, setCellsArray] = useState<Cell[]>([])
    const [chosenCellIndex, setChosenCellIndex] = useState<number | undefined>()
    const [isMessageShown, setIsMessageShown] = useState<boolean>(false)
    
    useEffect(() => {
        fetch(
            `${backUrl}api/2.0.0/public/orders/device/${deviceUId}/cells/statuses/?type=5`
        )
            .then((response) => response.json())
            .then((data) => data.data['cell_types'])
            .then((array) =>
                array.filter((item: Cell) => item.params.depth !== 580)
            )
            .then((array) =>
                array.sort(
                    (a: Cell, b: Cell) =>
                        Math.round(a.params.height / 10) *
                            Math.round(a.params.width / 10) -
                        Math.round(b.params.height / 10) *
                            Math.round(b.params.width / 10)
                )
            )
            .then((array) => setCellsArray(array))
            .catch((error) => {
                alert(
                    `Something went wrong! Problems on our side. We will fix them soon. Please, try again later!`
                )
            })
    }, [deviceUId])
    
    return (
        <div className="cell-size">
            <h2 className="title">Оберіть розмір посилки</h2>
            <ul className="cells-list">
                <li className="cells-list-1">
                    <CellList
                        chosenCellIndex={chosenCellIndex}
                        setChosenCellIndex={setChosenCellIndex}
                        cellsArray={cellsArray}
                        indexLimits={[0, 2]}
                    />
                </li>
                <li className="cells-list-2">
                    <CellList
                        chosenCellIndex={chosenCellIndex}
                        setChosenCellIndex={setChosenCellIndex}
                        cellsArray={cellsArray}
                        indexLimits={[3, 5]}
                    />
                </li>
                <li className="cells-list-3">
                    <CellList
                        chosenCellIndex={chosenCellIndex}
                        setChosenCellIndex={setChosenCellIndex}
                        cellsArray={cellsArray}
                        indexLimits={[6, cellsArray.length - 1]}
                    />
                </li>
            </ul>
            <div className="action-btns">
                <ActionBtn to={'/packed'} type={'outlined'}>
                    Назад
                </ActionBtn>
                <ActionBtn
                    to={'#'}
                    type={'solid'}
                    disabled={chosenCellIndex === undefined}
                    onClick={(e) => {
                        e.preventDefault()
                        setIsMessageShown(true)
                    }}
                >
                    Підтвердити
                </ActionBtn>
            </div>
            <div
                className={`approving-message ${
                    isMessageShown ? 'message-shown' : 'message-closed'
                }`}
            >
                <div className="message">
                    <h4>Комірку підтверджено!</h4>
                    <ActionBtn
                        to={'/'}
                        type={'solid'}
                        onClick={() => setIsMessageShown(false)}
                    >
                        Ок
                    </ActionBtn>
                </div>
            </div>
        </div>
    )
}
export default CellSize
