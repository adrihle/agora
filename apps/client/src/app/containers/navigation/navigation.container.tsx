import { useLocation, useNavigate} from 'react-router-dom';
import { useUser } from '@stores';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { Wrapper } from './navigation.styles';

export const Navigation: React.FC = () => {
    const {user, clear} = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav>
            {user && (
                <Wrapper>
                    {location.pathname !== '/' && (
                        <Button 
                            type='link' 
                            icon={<ArrowLeftOutlined />} 
                            size='large' 
                            onClick={() => navigate(-1)}
                        />
                    )}
                    <div>
                        <Avatar src={user.image} size={50} />
                        <div>{user.name}</div>
                    </div>
                </Wrapper>
            )}
        </nav>
    )
}