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
                <div className={`${style.flex_column} ${style.glass_card} ${style.absolute_center}`}>
                    <div className={style.title}>
                        <h1>Book World</h1>
                        <h4>Selamat menjelajahi dunia literasi di Book World, <br/> dan temukan buku yang akan menginspirasi dan menemani perjalanan Anda!</h4>
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