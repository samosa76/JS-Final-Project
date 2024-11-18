import style from "./Hero.module.css";
// import down_arrow from "../../../../public/icon/down-arrow.png"

function Hero({ refToComponent }) {
    //get screen width
    // 227

    const scrollToContent = () => {
        if (refToComponent.current) {
            refToComponent.current.scrollIntoView();
        }
    }

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src='/images/books-background.jpg' className={style.image} alt="books-background"/>
                <div className={`${style.title}`}>
                    <div style={{ textAlign: 'center' }}>
                        <h1>Title</h1>
                        <p>Ini adalah paragraph singkat dan padat dan hanya di gunakan untuk percobaan</p>
                    </div>

                    <div className={style.card} onClick={scrollToContent}>
                        <img src='/icon/down-arrow.png' className={style.icon} alt="down-arrow"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;