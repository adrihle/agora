import { RcFile } from "antd/lib/upload";

type DestinationType = 'users' | 'posts';

export const uploadImage = async (img: RcFile, type: DestinationType) => {
    const formData = new FormData();
    const url = process.env['NX_CLOUDINARY_URL'];
    if (!img || !url) return '';
    formData.append('file', img);
    formData.append('upload_preset', `agora-${type}`);
    const data = await fetch(url, {
        method: 'POST',
        body: formData
    }).then(r => r.json());
    return data.secure_url;
};