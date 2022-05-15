import { useState } from "react"
import { useUser } from "@stores";
import { ISignin, ISignup } from "./auth.interface";
import { AuthService } from "./auth.service";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const setUser = useUser(state => state.init);

    const onSignin = async (data: ISignin) => {
        setIsLoading(true);
        const resp = await AuthService.signin(data);
        setIsLoading(false);
        if (!resp || resp?.status !== 200) return;
        setUser(resp.data);
    }

    const onSignup = async (data: ISignup) => {
        setIsLoading(true);
        const resp = await AuthService.signup(data);
        setIsLoading(false);
        if (!resp || resp?.status !== 200) return;
        setUser(resp.data);
    }

    return {
        isLoading,
        onSignin,
        onSignup
    }
}