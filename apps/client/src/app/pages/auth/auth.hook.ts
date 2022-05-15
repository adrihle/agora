import { useState } from "react"
import { useUser } from "@stores";
import { ISignin, ISignup } from "./auth.interface";
import { AuthService } from "./auth.service";
import { uploadImage } from "@providers";
import { RcFile, UploadChangeParam } from "antd/lib/upload";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState<RcFile>();
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
        const submitData: ISignup = {...data};
        if (image){
            const url = await uploadImage(image, 'users');
            if (url) submitData['image'] = url;
        }
        const resp = await AuthService.signup(submitData);
        setIsLoading(false);
        if (!resp || resp?.status !== 200) return;
        setUser(resp.data);
        setImage(undefined);
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