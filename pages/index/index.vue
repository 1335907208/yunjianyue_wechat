<template>
    <view class="page">
        <view class="page-bar">
            <view class="page-bar_status" :style="'height: '+statusHeight+'px;'"></view>
        </view>
        <view class="page-cotent">
            <view class="page-cotent-group">
                <view class="page-cotent-group__top">
                    <view class="page-cotent-group__top-title">
                        热门房型
                    </view>
                    <view class="page-cotent-group__top-menu">
                        查看全部
                        <i class="uicon uicon-arrow-right"></i>
                    </view>
                </view>
                <swiper 
                    class="page-cotent-group__content" 
                    circular 
                    autoplay
                    interval="4000"
                    next-margin="70px">
                    <swiper-item v-for="(item, i) in houseList" :key="i">
                        <house-card :data="item"></house-card>
                    </swiper-item>
                </swiper>
            </view>
            <view class="page-cotent-group">
                <view class="page-cotent-group__top">
                    <view class="page-cotent-group__top-title">
                        吃喝玩乐
                    </view>
                    <view class="page-cotent-group__top-menu">
                        查看全部
                        <i class="uicon uicon-arrow-right"></i>
                    </view>
                </view>
                <swiper 
                    class="page-cotent-group__content" 
                    circular
                    next-margin="200px">
                    <swiper-item>
                        <view class="image-card image-card_eat">
                            <image class="image-card__icon" mode="aspectFit" src="/static/other/eat.png" style="width: 70px;"></image>
                            <view class="image-card__text">
                                饿了去哪吃
                            </view>
                        </view>
                    </swiper-item>
                    <swiper-item>
                        <view class="image-card image-card_drink">
                            <image class="image-card__icon" mode="aspectFit" src="/static/other/drink.png" style="width: 54px;top: calc(50% - 6px);"></image>
                            <view class="image-card__text">
                                渴了想喝啥
                            </view>
                        </view>
                    </swiper-item>
                    <swiper-item>
                        <view class="image-card image-card_play">
                            <image class="image-card__icon" mode="aspectFit" src="/static/other/play.png" style="width: 60px;"></image>
                            <view class="image-card__text">
                                闲了去哪玩
                            </view>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
            <view class="page-cotent-group">
                <view class="page-cotent-group__top">
                    <view class="page-cotent-group__top-title">
                        新闻
                    </view>
                    <view class="page-cotent-group__top-menu">
                        查看全部
                        <i class="uicon uicon-arrow-right"></i>
                    </view>
                </view>
                <view class="page-cotent-group__content" style="height: auto; margin-bottom: 50px;">
                    <view class="new-card" @click="pageChange('/pages/webView?src=https://mp.weixin.qq.com/s/hxRSIx-lkhdwqCccrL9V1A')">
                        <view class="new-card__image" style="background-image: url(https://636c-cloud1-7g6hhnhs2e68b46e-1324489131.tcb.qcloud.la/news/640.png?sign=da93a659329beb8cde4ec91945dbf2bc&t=1708671019);"></view>
                        <view class="new-card__info">
                            <text class="new-card__info-title">
                                周三免票继续，2024年1-3月活动来了
                            </text>
                            <text class="new-card__info-text">
                                全市范围内24处A级旅游景区在开放日当天对提前有预约且领取门票消费券的游客免门票开放（仅指各景区的首道门票，不含景区内索道、游船、景交换乘等其他参观游览项目和二次消费项目）。
                            </text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import houseList from "@/mock/house/list.js"
    import { getCurrentInstance } from 'vue';
    import { onShow } from "@dcloudio/uni-app"
    onShow((e) => {
        const that = getCurrentInstance().ctx
       if (typeof that.$scope.getTabBar === 'function' && that.$scope.getTabBar()) {
         that.$scope.getTabBar().setData({
           selected: 0
         })
       }
    })
    uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: ""
    })
    let res = uni.getSystemInfoSync();
    let statusHeight = res.statusBarHeight
    const pageChange = (url) => {
        uni.navigateTo({ url })
    }
</script>

<style>
    page{
        height: 100%;
    }
</style>
<style lang="scss" scoped>
    .page{
        height: 100%;
        overflow: auto;
        &-bar{
            width: 100%;
            height: 240px;
            background-image: url("https://636c-cloud1-7g6hhnhs2e68b46e-1324489131.tcb.qcloud.la/hongcun/7fbf255cd18443ba01f7e95d4ebd83e40e25998d4be6c-DmWHMq_fw1200.jpeg?sign=38b99370e497377502e11a72a5c1f414&t=1708590790https://636c-cloud1-7g6hhnhs2e68b46e-1324489131.tcb.qcloud.la/hongcun/7fbf255cd18443ba01f7e95d4ebd83e40e25998d4be6c-DmWHMq_fw1200.jpeg?sign=38b99370e497377502e11a72a5c1f414&t=1708590790");
            background-size: 100% 100%;
            position: fixed;
            top: 0;
            &_status{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                background-color: rgba(0, 0, 0, .1);
            }
        }
        &-cotent{
            border-radius: 30px 30px 0 0;
            transform: translateY(210px);
            background-color: #fff;
            min-height: 500px;
            padding: 40px 0;
            &-group{
                padding: 0 12px;
                &__top{
                    display: flex;
                    justify-content: space-between;
                    &-title{
                        font-size: 16px;
                    }
                    &-menu{
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                        color: rgba(105, 121, 248, 1);
                        .uicon{
                            font-size: 13px;
                            margin-left: 4px;
                        }
                    }
                }
                &__content{
                    margin: 20px 0;
                    height: 180px;
                    .image-card{
                        width: 150px;
                        height: 170px;
                        position: relative;
                        border-radius: 16px;
                        &__icon{
                            position: absolute;
                            left: 50%;
                            top: calc(50% - 4px);
                            transform: translateX(-50%) translateY(-50%);
                            height: 80px;
                        }
                        &__text{
                            position: absolute;
                            left: 50%;
                            bottom: 20px;
                            transform: translateX(-50%);
                            color: #fff;
                            font-size: 18px;
                            white-space: nowrap;
                        }
                    }
                    .image-card_eat{
                        background: linear-gradient(0deg, rgba(255, 162, 107, 0.86), rgba(255, 162, 107, 0.86)), url("https://636c-cloud1-7g6hhnhs2e68b46e-1324489131.tcb.qcloud.la/other/618b71b7f5d93a5aca22cc56.png?sign=1fb99ba1f482b38d92cfb84fd1555968&t=1708667332") 0 0/100% 100%;
                    }
                    .image-card_drink{
                        background: linear-gradient(0deg, rgba(105, 121, 248, 0.82), rgba(105, 121, 248, 0.82)), url("https://636c-cloud1-7g6hhnhs2e68b46e-1324489131.tcb.qcloud.la/other/618b71b7e9f39f58b966f5ab.png?sign=41b690be1e2e3305fa0179972179b428&t=1708669103") 0 0/100% 100%;
                    }
                    .image-card_play{
                        background: linear-gradient(0deg, rgba(190, 82, 242, 0.82), rgba(190, 82, 242, 0.82)), url("https://636c-cloud1-7g6hhnhs2e68b46e-1324489131.tcb.qcloud.la/other/61810563f83dda68eb41098a.png?sign=0872106f03708e524c68f8444d4fca71&t=1708669116") 0 0/100% 100%;
                    }
                    
                    .new-card{
                        width: 343px;
                        height: 100px;
                        border-radius: 12px;
                        box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
                        overflow: hidden;
                        display: flex;
                        &__image{
                            background-repeat: no-repeat;
                            background-size: 100%;
                            background-position: 50% 50%;
                            width: 140px;
                        }
                        &__info{
                            width: calc(100% - 140px);
                            padding: 10px;
                            &-title{
                                font-size: 15px;
                                font-weight: 600;
                                line-height: 20px;
                                color: rgba(26, 5, 29, 1);
                                display: -webkit-box; /* 使用 WebKit 内核的浏览器 */
                                -webkit-line-clamp: 2; /* 显示的行数 */
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                            }
                            &-text{
                                font-size: 13px;
                                font-weight: 400;
                                line-height: 18px;
                                color: rgba(63, 51, 86, 1);
                                display: -webkit-box; /* 使用 WebKit 内核的浏览器 */
                                -webkit-line-clamp: 2; /* 显示的行数 */
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                            }
                        }
                    }
                }
            }
        }
    }
</style>