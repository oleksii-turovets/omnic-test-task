import './Header.scss'
import logo from 'assets/logo.svg'
import { DeviceNumber } from 'container/App/App'
import { Link, NavLink } from 'react-router-dom'

type Props = {
    deviceNumber: DeviceNumber
}
const Header = ({ deviceNumber }: Props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="row main">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className="info">
                        <div className="row">
                            <NavLink
                                to={'/instruction'}
                                className="instruction"
                            >
                                Інструкція
                            </NavLink>
                            <Link to={'/'} className="post-office-info">
                                {deviceNumber === undefined
                                    ? `Add your post office`
                                    : `Поштомат №${deviceNumber}`}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-line"></div>
        </header>
    )
}
export default Header
