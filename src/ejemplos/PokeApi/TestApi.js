import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"


const TestApi = () => {

    const {data, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts`)

    console.log(loading)
    console.log(data)


    return (
        <div className="container my-5">
            <h2>Test</h2>
            <hr/>

        </div>
    )
}

export default TestApi