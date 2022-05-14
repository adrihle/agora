import {NavLink} from 'react-router-dom';
import { useUser } from '@stores';
import { Avatar } from 'antd';

export const Navigation: React.FC = () => {
    const user = useUser(state => state.user);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/auth'}>Auth</NavLink>
                </li>
            </ul>
            {user && (
                <section style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar src={user.image} size={50} />
                    <div style={{marginLeft: '15px'}}>{user.name}</div>
                </section>
            )}
        </nav>
    )
}