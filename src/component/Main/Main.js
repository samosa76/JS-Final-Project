import { useRef } from "react";
import Content from './Content/Content'
import Hero from './Hero/Hero';
import Info from './Info/Info'

function Main() {
    //get ref
    const ref = useRef(null);
    return(
        <div>
            <Hero refToComponent={ref}/>
            <Content ref={ref}/>
            <Info />
        </div>
    );
}

export default Main;