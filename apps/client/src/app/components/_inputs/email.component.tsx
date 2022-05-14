import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { T } from '@providers';

const TEXT = T.COMPONENTS.INPUTS.EMAIL;

export const EmailInputComponent: React.FC = () => {
    return (
        <Form.Item name={'email'} label={TEXT.LABEL} rules={RULES}>
            <Input />
        </Form.Item>
    )
}

const RULES: Rule[] = [
    {
        required: true,
        message: TEXT.ERROR_EMPTY
    },
    {
        required: true,
        type: 'email',
        message: TEXT.ERROR_WRONG
    }
]