<template>
  <view id="app">
    <!-- 应用根组件 -->
  </view>
</template>

<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('DualViewX App Launch')
})

onShow(() => {
  console.log('DualViewX App Show')
})

onHide(() => {
  console.log('DualViewX App Hide')
})
</script>

<style>
/* 全局样式 */
page {
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

/* 通用样式 */
.container {
  padding: 40rpx;
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.text-center {
  text-align: center;
}

.text-primary {
  color: #667eea;
}

.text-success {
  color: #52c41a;
}

.text-warning {
  color: #faad14;
}

.text-error {
  color: #ff4d4f;
}

.bg-primary {
  background-color: #667eea;
}

.bg-success {
  background-color: #52c41a;
}

.bg-warning {
  background-color: #faad14;
}

.bg-error {
  background-color: #ff4d4f;
}

/* 按钮样式 */
.btn {
  padding: 20rpx 40rpx;
  border-radius: 12rpx;
  font-size: 28rpx;
  font-weight: 500;
  text-align: center;
  border: none;
  outline: none;
}

.btn-primary {
  background-color: #667eea;
  color: white;
}

.btn-success {
  background-color: #52c41a;
  color: white;
}

.btn-warning {
  background-color: #faad14;
  color: white;
}

.btn-error {
  background-color: #ff4d4f;
  color: white;
}

.btn::after {
  border: none;
}

/* 卡片样式 */
.card {
  background: white;
  border-radius: 20rpx;
  padding: 40rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
  margin-bottom: 30rpx;
}

/* 输入框样式 */
.input {
  padding: 20rpx;
  border: 1rpx solid #d9d9d9;
  border-radius: 12rpx;
  font-size: 28rpx;
  background: white;
}

.input:focus {
  border-color: #667eea;
}

/* 列表样式 */
.list-item {
  display: flex;
  align-items: center;
  padding: 30rpx 40rpx;
  border-bottom: 1rpx solid #f0f0f0;
}

.list-item:last-child {
  border-bottom: none;
}

/* 标签样式 */
.tag {
  display: inline-block;
  padding: 8rpx 16rpx;
  border-radius: 12rpx;
  font-size: 22rpx;
  background: #f0f0f0;
  color: #666;
}

.tag-primary {
  background: #e6f7ff;
  color: #1890ff;
}

.tag-success {
  background: #f6ffed;
  color: #52c41a;
}

.tag-warning {
  background: #fffbe6;
  color: #faad14;
}

.tag-error {
  background: #fff2f0;
  color: #ff4d4f;
}
</style>
