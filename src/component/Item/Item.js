import style from "./Item.module.css";

function ContentItems(params) {
    const {book} = params;
    // shorting description to 155 character
    // desc = desc.slice(0, 155) + "...";

    return (
        <div className={`${style.container} ${style.card}`}>

            <div className={style.title}>

                <h2>{book.title}</h2>
                
                <p>{book.desc}</p>

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