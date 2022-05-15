import { EmailInputComponent, NameInputComponent, PasswordInputComponent } from "@components";
import { Button, Form } from "antd"
import { useAuth } from "../../auth.hook";

export const SignupContainer: React.FC = () => {
    const [ form ] = Form.useForm();
    const { isLoading, onSignup } = useAuth();

    return (
        <Form {...{form, onFinish: onSignup, layout: 'vertical'}}>
            <NameInputComponent />
            <EmailInputComponent />
            <PasswordInputComponent confirm/>
            <Button type="primary" htmlType="submit" loading={isLoading}>Submit</Button>
        </Form>
    )
}