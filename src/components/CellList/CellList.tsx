import './CellList.scss'
import { Cell } from 'pages/CellSize/CellSize'
import CellListItem from './CellListItem'

type Props = {
    cellsArray: Cell[]
    indexLimits: [lowLimit: number, highLimit: number]
    setChosenCellIndex: (value: number) => void
    chosenCellIndex: number | undefined
}
const CellList = ({
    cellsArray,
    indexLimits,
    setChosenCellIndex,
    chosenCellIndex,
}: Props) => {
    const labelsArray = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']
    return (
        <ul className="cell-items-list">
            {cellsArray.length !== 0
                ? cellsArray.map(({ has_empty, params }, index) =>
                      index >= indexLimits[0] && index <= indexLimits[1] ? (
                          <CellListItem
                              chosenCellIndex={chosenCellIndex}
                              setChosenCellIndex={setChosenCellIndex}
                              labelsArray={labelsArray}
                              has_empty={has_empty}
                              params={params}
                              index={index}
                              key={index}
                          />
                      ) : (
                          void 0
                      )
                  )
                : void 0}
        </ul>
    )
}
export default CellList
