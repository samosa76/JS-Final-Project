import style from './Author.module.css'

const Author = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.info_title}>
                    <h1>Penulis</h1>
                </div>
                <div className={style.info_container}>
                    <div className={style.about_us}>
                        <img src='icon/profile-color.png' alt='author-image' className={`${style.author_image}`}></img>
                        <h4>Auhtor 1</h4>
                    </div>
                    <div className={style.about_us}>
                        <img src='icon/profile-color.png' alt='author-image' className={`${style.author_image}`}></img>
                        <h4>Auhtor 2</h4>
                    </div>
                    <div className={style.about_us}>
                        <img src='icon/profile-color.png' alt='author-image' className={`${style.author_image}`}></img>
                        <h4>Auhtor 3</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Author;