import { useEffect, useState } from "react"


const Nosotros = () => {

    // const [isMobile, setIsMobile] = useState(false)

    // const clickear = (e) => {
    //     console.log(e)
    // }

    // useEffect(() => {
    //     window.addEventListener('click', clickear)

    //     return () => {
    //         window.removeEventListener('click', clickear)
    //     }
    // }, [])

    // useEffect(() => {
    //     const checkMobile = () => {
    //          if (window.innerWidth <= 768) {
    //             setIsMobile(true)
    //          } else {
    //             setIsMobile(false)
    //          }
    //     }

    //     window.addEventListener('resize', checkMobile)

    //     return () => {
    //         window.removeEventListener('resize', checkMobile)
    //     }
    // }, [])

    const handleClick = (text) => {
        console.log(text)
    }

    return (
        <div onClick={() => handleClick("Hola mundo")} className="container my-5">
            <h2>Nosotros</h2>
            <hr/>

            {/* {isMobile && "ESTAMOS EN MOBILE"} */}
        </div>
    )
}

export default Nosotros