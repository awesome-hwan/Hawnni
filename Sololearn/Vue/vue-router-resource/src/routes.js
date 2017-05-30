// import UserLogin from './components/User/UserLogin.vue';
import Home from './components/Home.vue';
import Login from './components/UserLogin.vue';
import SignUp from './components/UserSignUp.vue';
import Detail from './components/User/UserDetail.vue';

export const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/signup', component: SignUp},
  { path: '/detail', component: Detail}
]
