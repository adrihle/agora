import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { routes } from "@routes";
import { useUser } from "@stores";
import { useContext, useEffect } from "react";
import AuthPage from "../../pages/auth/auth.page";
import { AuthContext } from "../../contexts/useAuth.context";
import React from "react";

export const RouterContainer: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

    return (
      <Routes>
        {/* <Route path="/auth" element={<AuthPage />}/> */}
        <Route element={<PrivateRoute isAuth={isAuth}/>}>
          {routes.map(({path, component: Component}) => {
            return (
              <Route 
                key={path} 
                path={path} 
                element={<Component />}
              />
            )
          })}
        </Route>
      </Routes>
    )
}

const PrivateRoute: React.FC<{isAuth: boolean}> = React.memo(({ isAuth }) => {

  return <Outlet />

  return isAuth ? <Outlet /> : <Navigate to={'/auth'}/>
})