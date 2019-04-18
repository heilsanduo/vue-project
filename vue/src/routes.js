import login from './view/login'
import first from './view/First'
import Xheader from './components/Xheader'

export const routes = [
    {path:'/',name:'first',component:first},
    {path:'/login',name:'login',component:login},
    {path:'/xheader',name:'xheader',component:Xheader}
  ]
