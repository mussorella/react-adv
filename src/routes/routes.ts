import { lazy, LazyExoticComponent } from "react";
import { LazyPage1 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent= ()=> JSX.Element;//firma tradicional de un funcional component

interface Route{
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> |JSXComponent; //lo saco del lazy page 1 tocando arriba q te dice q es
    name:string;
}

//primer elemento de lazyload= suspense
//el webpack chunk esta hechoa si para cambiar el nombre dle chunk en la consola, nada mas
const lazyLayout= lazy(()=>import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))

//primero lo importamos




export const routes: Route[]=[
    {
        to:'/lazyload/',
        path:'lazyload/*',
        Component: lazyLayout,
        name:'lazyLayout - Dash'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name:'No Lazy'
    },
    
]