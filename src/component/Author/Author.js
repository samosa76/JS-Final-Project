import style from './Author.module.css'

const Author = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.info_title}>
                    <h1>Penulis</h1>
                </div>
                <div className={style.info_container}>
                    <div className={style.about_us}></div>
                    <div className={style.about_us}></div>
                    <div className={style.about_us}></div>
                </div>
            </div>
        </div>
    );
}

export default Author;