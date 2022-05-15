import { Avatar, Upload } from "antd"
import { useState } from "react"
import { UserOutlined } from '@ant-design/icons';
import { getBase64 } from "../../utils/getBase64.util";
import { UploadChangeParam } from "antd/lib/upload";
import { UplaodWrapper } from "./upload.style";

interface Props {
    onChange: (image: UploadChangeParam) => void;
}

export const UploadComponent: React.FC<Props> = ({ onChange }) => {
    const [preview, setPreview] = useState('');

    const handleChange = async (data: UploadChangeParam) => {
        const imgPreview = await getBase64(data.file.originFileObj);
        setPreview(imgPreview);
        onChange(data);
    };

    return (
        <UplaodWrapper>
            <Upload 
                onChange={handleChange}
                showUploadList={false}
                customRequest={() => false}
            >
                {!preview ? (
                    <Avatar size={100} icon={<UserOutlined />} />
                ): (
                    <Avatar size={100} src={preview} />
                )}
            </Upload>
        </UplaodWrapper>
    )
}