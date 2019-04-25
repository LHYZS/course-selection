import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/admin/Dashboard.vue'], resolve),
          meta: { title: '系统首页' }
        },
        {
          path: '/pd',
          component: resolve => require(['../components/page/admin/PersonalData.vue'], resolve),
          meta: { title: '个人信息' }
        },
        {
          path: '/cp',
          component: resolve => require(['../components/page/admin/ChangePassword.vue'], resolve),
          meta: { title: '修改密码' }
        },
        {
          path: '/cs',
          component: resolve => require(['../components/page/admin/CourseStatistics.vue'], resolve),
          meta: { title: '选课统计' }
        },
        {
          path: '/cm',
          component: resolve => require(['../components/page/admin/CourseManagement.vue'], resolve),
          meta: { title: '课程管理' }
        },
        {
          path: '/se',
          component: resolve => require(['../components/page/admin/StudentEnquiry.vue'], resolve),
          meta: { title: '学生查询' }
        },
        {
          path: '/as',
          component: resolve => require(['../components/page/admin/AddStudent.vue'], resolve),
          meta: { title: '新增学生' }
        },
        {
          path: '/te',
          component: resolve => require(['../components/page/admin/TeacherEnquiry.vue'], resolve),
          meta: { title: '教师查询' }
        },
        {

          path: '/at',
          component: resolve => require(['../components/page/admin/AddTeacher.vue'], resolve),
          meta: { title: '新增教师' }
        },
        //教师个人中心
        {
          path: '/pd1',
          component: resolve => require(['../components/page/admin/PersonalData.vue'], resolve),
          meta: { title: '个人信息' }
        },
        {
          path: '/cp1',
          component: resolve => require(['../components/page/admin/ChangePassword.vue'], resolve),
          meta: { title: '修改密码' }
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/admin/Login.vue'], resolve)
    }
  ]
})
