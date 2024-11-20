import { useState } from 'react';
import style from './AddBooks.module.css'

const AddBooks = (props) => {

    //get props
    const { books, addBooks } = props;

    //setup text error state
    const [isTitleError, setTitleError] = useState(false);
    const [isDescError, setDescError] = useState(false);

    //setup input state
    // const [title, setTitle] = useState('');
    // const [desc, setDesc] = useState('');

    const [formData, setFormData] = useState({
        title: "",
        desc: ""
    })

    const {title, desc} = formData;

    function handleChange(e) {
        const {name, value} = e.target;

        setFormData({
            ...formData,[name]:value,
        });
    }

    /* handle when input value change */
    // function handleTitle(e) {
    //     setTitle(e.target.value);
    // }

    // function handleDesc(e) {
    //     setDesc(e.target.value);
    // }

    // function validate() {
    //     if (title === "") {
    //         setTitleError(true);
    //     }
    //     else {
    //         setTitleError(false);
    //         return false;
    //     }
    //     if (desc === "") {
    //         setDescError(true);
    //     } else {
    //         setDescError(false);
    //         return false;
    //     }
    //     if (title !== "" && desc !== "") {

    //         return true;

    //     }
    // }

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
                title: title,
                desc: desc,
                image: Math.floor(Math.random() * 100),
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
                        <input type='text' className={style.input_form} value={title} onChange={handleChange} id='title' name='title'/>
                        {isTitleError ? <p className={style.error_text}>Please enter book title</p> : ""}

                        <label>Book Description</label>
                        <textarea maxLength={150} type='text' className={`${style.input_form} ${style.desc}`} value={desc} onChange={handleChange} id='desc' name='desc'/>
                        {isDescError ? <p className={style.error_text}>Please enter book desc</p> : ""}

                        <input type='submit' className={style.button_form} />

                    </form>

                </div>

            </div>
        </div>
    );
}

export default AddBooks;