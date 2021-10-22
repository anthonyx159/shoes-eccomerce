import adidas1 from '../img/productos/adidas-1.jpg';
import adidas2 from '../img/productos/adidas-2.jpg';
import nike1 from '../img/productos/nike-1.jpg';
import nike2 from '../img/productos/nike-2.jpg';
import puma1 from '../img/productos/puma-1.jpeg';
import puma2 from '../img/productos/puma-2.jpeg';
import airJordan1 from '../img/productos/airJordan-1.jpg';
import airJordan2 from '../img/productos/airJordan-2.jpg';
import vans1 from '../img/productos/vans-1.jpg';
import vans2 from '../img/productos/vans-2.jpg';


const personas = [
    { id: '1', categoria: 'Nike', title: "Nike Premium", price: 340, foto: nike1 },
    { id: '2', categoria: 'Nike', title: "Nike Air Jordan Clasico", price: 350, foto: nike2 },
    { id: '3', categoria: 'Adidas', title: "Adidas Running", price: 237, foto: adidas1},
    { id: '4', categoria: 'Adidas', title: "Adidas Runner Clasico", price: 227, foto: adidas2},
    { id: '5', categoria: 'Puma', title: "Puma Capsule Runner", price: 257, foto: puma1 },
    { id: '6', categoria: 'Puma', title: "Puma Capsule Sport", price: 227, foto: puma2 },
    { id: '7', categoria: 'Rebook', title: "Rebook Turbo Max", price: 377, foto: airJordan1},
    { id: '8', categoria: 'Rebook', title: "Rebook Runner Clasico", price: 327, foto: airJordan2},
    { id: '9', categoria: 'Vans', title: "Vans Capsule Runner", price: 298, foto: vans1},
    { id: '10', categoria: 'Vans', title: "Vans Capsule Sport", price: 238, foto: vans2},
  ];


export const getFetch = new Promise((res, rej)=>{
    //acciones asincronicas
    let respuesta = '200'
    if(respuesta === '200'){
        setTimeout(()=>{
            res(personas)
        },3000)
    }else{
        rej('404')
    }

})


