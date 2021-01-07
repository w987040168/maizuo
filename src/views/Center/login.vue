<template>
    <div>
        <div class="logo">
            <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png">
        </div>
        <van-form @submit="onSubmit">
        <van-field
            class="form-group"
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
        class="form-group"
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;" class="submit login-btn van-button--info">
            <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
        </van-form>
    </div>
</template>
<script>
import Vue from 'vue';
import { Form ,field, button} from 'vant';

Vue.use(Form);
Vue.use(field);
Vue.use(button);
export default {
    data () {
        return {
            username:'',
            password:'',

        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>

<style lang="scss" scoped>
.logo{
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img{
        height: 60px;
    }
}
</style>
<style lang="scss" scoped>
    .form-group{
        line-height: 55px;
    margin: 0 25px;
    position: relative;
    }
    .submit  {
        
    line-height: 45px;
    font-size: 16px;
    margin: 70px 25px 0;
    border-radius: 3px;
    text-align: center;
    background-color: #ff5f16;
    height: 44px;
    color: #fff;
    border: none;
    }
    .van-button--info {
        background-color: #ff5f16;
        border: 0;
    }
</style>