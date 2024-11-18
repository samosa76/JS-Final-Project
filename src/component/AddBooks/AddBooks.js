import style from './AddBooks.module.css'

const AddBooks = () => {

    return (
        <div className={style.container}>
            <div className={style.parent}>
                <img src='images/newspaper.jpg' className={style.input_image} alt='newspaper'></img>

                <div className={`${style.form} ${style.glass_card} ${style.flex_column}`}>
                    <h1>Add New Books</h1>

                    <form>
                        <label>Book Name</label>
                        <input type='text' className={style.input_form} />
                        <label>Book Name</label>
                        <input type='text' className={style.input_form} />
                        <input type='submit' className={style.button_form} />
                    </form>

                </div>

            </div>
        </div>
    );
}

export default AddBooks;