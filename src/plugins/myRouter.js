// 导入自定义组件
import VueRouter from "vue-router";
import FZG_GuanCang from "../pages/FZG_GuanCang.vue";
import FZG_ShengQing from "../pages/FZG_ShengQing.vue";
import FZG_WangShang from "../pages/FZG_WangShang.vue";
import FZG_DuZhe from "../pages/FZG_DuZhe.vue";
import FZG_XinShu from "../pages/FZG_XinShu.vue";
import FZG_XianLu from "../pages/FZG_XianLu.vue";
import FZG_GongGao from "../pages/FZG_GongGao.vue";
// import FZG_TuShu from "../pages/FZG_TuShu.vue";
import FZG_RuGuan from "../pages/FZG_RuGuan.vue";
import FZG_FaBu from "../pages/FZG_FaBu.vue";
import FZG_FaBuHistory from "../pages/FZG_FaBuHistory.vue";
import FZG_ShenHe from "../pages/FZG_ShenHe";
import FZG_GuanYu from "../pages/FZG_GuanYu";
import FZG_WangZhan from "../pages/FZG_WangZhan";








import FZG_DuZheHistory from "../pages/FZG_DuZheHistory.vue";
import FZG_GuanCang_1 from "../pages/FZG_GuanCang_1.vue";
import FZG_GuanCang_ZS from "../pages/FZG_GuanCang_ZS.vue";
import FZG_GuanCang_NJ from "../pages/FZG_GuanCang_NJ.vue";
import FZG_GuanCang_JP from "../pages/FZG_GuanCang_JP.vue";
import FZG_GuanCang_BZ from "../pages/FZG_GuanCang_BZ.vue";
import FZG_GuanCang_QK from "../pages/FZG_GuanCang_QK.vue";
import FZG_GuanCang_QT from "../pages/FZG_GuanCang_QT.vue";
import FZG_Homepage from "../components/FZG_Homepage.vue";
import user from '../pages/user'
import login from '../pages/login'
import register from '../pages/register'
import FZG_Login from "../pages/FZG_Login.vue";
import FZG_Register from "../pages/FZG_Register.vue";

// import FZG_AMP from '../pages/FZG_ArticlemanageList.vue';
// import FZG_AdmPage from '../pages/FZG_AdmPage.vue';
// import FZG_CAMP from '../pages/FZG_ArticleCheckList.vue';
// import FZG_Admin_UserInfo from '../pages/FZG_UserInfoforAdmin.vue'






// 定义路由数组
export default new VueRouter({
    mode: 'history',
  base: process.env.BASE_URL,
    routes: [
       
        {

            path: "/FZG_Homepage",
            name: "FZG_Homepage",
            component: FZG_Homepage


        },
        
        {

            path: "/FZG_Register",
            component: FZG_Register,
            redirect:'/FZG_Register/user/register',
            children:[{
                path:'/FZG_Register/user',
                component:user,
                redirect:'/FZG_Register/user/register',
                children:[
                    // {
                //   path: '/FZG_Login/user/register',
                //   component:register
                // },
                {
                  path: '/FZG_Register/user/register',
                  component:register
                }]
              }]

        },
       
        {

            path: "/FZG_Login",
            component: FZG_Login,
            redirect:'/FZG_Login/user/login',
            children:[{
                path:'/FZG_Login/user',
                component:user,
                redirect:'/FZG_Login/user/login',
                children:[
                    // {
                //   path: '/FZG_Login/user/register',
                //   component:register
                // },
                {
                  path: '/FZG_Login/user/login',
                  component:login
                }]
              }]

        },
        // {

        //     path: "/FZG_Register",
        //     name: "FZG_Register",
        //     component: FZG_Register


        // },
        {

            path: "/FZG_GuanCang",
            component: FZG_GuanCang,
            children: [
                {
                    path:"FZG_GuanYu",
                    name:"FZG_GuanYu",
                    component:FZG_GuanYu
                },
                {
                    path:"FZG_WangZhan",
                    name:"FZG_WangZhan",
                    component:FZG_WangZhan
                },
                {
                    path:"FZG_ShengQing",
                    name:"FZG_ShengQing",
                    component:FZG_ShengQing
                },
                {
                    path:"FZG_DuZhe",
                    name:"FZG_DuZhe",
                    component:FZG_DuZhe
                },
                {
                    path:"FZG_FaBu",
                    name:"FZG_FaBu",
                    component:FZG_FaBu
                },
                {
                    path:"FZG_ShenHe",
                    name:"FZG_ShenHe",
                    component:FZG_ShenHe
                },
                
                {
                    path:"FZG_FaBuHistory",
                    name:"FZG_FaBuHistory",
                    component:FZG_FaBuHistory
                },
                {
                    path:"FZG_DuZheHistory",
                    component:FZG_DuZheHistory
                },
                {
                    path:"FZG_XinShu",
                    component:FZG_XinShu
                },
                {
                    path:"FZG_XianLu",
                    name:"FZG_XianLu",
                    component:FZG_XianLu

                },
                {
                    path:"FZG_GongGao",
                    name:"FZG_GongGao",
                    component:FZG_GongGao


                },
                // {
                //     path:"FZG_AdmPage",
                //     name:"FZG_AdmPage",
                //     component:FZG_AdmPage,
                //     children:[
                //         {
                //             path: "FZG_AML",
                //             component: FZG_AMP
                //           },
                       
                //           {
                //             path: "FZG_CAMP",
                //             component: FZG_CAMP
                //           },
                        
                //     ]
                // },
                // {
                //     path:"FZG_TuShu",
                //     name:"FZG_TuShu",
                //     component:FZG_TuShu


                // },
                {
                    path:"FZG_RuGuan",
                    name:"FZG_RuGuan",
                    component:FZG_RuGuan
                },
                {
                    path:"ZG_WangShang",
                    name:"FZG_WangShang",
                    component:FZG_WangShang
                },
                {
                    path: "FZG_GuanCang_1",
                    name: "FZG_GuanCang_1",
                    component: FZG_GuanCang_1,
                    children:[
                        {
                            path:"/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_ZS",
                            name:"FZG_GuanCang_ZS",
                            component:FZG_GuanCang_ZS
                        },
                        {
                            path:"/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_NJ",
                            name:"FZG_GuanCang_NJ",
                            component:FZG_GuanCang_NJ
                        },
                        {
                            path:"/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_JP",
                            name:"FZG_GuanCang_JP",
                            component:FZG_GuanCang_JP
                        },
                        {
                            path:"/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_BZ",
                            name:"FZG_GuanCang_BZ",
                            component:FZG_GuanCang_BZ
                        },
                        {
                            path:"/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_QK",
                            name:"FZG_GuanCang_QK",
                            component:FZG_GuanCang_QK
                        },
                        {
                            path:"/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_QT",
                            name:"FZG_GuanCang_QT",
                            component:FZG_GuanCang_QT
                        },


                    ]
                }
            ]


        }





    ]
});




