<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
             text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import bus from '../common/bus';
  export default {
    data() {
      return {
        collapse: false,
        items: [
          {
            icon: 'el-icon-setting',
            index: 'dashboard',
            title: '系统首页'
          },
          {
            icon: 'el-icon-date',
            index: '1',
            title: '管理员个人中心',
            subs: [
              {
                index: 'pd',
                title: '个人信息'
              },
              {
                index: 'cp',
                title: '修改密码'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: '2',
            title: '基本管理',
            subs: [
              {
                index: 'ct',
                title: '选课统计'
              },
              {
                index: 'cm',
                title: '课程管理'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: '3',
            title: '学生管理',
            subs: [
              {
                index: 'se',
                title: '学生查询'
              },
              {
                index: 'as',
                title: '新增学生'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: '4',
            title: '教师管理',
            subs: [
              {
                index: 'te',
                title: '教师查询'
              },
              {
                index: 'at',
                title: '新增教师'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: '5',
            title: '教师个人中心',
            subs: [
              {
                index: 'pd1',
                title: '个人信息'
              },
              {
                index: 'cp2',
                title: '修改密码'
              }
            ]
          },
        ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    },
    created(){
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg;
      })
    }
  }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
    width: 250px;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
