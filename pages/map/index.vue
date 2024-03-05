<template >
    <view class="page-map">
        <view class="page-map__location" :style="'top: '+(statusHeight+50)+'px;'">
            <view class="page-map__location-icons">
                <image style="width: 18px; height: 18px;" src="/static/icon/map/Path.png" mode=""></image>
                <view class="line"></view>
                <image style="width: 20px; height: 20px;" src="/static/icon/map/destination.png" mode=""></image>
            </view>
            <view class="page-map__location-inputs">
                <input type="text" value="你的位置" />
                <input type="text" />
            </view>
            <view class="page-map__location-menus">
                <i class="yjy-icon yjy-icon-luxian"></i>
            </view>
        </view>
        <view class="page-map__content">
            <map 
                style="width: 100%; height: 100%;" 
                show-location
                show-compass
                :enable-poi="false"
                :scale="scale"
                :latitude="latitude" 
                :longitude="longitude"
                :markers="covers"
                @tap="mapTap">
                <template #callout>
                    <cover-view marker-id="1">1231231
                        <view class="callout-view">
                            <i class="uicon uicon-arrow-down-fill"></i>
                            <view class="callout-view__content">
                                <view class="callout-view__content-title">
                                    <text>云间月民宿</text>
                                    <view class="detail">
                                        详情 <i class="uicon uicon-arrow-right"></i>
                                    </view>
                                </view>
                                <image class="callout-view__content-image" :src="mixing.bg" mode=""></image>
                            </view>
                        </view>
                    </cover-view>
                </template>
            </map>
            
            <view class="page-map__content-controls">
                <view class="page-map__content-controls-items">
                    <view :class="{'active': activeTypeIndex == i}" v-for="(icon, i) in types" :key="i" @click="activeTypeIndex = i">
                        <i class="yjy-icon" :class="icon"></i>
                    </view>
                    <view class="active-bg" :style="'top: '+ ((activeTypeIndex*50)+10) +'px'">
                        
                    </view>
                </view>
                <i class="yjy-icon yjy-icon-a-dingwei2"></i>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref, getCurrentInstance, onMounted } from 'vue';
    import { onShow } from "@dcloudio/uni-app"
    import mixing from "@/mock/house/mixing.js"
    onShow((e) => {
        const that = getCurrentInstance().ctx
       if (typeof that.$scope.getTabBar === 'function' && that.$scope.getTabBar()) {
         that.$scope.getTabBar().setData({
           selected: 1
         })
       }
    })
    const scale = ref(17)
    const longitude = ref("117.9894198697375")
    const latitude = ref("30.002691814212554")
    let statusHeight = uni.getSystemInfoSync().statusBarHeight
    const covers = ref([ 
        {
            id: 1,
            latitude: 30.002982147610968,
            longitude: 117.99075213624224,
            // iconPath: '/static/icon/map/destination.png',
            alpha: 0,
            width: 0,
            height: 0,
            customCallout: {
                display: "ALWAYS",
                anchorY: 15,
                anchorX: '-50%',
            }
        }
    ])
    const activeTypeIndex = ref(0)
    const types = [
        "yjy-icon-shoucang", "yjy-icon-jingdian", "yjy-icon-meishi", "yjy-icon-yinpin"
    ]
    
    const mapTap = (e) => {
        console.log(e,'mapTap');
    }
    
    const setLocation = () => {
        uni.getLocation({
            type: 'gcj02',
            success: r => {
                uni.showToast({
                    icon: "none",
                    title: r
                })
                console.log(r,'rrr');
                // this.locationOptions = {
                //     latitude: r.latitude,
                //     longitude: r.longitude
                // }
                // this.userForm.location = `${r.longitude},${r.latitude}`
            }
        })
    }
    
    onMounted(() => {
        setLocation()
    })
</script>

<style>
    page{
        height: 100%;
    }
</style>
<style lang="scss" scoped>
    .page-map{
        height: 100%;
        position: relative;
        &__location{
            width: 343px;
            height: 106px;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(13.59px);
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99;
            display: flex;
            align-items: center;
            &-icons{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 10px;
                .line{
                    height: 10px;
                    border-left: 1px dashed #ccc;
                    margin: 8px 0;
                }
            }
            &-inputs{
                width: 72%;
                input:first-child{
                    border-bottom: 1px dashed #ccc;
                    margin-bottom: 12px;
                    padding-bottom: 12px;
                    color: rgba(105, 121, 248, 1);
                }
            }
            &-menus{
                .yjy-icon-luxian{
                    width: 36px;
                    height: 36px;
                    line-height: 36px;
                    text-align: center;
                    background-color: rgba(105, 121, 248, 1);
                    border-radius: 50%;
                    color: #fff;
                }
            }
        }
        &__content{
            height: calc(100% - 38px);
            position: relative;
            &-controls{
                position: absolute;
                right: 20px;
                bottom: 50px;
                
                .yjy-icon-a-dingwei2{
                    width: 48px;
                    height: 48px;
                    line-height: 48px;
                    font-size: 24px;
                    text-align: center;
                    background-color: rgba(105, 121, 248, 1);
                    border-radius: 16px;
                    color: #fff;
                }
                
                &-items{
                    width: 100%;
                    box-sizing: border-box;
                    opacity: 1;
                    border-radius: 25px;
                    background: rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(13.59px);
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 8px;
                    position: relative;
                    .yjy-icon{
                        font-size: 44rpx;
                        color: #aaa;
                        border-radius: 25px;
                        margin-bottom: 8px;
                    }
                    .active{
                        .yjy-icon{
                            color: #fff;
                        }
                        .yjy-icon-shoucang{
                            color: #fecc66;
                        }
                    }
                    &>view{
                        z-index: 2;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .active-bg{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background-color: rgba(105, 121, 248, 1);
                        position: absolute;
                        transition: top .3s;
                        z-index: 1;
                    }
                }
            }
            .callout-view{
                position: relative;
                &__content{
                    margin-bottom: 20px;
                    background-color: rgba(105, 121, 248, 1);
                    border-radius: 10px;
                    padding: 10px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &-title{
                        width: 100%;
                        color: #fff;
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: space-between;
                        .detail{
                            font-size: 13px;
                            display: flex;
                            align-items: center;
                            color: #ffffff;
                            .uicon{
                                font-size: 13px;
                                margin-left: 4px;
                            }
                        }
                    }
                    &-image{
                        height: 100px;
                        width: 160px;
                    }
                }
                .uicon-arrow-down-fill{
                    position: absolute;
                    bottom: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: rgba(105, 121, 248, 1);
                }
            }
        }
    }
</style>