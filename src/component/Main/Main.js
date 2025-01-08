import { useEffect, useRef, useState } from "react";
import Content from '../Content/Content'
import Hero from '../Hero/Hero';
import Author from '../Author/Author'
import Info from '../Info/Info'
import AddBooks from "../AddBooks/AddBooks";
import axios from "axios";
import data from "../../utils/data/data_books";
// import Movies from "../Movies/Movies";


function Main() {
    // const [data, setData] = useState();
    const [buku, setbuku] = useState();

    async function fetchBooks() {
        const url = "https://openlibrary.org/people/mekBot/books/currently-reading.json"
        const response = await axios.get(url);
        const data = response.data.reading_log_entries;
    
        const fiveData = data.slice(0, 5);
        setbuku(fiveData);
        console.log(fiveData);
        return data;
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const ref = useRef(null);

    //set state for sending new item
    // const [books, addBooks] = useState(buku);

    return(
        <div>
            <Hero refToComponent={ref}/>
            <Info />
            <Content ref={ref} books={buku}/>
            {/* <Content ref={ref} books={books} addBooks={addBooks}/> */}
            {/* <AddBooks books={books} addBooks={addBooks}/> */}
            {/* <Movies /> */}
            <Author />
        </div>
    );
}

export default Main;