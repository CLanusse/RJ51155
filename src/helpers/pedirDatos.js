import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        // cuerpo de la promesa
        setTimeout(() => {
            // if (bool) {
                resolve(MOCK_DATA)
            // } else {
            //     reject("Promesa rechazada")
            // }
        }, 1000)
    })
}