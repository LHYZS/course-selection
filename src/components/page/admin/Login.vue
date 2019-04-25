<template>
  <div class="login-wrap">
    <div class="ms-title">网上选课系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item >
          <el-select  v-model="ruleForm.region"  placeholder="请选择身份" >
            <el-option label="管理员" value="shanghai"></el-option>
            <el-option label="老师" value="beijing"></el-option>
            <el-option label="学生" value="beijing"></el-option>
          </el-select>
        </el-form-item >
        <el-form-item prop="username" >
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="password"  @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        ruleForm: {
          username: 'admin',
          password: '123123',
          region:''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('ms_username',this.ruleForm.username);
            this.$router.push('/');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
  }
  .ms-title{
    position: absolute;
    top:40%;
    width:100%;
    margin-top: -230px;
    text-align: center;
    font-size:80px;
    color: #fff;

  }
  .ms-login{
    position: absolute;
    left:50%;
    top:50%;
    width:400px;
    height:300px;
    margin:-150px 0 0 -190px;
    padding:50px 100px;
    border-radius: 10px ;
    background: #fff;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:50%;
    height:50px;
    border-radius: 10px;
  }

</style>
