import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { T } from '@providers';

const TEXT = T.COMPONENTS.INPUTS.PASSWORD;

interface Props {
    confirm?: boolean;
}

export const PasswordInputComponent: React.FC<Props> = ({ confirm = false }) => {
    return (
        <>
            <Form.Item name={'password'} label={TEXT.LABEL} rules={RULES} hasFeedback>
                <Input.Password />
            </Form.Item>
            {confirm && (
                <Form.Item 
                    name={'confirm'} 
                    label={TEXT.LABEL_CONFIRM} 
                    rules={CONFIRM_RULES}
                    dependencies={['password']}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
            )}
        </>
    )
}

const RULES: Rule[] = [
    {
        required: true,
        message: TEXT.ERROR_EMPTY
    },
]

const CONFIRM_RULES: Rule[] = [
    {
        required: true,
        message: TEXT.ERROR_EMPTY
    },
    ({ getFieldValue }) => ({
        validator(_, value){
            if (!value || getFieldValue('password') === value){
                return Promise.resolve();
            };
            return Promise.reject(new Error(TEXT.ERROR_CONFIRM))
        }
    })
]