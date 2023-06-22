import ActionBtn from 'components/ActionBtn/ActionBtn'

type Props = {}
const PageInProgress = (props: Props) => {
    return (
        <div className="page-in-progress">
            <h1 className="title">
                Сторінка на етапі розробки і буде додана пізніше.
            </h1>
            <ActionBtn to={'/'} type={'solid'}>
                Повернутися на головну
            </ActionBtn>
        </div>
    )
}
export default PageInProgress
