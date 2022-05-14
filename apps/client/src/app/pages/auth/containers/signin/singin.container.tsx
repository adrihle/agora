import { Form, Button } from 'antd';
import { EmailInputComponent, PasswordInputComponent } from '@components';
import { AuthService } from '../../auth.service';
import { ISignin } from '../../auth.interface';
import { useUser } from '@stores';
import { useState } from 'react';

export const SigninContainer: React.FC = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const setUser = useUser(state => state.init);

    const onFinish = async (data: ISignin) => {
        setIsLoading(true);
        const resp = await AuthService.signin(data);
        setIsLoading(false);
        if (!resp || resp?.status !== 200) return;
        setUser(resp.data);
    };

    return (
        <Form {...{form, onFinish, layout: 'vertical'}}>
            <EmailInputComponent />
            <PasswordInputComponent />
            <Button type='primary' htmlType='submit' loading={isLoading}>Submit</Button>
        </Form>
    )
};