import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Login from './components/login.vue';
import Register_employee from './components/register_employee.vue'
import managers from './components/managers.vue'; 
import employees from './components/employees.vue';

Vue.use(Router)

export default new Router({

    mode: 'history',

    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register_employee},
        {path: '/managers', component: managers},
        {path: '/employees', component: employees}
    ]
})

