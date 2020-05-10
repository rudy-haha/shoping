<template>
  <div class="login">
    <div class="box">
      <!--头像区域-->
      <div class="img_box">
        <img src="../imgs/logo.png" alt />
      </div>
      <!-- 登录区域 -->
      <el-form label-width="0px" class="from" :model="ruleForm" :rules="rules" ref='loginRef'>
        <!-- 用户名 -->
        <el-form-item prop='username'>
          <el-input prefix-icon="iconfont iconuser" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop='passworld'>
          <el-input prefix-icon="iconfont iconlock"  type="password"  v-model="ruleForm.passworld"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary">登录</el-button>
          <el-button type="info" @click='reset'>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        passworld: ""
      },
      rules: {
        username: [
          { required: true, message: "请输用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        passworld: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 16, message: "长度在 5 到 16 个字符", trigger: "blur" }
        ],
      }
    };
  },
  methods:{
      reset(){
          this.$refs.loginRef.resetFields()
      }
  }
};
</script>

<style lang="less" scoped>
.login {
  background-color: skyblue;
  height: 100%;
}
.box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.img_box {
  width: 130px;
  height: 130px;
  border: 1px solid white;
  border-radius: 50%;
  box-shadow: 0 0 10px tomato;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.from {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
}
</style>