import {NavLink} from 'react-router-dom';
import { useUser } from '@stores';

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
            {user && <div>{user.name}</div>}
        </nav>
    )
}