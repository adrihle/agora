import { Navigate, Route, Routes } from "react-router-dom"
import { routes } from "@routes";
import { useUser } from "@stores";
import { useEffect, useRef } from "react";
import { AuthPqge } from "../../pages/auth";

export const AuthContainer: React.FC = () => {
    const { init, user } = useUser();
    const ref = useRef(false);

    useEffect(() => {
      init();
      ref.current = true;
    }, [init]);

    if (!user && ref.current) {
      return (
        <Routes>
          <Route path={'/auth'} element={<AuthPqge />} />
          <Route path={'*'} element={<Navigate to={'/auth'}/>} />
        </Routes>
      )
    }

    return (
        <Routes>
          {routes.map(({path, component: Component}) => {
            return (
              <Route 
                key={path} 
                path={path} 
                element={<Component />}  
              />
            )
          })}
        </Routes>
    )
}