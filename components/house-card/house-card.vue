<template>
    <view 
    class="house-card" 
    :style="style">
        <view class="house-card__facility">
            <i v-for="(item, i) in props.data.facility" :key="i" :class="item.icon"></i>
        </view>
        <view class="house-card__star tip">
            <text>{{props.data.star}}</text>
            <i class="uicon uicon-star-fill"></i>
        </view>
        <view class="house-card__tip tip">
            {{props.data.tip}}
        </view>
        <view class="house-card__title">
            {{props.data.title}}
        </view>
     </view>
</template>

<script setup>
import { computed } from 'vue';
    const props = defineProps({
        data: {
            type: Object,
            default: {}
        }
    })
    const style = computed(() => `background: ${props.data.linearGradient}, url("${props.data.bg}"); background-size: 100%`)
</script>

<style lang="scss" scoped>
    .tip{
        padding: 4px 10px;
        font-size: 14px;
        &:before{
            content: "";
            position: absolute;
            height: 100%;
            left: 0;
            right: 0;
            top: 0;
            border-radius: 6px;
            background: #fff;
            opacity: 0.2;
        }
    }
    .house-card{
        width: 280px;
        height: 180px;
        opacity: 1;
        border-radius: 16px;
        background-blend-mode: normal;
        position: relative;
        color: #fff;
        &__title{
            position: absolute;
            position: absolute;
            bottom: 16px;
            left: 12px;
            font-size: 20px;
        }
        &__tip{
            position: absolute;
            bottom: 16px;
            left: 60px;
        }
        &__star{
            position: absolute;
            top: 12px;
            right: 12px;
            display: flex;
            align-items: center;
            padding: 4px 6px 4px 10px;
            .uicon-star-fill{
                margin-left: 4px;
            }
        }
        &__facility{
            position: absolute;
            top: 15px;
            left: 12px;
            display: flex;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 170px;
            .yjy-icon{
                margin-left: 6px;
                font-size: 18px;
            }
        }
    }
</style> 
