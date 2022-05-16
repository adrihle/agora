import { useEffect } from "react"
import { useUser } from "@stores";

export const useApp = () => {
    const {init, user} = useUser();

    useEffect(() => {
        init();
    }, []);

    return {
        isAunthenticated: !!user
    }
}