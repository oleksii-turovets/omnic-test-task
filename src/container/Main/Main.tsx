import { Route, Routes } from 'react-router-dom'
import './Main.scss'
import Home from 'pages/Home/Home'
import Packed from 'pages/Packed/Packed'
import CellSize from 'pages/CellSize/CellSize'
import { DeviceUId } from 'container/App/App'
import PageInProgress from 'pages/PageInProgress/PageInProgress'
import PageNotFound from 'pages/PageNotFound/PageNotFound'

type Props = {
    deviceUId: DeviceUId
    backUrl: string
}
const Main = ({ deviceUId, backUrl }: Props) => {
    return (
        <div className="main-content">
            <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/packed" element={<Packed />} />
                        <Route
                            path="/cell-size"
                            element={
                                <CellSize
                                    deviceUId={deviceUId}
                                    backUrl={backUrl}
                                />
                            }
                        />
                        <Route
                            path="/instruction"
                            element={<PageInProgress />}
                        />
                        <Route
                            path="/back-to-shop"
                            element={<PageInProgress />}
                        />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
            </div>
        </div>
    )
}
export default Main
