import { Schema, model } from "mongoose"

const productosSchema = Schema({
        nombre : {type : String, required: true},
        precio: {type : String, required: true},
        stock : {type : String, required: true}
})

export const productosModel = model('productos', productosSchema);