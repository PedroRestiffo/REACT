import ItemCount from "./ItemCount";
import "./ItemListContainer.css";

function ItemListContainer(name) {
    return (
        <div className="divContainer">
            <h1 className="title">Welcome To {name = "LaPacho"}</h1>
            <ItemCount />
        </div>
    )
}


export default ItemListContainer