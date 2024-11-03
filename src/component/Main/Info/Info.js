import style from './Info.module.css'
import Item from '../Item/Item'

const Info = () => {

    return (
        <div className={style.container}>
            <div className={style.info_title}>
                <h1>About Us</h1>
            </div>
            <div className={style.info_container}>
                <h1>Test</h1>
                <h1>Test2</h1>
                <h1>Test3</h1>
            </div>
        </div>
    )
}

export default Info;