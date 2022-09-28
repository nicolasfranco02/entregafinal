
import { CarritoDaos } from './src/daos/carrito/carritoDaosSQL.js';
import { productosSQL } from './src/daos/productos/productosDaosSQL.js';


const DB_PRODUCTOS = new productosSQL('productossql')
const DB_CARRITO = new CarritoDaos('carritosql')

const articulos = [
    { nombre: 'yerba', precio: 850, stock: 100 },
    { nombre: 'galletitas', precio: 10, stock:250 },
    { nombre: 'azucar', precio: 30, stock: 16 },
    { nombre: 'mates', precio: 420, stock: 884 },
    { nombre: 'bombillas', precio: 60, stock: 24 }
]
const prod = async () => {
    console.log("2) registros insertados");
    await DB_PRODUCTOS.save(articulos);
    console.log("2) registros insertados");
    await DB_PRODUCTOS.delete(5);
    console.log("2) registros insertados");
    await DB_PRODUCTOS.getAll();
}
prod()


const carrito= async () => {


}

 carrito();
