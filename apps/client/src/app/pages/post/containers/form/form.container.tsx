import { T } from "@providers";
import { Button, Form, Input } from "antd";
import { Rule } from "antd/lib/form";

const { TITLE, CONTENT } = T.COMPONENTS.INPUTS;

const { Item, useForm } = Form;

export const FormContainer: React.FC = () => {
    const [ form ] = useForm();

    const onFinish = (data: any) => console.log(data);

    return (
        <Form {...{form, onFinish, layout:'vertical'}}>
            <Item name={'title'} label={TITLE.LABEL} rules={RULES} >
                <Input/>
            </Item>
            <Item name={'content'} label={CONTENT.LABEL} rules={RULES} >
                <Input.TextArea rows={20}/>
            </Item>
            <Button type="primary" htmlType="submit">Publish</Button>
        </Form>
    )
}

const RULES: Rule[] = [
    {
        required: true,
        message: TITLE.ERROR_EMPTY
    }
]