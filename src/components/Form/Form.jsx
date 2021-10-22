import React, { useReducer, useState } from 'react'
import './Form.css'


const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export const Form = ( {cartList, iconCart, precioTotal, vaciarCarrito} ) => {
    const [noOptionSelected, setNoOptionSelected] = useState(true)
    const [isWarning, setIsWarning] = useState(false)
    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsWarning(true)

        //Se envia cuando se haya seleccionado la forma de pago
        if(!noOptionSelected) {
            sendProductsWhatsapp();
            vaciarCarrito();
        }
        
    }

    const checkoutSelected = (e) => {
        setNoOptionSelected(false)
        handleChange(e);
    }
        
        const sendProductsWhatsapp = () =>{
          let apiPhone = "51924301608";
          let totalProducts = '';

          let url = `https://api.whatsapp.com/send?phone=${apiPhone}&text=
            *UrbanShoes*%0A
            *Hola! Soy ${formData.name}. Espero que a la brevedad esté confirmando mi pedido.*%0A`;
          //Se usa el form para llenar la url
          cartList.map( resp => {
            url += `-${resp.item.title}/talla:${typeof resp.size === 'number' ? resp.size : resp.size.toString()}/cantidad:${typeof resp.quantity === 'number' ? resp.quantity : resp.quantity.toString()}/precio:${resp.item.price}%0A`
            totalProducts = iconCart();
          })

          url += `*Total de la compra*%0A
             -${precioTotal()} soles%0A
             *Dirección de entrega*%0A
             -${formData.address}%0A
             *Número del cliente*%0A
             -${formData.phone}%0A
             *Forma de pago*%0A
             -${formData.checkout}%0A
             *Muchas gracias por su tiempo*%0A`;
          
          localStorage.clear()
  
          window.open(url);
        console.log(url)

        }

    const handleChange = (e) => {
        setFormData({
            name: e.target.name,
            value: e.target.value
        })
    }

    console.log(formData)

    return (
        <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <div className="block-1">
                    <label>
                        <p>Nombres</p>
                        <input type="text" name="name" required onChange={handleChange}/>
                    </label>
                    <label>
                        <p>Apellidos</p>
                        <input type="text" name="lastname" required onChange={handleChange}/>
                    </label>
                </div>

                <div className="block-2">
                    <label>
                        <p>Teléfono</p>
                        <input type="number" name="phone" required onChange={handleChange}/>
                    </label>
                    <label>
                        <p>Dirección</p>
                        <input type="text" name="address" required onChange={handleChange}/>
                    </label>
                </div>

                <div className="block-3">
                    <label>
                        <p>Forma de pago</p>
                        <select name="checkout" id="checkout" onChange={checkoutSelected}>
                            { noOptionSelected && <option selected>Seleccione su forma de pago</option>}
                            <option value="Mercado pago">Mercado pago</option>
                            <option value="Efectivo">Efectivo</option>
                        </select>
                        {isWarning && noOptionSelected && <div className="form-warning">-Seleccione su metodo de pago</div>}
                    </label>
                </div>

                <button type="submit">Envíar</button>
            </form>
        </div>
    )
}
