


export const Tutor = ( {nombre, curso, comision, edad} ) => {
    // console.log(props)
    // const { nombre, curso, comision, edad } = props

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Curso: {curso}</p>
            <p>Comisión: {comision}</p>
            <p>Edad: {edad}</p>
        </div>
    )
}