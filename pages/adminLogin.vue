<template>
  <div class="container">
    <h1>登录后台管理</h1>
    <p v-if="formError" class="error">
      {{ formError }}
    </p>
    <!-- <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
      <p>Username: <input v-model="formUsername" type="text" name="username"></p>
      <p>Password: <input v-model="formPassword" type="password" name="password"></p>
      <button type="submit">
        Login
      </button>
    </form> -->

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" v-loading="loading">
      <el-form-item label="用户名" prop="formUsername">
        <el-input v-model="ruleForm.formUsername" maxlength="20" placeholder="请输入用户名" @keyup.enter.native="submitForm('ruleForm')"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="formPassword">
        <el-input v-model="ruleForm.formPassword" type="password"  maxlength="50" placeholder="请输入密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>

    <!-- <div v-else>
      Hello {{ $store.state.authUser.username }}! -->
    <!-- <pre>I am the secret content, I am shown only when the user is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">
        Logout
      </button> -->
    <!-- </div> -->
    <!-- <p>
      <nuxt-link to="/admin">
        Super secret page
      </nuxt-link>
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formError: null,
        // formUsername: '',
        // formPassword: '',
        loading: false,
        ruleForm: {
          formUsername: '',
          formPassword: '',
        },
        rules: {
          formUsername: [{
              required: true,
              message: '请输入',
              trigger: 'blur'
            },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          formPassword: [{
              required: true,
              message: '请输入',
              trigger: 'blur'
            },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    //编译挂载前
    mounted() {
      console.log('mounted,adminLogin');
      console.log(this.$store);
    },
    methods: {

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.login();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      async login() {
        this.loading = true;
        try {
          let loginUrl = this.$urlConfig.adminLogin;
          await this.$store.dispatch('login', {
            url: loginUrl,
            username: this.ruleForm.formUsername,
            password: this.ruleForm.formPassword
          })
          // this.formUsername = '';
          // this.formPassword = '';
          this.formError = null;

          this.$router.push({
            name: 'admin'
          });
          this.loading = false;
        } catch (e) {
          this.loading = false;
          this.formError = e.message;
        }
      },
      // async logout () {
      //   try {
      //     let logoutUrl = this.$urlConfig.adminLogout;
      //     await this.$store.dispatch('logout',{
      //       url:logoutUrl,
      //     });
      //     this.$router.push({name:'adminLogin'});
      //   } catch (e) {
      //     this.formError = e.message;
      //   }
      // }
    }
  }
</script>

<style scope lang="less">
  .container {
    padding: 100px;
    width: 500px;
    margin: 0 auto;
    h1 {
      text-align: center;
    }
  }

  .error {
    color: red;
  }
</style>
