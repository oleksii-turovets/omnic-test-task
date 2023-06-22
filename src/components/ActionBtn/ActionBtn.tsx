import './ActionBtn.scss'
import { Link } from 'react-router-dom'

type Props = {
    to: string
    children: React.ReactNode
    type: 'solid' | 'outlined'
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

const ActionBtn = ({ to, children, type, disabled, onClick }: Props) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`action-btn ${
                type === 'solid'
                    ? 'action-btn-solid'
                    : type === 'outlined'
                    ? 'action-btn-outlined'
                    : void 0
            } ${disabled ? 'action-btn-disabled' : void 0}`}
        >
            {children}
        </Link>
    )
}
export default ActionBtn
