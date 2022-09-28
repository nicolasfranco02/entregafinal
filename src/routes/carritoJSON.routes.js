import { Router } from 'express';
import { CArritoJSONDaos } from '../daos/carrito/carritoDAosJSON.js';

const produc = new CArritoJSONDaos ()
const routercarrito = Router();



routercarrito.get('/', async (req, res) => {
    res(await produc.getAll())})


routercarrito.get('/:id/productos', async (req, res) => {    
    const id = req.params.id;
    const productoId = await produc.getById(id);
    res.status(200).json(productoId);
});

routercarrito.post('/',async (req, res) => {
    res.status(201).json({id: await produc.save ({ productos:[] })});

});
routercarrito.delete('/:id', async (req, res) => { 
    const id = req.params.id;
    const eliminarId =await produc.deleteByid(id);
    res.status(200).json(eliminarId);
});




export default routercarrito;