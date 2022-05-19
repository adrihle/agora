import { useEffect, useState } from "react"
import { useUser } from "@stores";
import { useNavigate } from "react-router-dom";

export const useApp = () => {
    const {init, user} = useUser();
    const [isInitialized, setIsInitialized]= useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        init();
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (!user && isInitialized){
            navigate('/auth', { replace: true });
        }
    }, [])

    return {
        isAunthenticated: !!user
    }
}