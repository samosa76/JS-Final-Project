import style from "./Hero.module.css";

function Hero() {
    //get screen width
    // 227
    var url = "https://picsum.photos/id/260/1400/480/"

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={url} className={style.image} />
                <div className={`${style.title}`}>
                    <h1 style={{textAlign:"center"}}>Title</h1>
                </div>
            </div>

        </div>
    );
}

export default Hero;