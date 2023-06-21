import 'utils/reset.scss'
import './App.scss'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}
export default App
