<template>
  <div class="test-component">
    <h3>🎉 测试组件已成功加载！</h3>
    <p>如果你能看到这段文字，说明组件自动注册功能正常工作。</p>
    <p>当前时间：{{ currentTime }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTime = ref('')

onMounted(() => {
  currentTime.value = new Date().toLocaleString('zh-CN')
})
</script>

<style scoped>
.test-component {
  padding: 20px;
  margin: 20px 0;
  border: 2px solid #42b983;
  border-radius: 8px;
  background-color: #f0f9ff;
  text-align: center;
}

.test-component h3 {
  color: #42b983;
  margin: 0 0 10px 0;
}

.test-component p {
  margin: 5px 0;
  color: #666;
}
</style>
