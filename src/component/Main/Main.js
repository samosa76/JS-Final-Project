import { useRef } from "react";
import Content from './Content/Content'
import Hero from './Hero/Hero';
import Info from './Info/Info'
// import Movies from "../Movies/Movies";

function Main() {
    //get ref
    const ref = useRef(null);
    return(
        <div>
            <Hero refToComponent={ref}/>
            <Content ref={ref}/>
            {/* <Movies /> */}
            <Info />
        </div>
    );
}

export default Main;