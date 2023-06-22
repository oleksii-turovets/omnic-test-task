import ActionBtn from 'components/ActionBtn/ActionBtn'

type Props = {}
const PageNotFound = (props: Props) => {
    return (
        <div className="page-not-found">
            <h1 className="title">На жаль, сторінку не було знайдено.</h1>
            <ActionBtn to={'/'} type={'solid'}>
                Повернутися на головну
            </ActionBtn>
        </div>
    )
}
export default PageNotFound
