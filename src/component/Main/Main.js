import { useRef, useState } from "react";
import Content from '../Content/Content'
import Hero from '../Hero/Hero';
import Author from '../Author/Author'
import Info from '../Info/Info'
import AddBooks from "../AddBooks/AddBooks";
import data from "../../utils/data/data_books";
// import Movies from "../Movies/Movies";

function Main() {
    //set ref
    const ref = useRef(null);

    //set state for sending new item
    const [books, addBooks] = useState(data);
    return(
        <div>
            <Hero refToComponent={ref}/>
            <Info />
            <Content ref={ref} books={books} addBooks={addBooks}/>
            <AddBooks books={books} addBooks={addBooks}/>
            {/* <Movies /> */}
            <Author />
        </div>
    );
}

export default Main;