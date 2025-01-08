import { useImperativeHandle, forwardRef, useRef } from "react";

import style from "./Content.module.css"
import Items from "../Item/Item"


const Content = forwardRef((props, ref) => {
    //get all props
    const {books} = props;
    console.log(books);
    

    //scroll to ref
    const compRef = useRef();
    useImperativeHandle(ref, () => ({
        scrollIntoView: () => {
            compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }));


    return (
        <div ref={compRef}>
            <div className={style.container}>

                <div className={style.content_title}>
                    <h1>THE BOOKS</h1>
                </div>

                <div className={style.grid_container}>
                    {books?.map((book, index) => {
                        
                        return <Items book={book.work} />
                    })}
                </div>

            </div>

        </div>

    )
});

export default Content;