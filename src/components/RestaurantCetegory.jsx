
import ItemList from "./ItemList";
const RestaurantCetegory = ({ data, openIndex, setOpenIndex }) => {

    const handleClick = () => {
        console.log('clicked');
        setOpenIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <img width="24" height="24" src={open ? 'https://img.icons8.com/material-rounded/24/collapse-arrow.png' : 'https://img.icons8.com/material-two-tone/48/expand-arrow--v1.png'} alt="collapse-arrow" />
                </div>
                {openIndex && <ItemList key={data.title} items={data.itemCards} />}

            </div>
        </div>
    );
};

export default RestaurantCetegory;