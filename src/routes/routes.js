import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectTheme from '../components/SelectTheme.vue'
import FirstScreen from '../components/FirstScreen.vue'
import EditScreen from '../components/EditScreen.vue'
import ThanksScreen from '../components/ThanksScreen.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/select-theme', name: 'select-theme', component: SelectTheme },
        { path: '/edit-screen', name: 'edit-screen', component: EditScreen },
        { path: '/tks-screen', name: 'tks-screen', component: ThanksScreen },
        { path: '/', component: FirstScreen },
    ]
})