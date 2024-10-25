import React from "react";
import Content from './Content';
import Title from "./Title";

function Main() {
    const rows = [];
    for (let index = 0; index < 10; index++) {
        rows.push(<Content/>);
        
    }
    return (
        <main>
            <Title name="Earth" detail="test"/>
            {rows}
            
        </main>
    )
}

export default Main;