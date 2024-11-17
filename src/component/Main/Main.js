import { useRef } from "react";
import Content from '../Content/Content'
import Hero from '../Hero/Hero';
import Author from '../Author/Author'
import Info from '../Info/Info'
// import Movies from "../Movies/Movies";

function Main() {
    //get ref
    const ref = useRef(null);
    return(
        <div>
            <Hero refToComponent={ref}/>
            <Info />
            <Content ref={ref}/>
            {/* <Movies /> */}
            <Author />
        </div>
    );
}

export default Main;