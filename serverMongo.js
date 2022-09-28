import mongoose from "mongoose";
import CarritoMongo from "./src/daos/carrito/carritoDaosMONGO.js";
import {ProductosMongo} from './src/daos/productos/productosDAosMONGO.js';
import config from './src/utils/confirfMongo.js';

const DB_PRODUCTOS =new ProductosMongo()
const DB_CARRITO = new CarritoMongo()

const articulos = [
    { nombre: 'yerba', precio: 850, stock: 100 },
    { nombre: 'galletitas', precio: 10, stock:250 },
    { nombre: 'azucar', precio: 30, stock: 16 },
    { nombre: 'mates', precio: 420, stock: 884 },
    { nombre: 'bombillas', precio: 60, stock: 24 }
]
const strConn = `mongodb://${config.db.host}:${config.db.port}/${config.db.dbName}`;

async function main (){
    try {
        await  mongoose.connect(strConn, config.db.options)
       // console.log( 'coneccion', await DB_PRODUCTOS.save(articulos))
        //console.log('conectado2', await DB_CARRITO.save(articulos))
        console.log('carrito ', await DB_CARRITO.getAll())
      
    } catch (error) {
        console.log(error)
    }
    finally{
        await mongoose.disconnect()
    }
}
main()