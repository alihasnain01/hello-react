import { useEffect, useState } from "react";

const useRestrauntMenu = (restId) => {
    const [restInfo, setRestInfo] = useState(null)

    useEffect(() => {
        fetcData()
    }, [])

    const fetcData = async () => {
        const result = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + restId.resId);

        const json = await result.json();
        setRestInfo(json.data);
    }

    return restInfo;
}

export default useRestrauntMenu;