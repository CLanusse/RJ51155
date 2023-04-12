import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, getDocs, query } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es requerido")
                .min(3, "Mínimo 3 caracteres")
                .max(30, "Máximo 30 caracteres"),
    direccion: Yup.string()
                .required("Este campo es requerido")
                .min(6, "Mínimo 6 caracteres")
                .max(30, "Máximo 30 caracteres"),
    email: Yup.string()
                .email("El email es incorrecto")
                .required("Este campo es obligatorio")
})

const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const produtosRef = collection(db, "productos")
        const q = query(produtosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const { id } = await addDoc(ordersRef, orden)
            setOrderId(id)
            vaciarCarrito()
            // batch.commit()
            //     .then(() => {
            //         addDoc(ordersRef, orden)
            //             .then((doc) => {
            //                 setOrderId(doc.id)
            //                 vaciarCarrito()
            //             })
            //     })
        } else {
            alert("Hay items sin stock: " + outOfStock.map(i => i.name).join(', '))
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Guardá tu número de orden: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Ingresa tus datos</h2>
            <hr/>

            <Formik
                validationSchema={schema}
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={generarOrden}
            >
                {({values, errors, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            value={values.nombre}
                            type="text"
                            className="form-control my-2"
                            placeholder="Tu nombre"
                            onChange={handleChange}
                            name="nombre"
                        />
                        {errors.nombre && <p style={{color: 'red'}}>{errors.nombre}</p>}

                        <input
                            value={values.direccion}
                            type="text"
                            className="form-control my-2"
                            placeholder="Tu direccion"
                            name="direccion"
                            onChange={handleChange}
                        />
                        {errors.direccion && <p style={{color: 'red'}}>{errors.direccion}</p>}

                        <input
                            value={values.email}
                            type="email"
                            className="form-control my-2"
                            placeholder="Tu email"
                            name="email"
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}


                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </form>)}
            </Formik>

            
        </div>
    )
}

export default Checkout

// cart.forEach((item) => {
//     console.log(item)
//     const docRef = doc(db, "productos", item.id)

//     getDoc(docRef)
//         .then((doc) => {
//             let stock = doc.data().stock
//             if (stock - item.cantidad >= 0) {
//                 updateDoc(docRef, {
//                     stock: stock - item.cantidad
//                 })
//             } else {
//                 alert("No hay stock de " + doc.data().name)
//             }
//         })
// })
