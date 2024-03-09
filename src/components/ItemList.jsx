import { useDispatch } from "react-redux"
import { addToCart } from "../utils/CartSlice"

const ItemList = ({ items }) => {

    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center">
                    <div>
                        <div>
                            <h1>{item.card.info.name}</h1>
                            <span>₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                        </div>
                        <p className="text-sm text-gray-400 py-3 ">{item.card.info.description}</p>
                    </div>
                    <div className="">
                        <div className="absolute">
                            <button className="p-2 mx-3 rounded-lg bg-white shadow-lg" onClick={() => { handleAddToCart(item) }}>Add +</button>
                        </div>
                        <img className="w-40 rounded-sm" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} alt="" />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ItemList;