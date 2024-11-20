import style from './Index.module.css'

const Container = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Container;