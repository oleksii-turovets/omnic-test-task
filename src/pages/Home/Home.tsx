import './Home.scss'
import ActionOption from 'components/ActionOption/ActionOption'

type Props = {}
const Home = (props: Props) => {
    return (
        <div className="home">
            <h1 className="welcome">Вітаємо вас!</h1>
            <p className="welcome-question">Що відправлятимемо сьогодні?</p>
            <div className="options">
                <div className="row">
                    <ActionOption
                        to={'/packed'}
                        img={'/images/omni-post-office.png'}
                    >
                        Надіслати посилку через поштомат
                    </ActionOption>
                    <ActionOption
                        to={'/back-to-shop'}
                        img={'/images/parcel.png'}
                    >
                        Повернення до інтернет магазину
                    </ActionOption>
                </div>
            </div>
        </div>
    )
}
export default Home
