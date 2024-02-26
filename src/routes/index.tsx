import { Routes, Route, Navigate } from 'react-router-dom';
import { IRoute } from "../types/router";
import routes from './RoutesConfig';
import React, { useEffect } from 'react';



const RouteDecorator = (props: { route: IRoute}) => {
    const { route } = props;
    // const navigate = useNavigate();

    useEffect(() => {
        // authentication route guard
        if (route.meta?.requireAuth) {
            // TODO check user if not login 
            // if (!isLogin()) {
            //     navigate('/login', { state: { redirect: route.pathname } });
            //   }        
        }

        // customize  authentication route guard
        // route.beforeCreate && route.beforeCreate(route);
        // return () => route.beforeDestroy && route.beforeDestroy(route);

    }, [route])

    //   return <route.component />;
    return <route.component />;
}



const RouterComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/index" />} />
    {routes.map(route => (
      <Route
        // key={route.pathname}
        // path={route.pathname}
        // element={<RouteDecorator route={route} />}
      />
    ))}
  </Routes>
);

export default RouterComponent;