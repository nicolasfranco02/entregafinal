import ContenedorJSON from "../../ContenedorJSON.js";

const DB_CARRITO = '../../../DB/carritoDeProductos.json'



export class CArritoJSONDaos extends ContenedorJSON{
    constructor (rutaDir){
        super (`${rutaDir}'../../../DB/listadoDeProductos.json'`)
        
    }

}