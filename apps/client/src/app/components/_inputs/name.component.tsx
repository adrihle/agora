import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { T } from '@providers';

const TEXT = T.COMPONENTS.INPUTS.NAME;

export const NameInputComponent: React.FC = () => {
    return (
        <Form.Item name={'name'} label={TEXT.LABEL} rules={RULES}>
            <Input />
        </Form.Item>
    )
}

const RULES: Rule[] = [
    {
        required: true,
        message: TEXT.ERROR_EMPTY
    }
]