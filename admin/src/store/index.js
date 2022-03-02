import App from '@/App.vue';
import Vuex1 from 'vuex';
import {createApp} from 'vue';
const app = createApp(App)
app.use(Vuex1)
const store=new Vuex1.Store({
    state:{
        name:'张三',
number:0,
    list:[{
            id:1,name:'111'
},
        {id:2,name:'222'}]
    },
    getters: {
        getMessage(state) { // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
            return `hello${state.name}`;
        }
    },
    mutations: { // 增加nutations属性
        setNumber(state) {  // 增加一个mutations的方法，方法的作用是让num从0变成5，state是必须默认参数
            state.number = 5;
        },
        setNumberIsWhat(state, number) { // 增加一个带参数的mutations方法
            state.number = number;
        },
    },
});
export default store