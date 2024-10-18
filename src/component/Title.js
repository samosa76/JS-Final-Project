import React from "react";;

function Title(params) {
    const planet = params.name
    return (
        <div>
            <h1>Hello World!!</h1>
            <p>Greeting's people of {planet}</p>
        </div>
    )
}

export default Title;