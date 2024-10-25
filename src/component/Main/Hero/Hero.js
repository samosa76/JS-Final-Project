import style from "./Hero.module.css";
// import down_arrow from "../../../../public/icon/down-arrow.png"

function Hero() {
    //get screen width
    // 227
    var url = "https://picsum.photos/id/260/1400/480/"

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={url} className={style.image} />
                <div className={`${style.title}`}>
                    <div style={{textAlign:'center'}}>
                        <h1>Title</h1>
                        <p>Ini adalah paragraph singkat dan padat dan hanya di gunakan untuk persobaan</p>
                    </div>

                    <div className={style.card}>
                        <img src='/icon/down-arrow.png' className={style.icon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;