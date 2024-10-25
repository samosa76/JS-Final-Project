import { useRef } from "react";
import Content from './Content/Content'
import Hero from './Hero/Hero';

function Main() {
    //get ref
    const ref = useRef(null);
    return(
        <div>
            <Hero refToComponent={ref}/>
            <Content ref={ref}/>
        </div>
    );
}

export default Main;