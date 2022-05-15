import { EmailInputComponent, NameInputComponent, PasswordInputComponent, UploadComponent } from "@components";
import { Button, Form } from "antd"
import { useState } from "react";
import { useAuth } from "../../auth.hook";

export const SignupContainer: React.FC = () => {
    const [ form ] = Form.useForm();
    const { isLoading, onSignup, onChangeImage } = useAuth();

    return (
        <Form {...{form, onFinish: onSignup, layout: 'vertical'}}>
            <UploadComponent onChange={onChangeImage}/>
            <NameInputComponent />
            <EmailInputComponent />
            <PasswordInputComponent confirm/>
            <Button type="primary" htmlType="submit" loading={isLoading}>Submit</Button>
        </Form>
    )
}