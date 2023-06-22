import './ActionOption.scss'
import { Link } from 'react-router-dom'

type Props = {
    to: string
    img: string
    children: React.ReactNode
}

const ActionOption = ({ to, img, children }: Props) => {
    return (
        <Link to={to} className="option">
            <img src={img} />
            <h3>{children}</h3>
        </Link>
    )
}
export default ActionOption
