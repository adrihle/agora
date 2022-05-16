import { useEffect } from "react"
import { useUser } from "@stores";

export const useApp = () => {
    const init = useUser(state => state.init);

    useEffect(() => {
        init();
    }, []);
    
    return {}
}