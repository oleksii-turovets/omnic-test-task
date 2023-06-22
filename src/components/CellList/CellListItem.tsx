import { Cell } from 'pages/CellSize/CellSize'

type Props = {
    labelsArray: string[]
    has_empty: Cell['has_empty']
    params: Cell['params']
    index: number
    setChosenCellIndex: (value: number) => void
    chosenCellIndex: number | undefined
}
const CellListItem = ({
    labelsArray,
    has_empty,
    params,
    index,
    setChosenCellIndex,
    chosenCellIndex,
}: Props) => {
    return (
        <li
            onClick={(e) => {
                e.preventDefault()
                setChosenCellIndex(index)
            }}
            key={index}
            className={`cell-item-${index} ${
                has_empty ? 'cell-availiable' : 'cell-unavailiable'
            } ${index === chosenCellIndex ? 'cell-chosen' : void 0}`}
        >
            <div className="img">
                <img
                    src={`/images/parcel-types/parcel-${labelsArray[index]}.svg`}
                />
            </div>
            <div className="text-info">
                <h3 className="size-label">{`${labelsArray[index]}`}</h3>
                <p className="size-values">{`${Math.round(
                    params.width / 10
                )}x${Math.round(params.height / 10)}см`}</p>
            </div>
        </li>
    )
}
export default CellListItem
