import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { SigninContainer, SignupContainer } from './containers';
import { T } from '@providers';

const { TabPane } = Tabs;

export const AuthPqge: React.FC = () => {
    return (
        <Tabs centered animated>
            <TabPane key={'SIGNIN'} tab={<div><LoginOutlined/>{T.AUTH.SIGNIN.TAB_TITLE}</div>}>
                <SigninContainer />
            </TabPane>
            <TabPane key={'SIGNUP'} tab={<div><UserAddOutlined/>{T.AUTH.SIGNUP.TAB_TITLE}</div>}>
                <SignupContainer />
            </TabPane>
        </Tabs>
    )
};

export default AuthPqge;