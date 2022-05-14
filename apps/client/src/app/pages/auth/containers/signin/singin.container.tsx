import { Form, Button } from 'antd';
import axios from 'axios';
import { EmailInputComponent, PasswordInputComponent } from '@components';
import { AuthService } from '../../auth.service';
import { ISignin } from '../../auth.interface';
import { useUser } from '@stores';

export const SigninContainer: React.FC = () => {
    const [form] = Form.useForm();
    const setUser = useUser(state => state.init);

    const onFinish = async (data: ISignin) => {
        const resp = await AuthService.signin(data);
        if (!resp || resp?.status !== 200) return;
        setUser(resp.data);
    };

    return (
        <Form {...{form, onFinish, layout: 'vertical'}}>
            <EmailInputComponent />
            <PasswordInputComponent />
            <Button type='primary' htmlType='submit'>Submit</Button>
        </Form>
    )
};