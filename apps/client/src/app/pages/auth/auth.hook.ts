import { useState } from "react"
import { useUser } from "@stores";
import { ISignin, ISignup } from "./auth.interface";
import { AuthService } from "./auth.service";
import { uploadImage } from "@providers";
import { RcFile, UploadChangeParam } from "antd/lib/upload";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState<RcFile>();
    const setUser = useUser(state => state.setUser);
    const navigate = useNavigate();

    const onSignin = async (signin: ISignin) => {
        setIsLoading(true);
        const {status, data } = await AuthService.signin(signin);
        setIsLoading(false);
        if (!data || status !== 200) return;
        const { user, token } = data;
        setUser(user);
        navigate('/')
    }

    const onSignup = async (signup: ISignup) => {
        setIsLoading(true);
        const submitData: ISignup = {...signup};
        if (image){
            const url = await uploadImage(image, 'users');
            if (url) submitData['image'] = url;
        }
        const {status, data} = await AuthService.signup(submitData);
        setIsLoading(false);
        if (!data || status !== 200) return;
        setUser(data.user);
        setImage(undefined);
        navigate('/')
    }

    const onChangeImage = async (img: UploadChangeParam) => {
        const file = img.file.originFileObj;
        if (!file) return;
        setImage(file);
    };

    return {
        isLoading,
        image,
        onSignin,
        onSignup,
        onChangeImage
    }
}