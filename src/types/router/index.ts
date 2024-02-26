import { FC } from "react";
import { RouterProps } from "react-router-dom";

export interface IRoute extends RouterProps {
    
    // path
    pathname: string;

    // name of the router
    name: string;

    // option for title of the router
    title?: string;

    // react component function 
    component: FC;

    // create the page hooks
    beforeCreate: (route: IRoute) => void;

    // destroy the page hooks 
    beforeDestroy: (route: IRoute) => void;

    //attribute
    meta: {
        navigation: string;
        requireAuth: boolean;
    }
}