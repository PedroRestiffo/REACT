import { useState } from "react"
import "./ItemCount.css";

function ItemCount({ stock, initial,  onAdd }) {
    const [num , setNum] = useState(0)

    const sumar = () => {
        setNum(num + 1)
    }

    const restar = () => {
        if (num > 0 )
            setNum(num - 1)
    }
    return (
        <div className="divCount">
            <button className="buttons" onClick={sumar}>Sumar</button>
            <p>{num}</p>
            <button className="buttons" onClick={restar}>Restar</button>
            <button className="buttons" >Agregar Producto al Carrito</button>
        </div>
    )
}


export default ItemCount