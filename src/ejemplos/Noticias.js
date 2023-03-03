


export const Noticias = ( {children} ) => {

    return (
        <section>
            <h2>Noticias</h2>
            <hr/>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>     

            <div style={{background: 'red'}}>
                {children}     
            </div>
        </section>
    )
}