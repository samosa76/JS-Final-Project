import style from "./Content.module.css";

function ContentItems(params) {
    var desc = params.desc
    var title = params.title
    var genre = params.genre

    desc = desc.slice(0, 155) + "...";


    const genres = [];

    for (let index = 0; index < genre.length; index++) {
        genres.push(genre[index] + "; ")

    }

    return (
        <div className={`${style.container} ${style.card}`}>

            <div className={style.title}>

                <h2>{title}</h2>
                
                <p>{desc}</p>

                <div className={style.buttons}>
                    <button className={style.btn_buy}>Buy</button>
                    <button className={style.btn_rent}>Rent</button>
                </div>

            </div>

            <div>
                <div>
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
                
            </div>




        </div>
    )
}

export default ContentItems;