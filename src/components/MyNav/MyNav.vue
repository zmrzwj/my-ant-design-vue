<template>
    <div class="my-nav">
        <a-layout id="components-layout-demo-custom-trigger">
            <a-layout-sider
                    :trigger="null"
                    collapsible
                    class="nav-sider-menu"
                    v-model="collapsed"
            >
                <div class="logo-wrap">
                    <div class="logo" key="logo" id="logo">
                        <router-link to="/">
                            <span><img :src="logo" alt="logo" /><span>Ant Design Pro</span></span>
                        </router-link>
                    </div>
                </div>
                <a-menu
                        :defaultSelectedKeys="['1']"
                        :defaultOpenKeys="['sub1']"
                        mode="inline"
                        theme="dark"
                        :selectedKeys="[current]"
                        @click="handleClick"
                        class="a-menu"
                >
                    <a-menu-item key="1">
                        <router-link to="g2">
                            <span><a-icon type="mail" /><span>Navigation One</span></span>
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
                        <a-menu-item key="3">
                            <router-link to="loading">
                                <span>Option 3</span>
                            </router-link>
                        </a-menu-item>
                        <a-sub-menu key="sub1-2" title="Submenu">
                            <a-menu-item key="5">Option 5</a-menu-item>
                        </a-sub-menu>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
                        <a-menu-item key="7">Option 7</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon
                            class="trigger"
                            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click="()=> collapsed = !collapsed"
                    />
                </a-layout-header>
                <a-layout-content class="a-layout-content">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>

    </div>
</template>

<script>
    import {Layout} from "ant-design-vue";
    import { Menu, Icon, Spin } from "ant-design-vue";
    export default {
        components: {
            AMenu: Menu,
            AMenuItem: Menu.Item,
            ASubMenu: Menu.SubMenu,
            AMenuDivider: Menu.Divider,
            AMenuItemGroup: Menu.ItemGroup,
            AIcon: Icon,
            ALayoutSider: Layout.Sider,
        },
        name: "MyNav",
        data(){
            return {
                collapsed: false,
                fixSiderbar: false,
                current: '1',
                logo:require("../../assets/logo.png")
            }
        },
        methods:{
            handleClick (e) {
                console.log('click ', e)
                this.current = e.key
            },
        }
    }
</script>

<style scoped>
    .my-nav{
        height: 100%;
        width: 100%;
    }

    #components-layout-demo-custom-trigger{
        height: 100%;
    }

    .nav-sider-menu{
        box-shadow: 2px 0 6px rgba(0,21,41,.35);
    }


    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo-wrap{
        background: #002140;
        padding: 16px 22px;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        color: white;
    }
    #components-layout-demo-custom-trigger .logo img{
        width:36px;
        height:32px;
    }

    .a-layout-content{
        margin: 24px 16px;
        padding: 24px;
        background: #fff;
        position: relative;
        width: auto;
        height: 100%;
    }

    .logo{
        overflow: hidden;
    }
</style>