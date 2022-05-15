import { Form, Button } from 'antd';
import { EmailInputComponent, PasswordInputComponent } from '@components';
import { useAuth } from '../../auth.hook';

export const SigninContainer: React.FC = () => {
    const [form] = Form.useForm();
    const {isLoading, onSignin} = useAuth();

    return (
        <Form {...{form, onFinish: onSignin, layout: 'vertical'}}>
            <EmailInputComponent />
            <PasswordInputComponent />
            <Button type='primary' htmlType='submit' loading={isLoading}>Submit</Button>
        </Form>
    )
};