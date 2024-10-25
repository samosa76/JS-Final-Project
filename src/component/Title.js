import React from "react";;

function Title(params) {
    const planet = params.name
    const detail = params.detail
    return (
        <div>
            <h1>Hello World!!</h1>
            <p>Greeting's people of {detail}</p>
        </div>
    )
}

export default Title;