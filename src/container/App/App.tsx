import 'utils/reset.scss'
import './App.scss'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

type Props = {}
export type DeviceNumber = number | undefined
export type DeviceUId = string | undefined

const App = (props: Props) => {
    const [deviceNumber, setDeviceNumber] = useState<DeviceNumber>(undefined)
    const [uId, setUId] = useState<DeviceUId>(undefined)
    const backUrl = 'https://dev.hub.omnic.solutions/'
    const urlRootKey = window.location.pathname.split('/')[1]
    const getDeviceName = () => {
        uId === undefined
            ? alert(`Поштомат не знайдено!`)
            : fetch(`${backUrl}api/2.0.0/public/device/${uId}/`)
                  .then((response) => response.json())
                  .then((data) => data.data)
                  .then((data) => data.device)
                  .then((device) => {
                      setDeviceNumber(device)
                  })
                  .catch((error) => {
                      setDeviceNumber(undefined)
                      if (error.ids === 'device_uid_does_not_exist') {
                          alert(`Something went wrong! ${error.message}.`)
                      } else {
                          alert(
                              `Something went wrong! Problems on our side. We will fix them soon. Please, try again later!`
                          )
                      }
                  })
    }
    useEffect(() => {
        setUId(window.location.pathname.split('/')[1])
    }, [urlRootKey])
    useEffect(() => {
        getDeviceName()
    }, [uId])

    return (
        <BrowserRouter basename={uId}>
            <Header deviceNumber={deviceNumber} getDeviceName={getDeviceName} />
            <Main deviceUId={uId} backUrl={backUrl} />
        </BrowserRouter>
    )
}
export default App
