import { useEffect, useState } from "react"


const useFetch = (url, deps = []) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        fetch(url)
            .then(r => r.json())
            .then(r => setData(r))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, deps)

    return { data, loading }
}

export default useFetch