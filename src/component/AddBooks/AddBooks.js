import { useState } from 'react';
import style from './AddBooks.module.css'

const AddBooks = (props) => {

    //get props
    const {books, addBooks} = props

    //setup text error state
    const [isTitleError, setTitleError] = useState(false);
    const [isDescError, setDescError] = useState(false);

    //setup input state
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    /* handle when input value change */
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDesc(e) {
        setDesc(e.target.value);
    }

    //handling when button submit clicked
    function handleSubmit(e) {
        e.preventDefault();
        if (title === "") {
            setTitleError(true);
        }
        else {
            setTitleError(false);
        }
        if (desc === "") {
            setDescError(true);
        } else {
            setDescError(false);
        }
        
        if (title !== "" && desc !== "") {
            
            const book = {
                title : title,
                desc : desc
            }

            addBooks([...books, book]);

        }



    }

    return (
        <div className={style.container}>
            <div className={style.parent}>
                <img src='images/newspaper.jpg' className={style.input_image} alt='newspaper'></img>

                <div className={`${style.form} ${style.glass_card} ${style.flex_column}`}>
                    <h1>Add New Books</h1>

                    <form onSubmit={handleSubmit}>

                        <label>Book Title</label>
                        <input type='text' className={style.input_form} value={title} onChange={handleTitle} id='title' />
                        {isTitleError ? <p className={style.error_text}>Please enter book title</p> : ""}

                        <label>Book Description</label>
                        <textarea maxLength={150} type='text' className={`${style.input_form} ${style.desc}`} value={desc} onChange={handleDesc} id='desc' />
                        {isDescError ? <p className={style.error_text}>Please enter book desc</p> : ""}

                        <input type='submit' className={style.button_form} />

                    </form>

                </div>

            </div>
        </div>
    );
}

export default AddBooks;