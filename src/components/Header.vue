<template>
    <div class="header_container">
        <div class="header_top">
            <div class="header_center1 center">
                <div class="header_left">
                    <div class="header_img">
                        <router-link to="/" class="link">M</router-link>
                    </div>
                    <div class="header_search">
                        <el-input v-model="input" placeholder="请输入内容" maxlength="15" show-word-limit></el-input>
                    </div>
                </div>
                <div class="header_right">
                    <div class="all">
                        <div>
                            <router-link to="#" class="all_shop">全部商品</router-link>
                        </div>
                        <div>
                            <router-link to="#" class="all_shop">捐赠</router-link>
                        </div>
                    </div>
                    <div class="index_icon">
                        <div class="">
                            <i class="iconfont iconuser-copy icon_new"></i>
                        </div>
                        <div>
                            <i class="iconfont icongouwuche-copy icon_new"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header_bottom">
            <div class="header_center2 center">
                <router-link to="#" class="router_style">首页</router-link>
                <router-link to="#" class="router_style">全部</router-link>
                <router-link to="#" class="router_style">品牌周边</router-link>
                <router-link to="#" class="router_style">捐赠名单</router-link>
                <router-link to="#" class="router_style">XPay支付系统</router-link>
                <router-link to="#" class="router_style">XBoot开发平台</router-link>
                <router-link to="#" class="router_style">宣传视频</router-link>
                <router-link to="#" class="router_style">github</router-link>
                <router-link to="#" class="router_style">商业授权</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: ''
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../sass/index.scss";
    .header_container {
        width:100%;
        height:200px;
        .header_top {
            height:100px;
            width:100%;
            background-color: black;
            .header_center1 {
                display:flex;
                flex-direction: row;
                height:100%;
                .header_left {
                    width:67%;
                    height:100%;
                    display:flex;
                    flex-direction: row; 
                    justify-content: space-between;
                    align-items: center;
                    .header_img {
                        width:50px;
                        height:50px;
                        border-radius:25px;
                        background-color: white;
                        .link {
                            color: black;
                            text-align:center;
                            font-size:40px;
                        }
                    }
                }
                .header_right {
                    width:33%;
                    height:100%;
                    display:flex;
                    flex-direction: row;
                    align-items: center;
                    .all {
                        width:100%;
                        display:flex;
                        flex-direction: row;
                        border-right:1px solid #bfbfbf;
                        .all_shop {
                            width:100%;
                            text-decoration: none;
                            color:#bfbfbf;
                            font-size:16px;
                            margin-left:30px;
                        }
                    }
                    .index_icon {
                        display:flex;
                        flex-direction: row;
                        width:100%;
                        .icon_new {
                            width:100%;
                            color:#bfbfbf;
                            font-size:20px;
                            margin-left:30px;
                        }
                    }
                }
            }
        }
        .header_bottom {
            height:100px;
            background-color: white;
            .header_center2 {
                display:flex;
                flex-direction: row;
                .router_style {
                    text-decoration: none;
                    color:black;
                    margin:0 15px;
                    font-size: 15px;
                    line-height: 100px;
                }
            }     
        }
    }
</style>