import { Navigate } from "react-router-dom";

interface Props {
    path: string;
    auth: boolean;
    component: React.FC
}

export const Guard: React.FC<Props> = ({ auth, component: Component, path })=> {

    if (!auth && path !== '/auth'){
        return <Navigate to={'/auth'} replace />
    }

    return <Component />;
}