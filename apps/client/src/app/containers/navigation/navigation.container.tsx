import {NavLink, useNavigate} from 'react-router-dom';
import { useUser } from '@stores';
import { Avatar } from 'antd';

export const Navigation: React.FC = () => {
    const {user, clear} = useUser();
    const navigate = useNavigate();

    const onClick = () => {
        localStorage.removeItem('token');
        clear();
        navigate('auth');
    }

    return (
        <nav>
            {user && (
                <section style={{display: 'flex', alignItems: 'center'}} onClick={onClick}>
                    <Avatar src={user.image} size={50} />
                    <div style={{marginLeft: '15px'}}>{user.name}</div>
                </section>
            )}
        </nav>
    )
}