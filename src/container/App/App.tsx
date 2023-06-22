import 'utils/reset.scss'
import './App.scss'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { useEffect, useState } from 'react'

type Props = {}
export type DeviceNumber = number | undefined
export type DeviceUId = string | undefined


const App = (props: Props) => {
    const [deviceNumber, setDeviceNumber] = useState<DeviceNumber>()
    const [uId, setUId] = useState<DeviceUId>(
        '34670a76-6022-4df5-ac1d-68f88589c904'
    )
    const backUrl = 'https://dev.hub.omnic.solutions/'

    // console.log(window.location.pathname.split('/')[0])

    useEffect(() => {
        fetch(`${backUrl}api/2.0.0/public/device/${uId}/`)
            .then((response) => response.json())
            .then((data) => data.data)
            .then((data) => data.device)
            .then((device) => {
                setDeviceNumber(device)
            })
            .catch((error) => {
                if (error.ids === 'device_uid_does_not_exist') {
                    alert(`Something went wrong! ${error.message}.`)
                } else {
                    alert(
                        `Something went wrong! Problems on our side. We will fix them soon. Please, try again later!`
                    )
                }
            })
    }, [uId])

    return (
        <>
            <Header deviceNumber={deviceNumber} />
            <Main deviceUId={uId} backUrl={backUrl}/>
        </>
    )
}
export default App
