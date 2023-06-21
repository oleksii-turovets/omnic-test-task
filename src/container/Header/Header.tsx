import './Header.scss'
import logo from 'assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

type Props = {}
const Header = (props: Props) => {
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
                            <NavLink to={'/'} className="instruction">
                                Інструкція
                            </NavLink>
                            <Link to={'/'} className='post-office-info'>
                                Поштомат №1234
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-line'></div>
        </header>
    )
}
export default Header
