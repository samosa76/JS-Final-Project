import style from './Info.module.css'
import Item from '../Item/Item'

const Info = () => {

    return (
        <div className={style.container}>
            <div className={style.info_title}>
                <h1>About Us</h1>
            </div>
            <div className={style.info_container}>
                <div className={style.about_us}></div>
                <div className={style.about_us}></div>
                <div className={style.about_us}></div>
            </div>
        </div>
    )
}

export default Info;