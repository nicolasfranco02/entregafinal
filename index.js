/*------------modulos--------------------*/
import express, { Router } from 'express';
import routercarrito from './src/routes/carrito.routes.js';
import routerProd from './src/routes/productos.routes.js';


/*-------------------------instancia server---------------------------------------*/
const app= express();
const carrito = Router();

/*------------------------middlewares---------------------*/
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
/*------------------------rutas--------------------*/
app.use('/api/productos', routerProd);
app.use('/api/carrito', routercarrito);
app.get('*' , (req , res) => {
    res.status(404).json({
        code: 404,
        msg: "url invalida"
    })
})

/*-------------------------servidor--------------------------------*/
const PORT =8080;
const server= app.listen(PORT, ()=>{
    console.log('listening on port '+PORT);
});

server.on('error',()=>{
    console.error('error en el port '+PORT);
})