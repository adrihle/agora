import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { T } from '@providers';

const TEXT = T.COMPONENTS.INPUTS.PASSWORD;

export const PasswordInputComponent: React.FC = () => {
    return (
        <Form.Item name={'password'} label={TEXT.LABEL} rules={RULES}>
            <Input.Password />
        </Form.Item>
    )
}

const RULES: Rule[] = [
    {
        required: true,
        message: TEXT.ERROR_EMPTY
    }
]