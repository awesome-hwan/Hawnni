// import UserLogin from './components/User/UserLogin.vue';
import Login from './components/UserLogin.vue';
import SignUp from './components/UserSignUp.vue';
import Home from './components/Home.vue';
import Detail from './components/User/UserDetail.vue';
import Edit from './components/User/UserEdit.vue';


export const routes = [
  { path: '/login', component: Login},
  { path: '/signup', component: SignUp},
  { path: '/home', component:Home },
  { path: '/Detail', component: Detail},
  { path: '/Edit' ,component: Edit },
  // { path: '/'+this.$store.userID+'', component: UserId},
  {
    // * === wild card
   path: '*', redirect: '/home'
  }
];
