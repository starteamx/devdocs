<script setup lang="ts">
import { computed } from 'vue';
import { languageData } from "../../data/languages.js";

// Base 路径，与 config.ts 中的 base 配置保持一致
const BASE = "/devdocs/";

// 按排名排序
const sortedLanguages = computed(() => {
  return [...languageData].sort((a, b) => a.rank - b.rank);
});
</script>

<template>
  <div class="lang-list-container">
    <div class="list-wrapper">
      <a
        v-for="lang in sortedLanguages" 
        :key="lang.id" 
        :href="`${BASE}lang/${lang.id}/`"
        class="lang-row"
      >
        <div class="lang-info">
          <span class="rank" :class="`rank-${lang.rank <= 3 ? lang.rank : 'norm'}`">
            #{{ lang.rank }}
          </span>
          <div class="icon-box">
            <i :class="lang.icon"></i>
          </div>
          <div class="text-box">
            <h3>{{ lang.name }}</h3>
            <p>{{ lang.description }}</p>
          </div>
        </div>

        <div class="lang-actions" @click.stop>
          <a :href="`${BASE}lang/${lang.id}/`" class="btn primary">
            <i class="fa-solid fa-book-open"></i> 指南
          </a>
          <a :href="lang.links.tutorial" target="_blank" class="btn secondary">
            <i class="fa-solid fa-graduation-cap"></i> 教程
          </a>
          <a :href="lang.links.web" target="_blank" class="btn text-link">
            <i class="fa-solid fa-link"></i> 官网
          </a>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang-list-container {
  max-width: 960px;
  margin: 0 auto;
}

.list-wrapper {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-color);
}

.lang-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s, transform 0.2s;
  background: var(--code-bg-color, #f6f8fa);
  text-decoration: none !important;
  color: inherit;
  cursor: pointer;

  &:last-child { 
    border-bottom: none; 
  }
  &:hover { 
    background: var(--bg-color-secondary, #f0f0f0); 
    transform: translateX(4px);
  }
}

.lang-info {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex: 1;

  .rank {
    font-family: 'Impact', sans-serif;
    font-size: 1.2rem;
    color: var(--text-color-light);
    min-width: 30px;
    
    &.rank-1 { 
      color: #FFD700; 
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.3); 
    }
    &.rank-2 { 
      color: #C0C0C0; 
    }
    &.rank-3 { 
      color: #CD7F32; 
    }
  }

  .icon-box {
    font-size: 2rem;
    color: var(--theme-color);
    width: 40px;
    text-align: center;
  }

  .text-box {
    h3 { 
      margin: 0; 
      font-size: 1.1rem; 
      border: none; 
    }
    p { 
      margin: 0; 
      font-size: 0.85rem; 
      color: var(--text-color-light); 
    }
  }
}

.lang-actions {
  display: flex;
  gap: 10px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none !important;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;

  &.primary {
    background: var(--bg-color-secondary);
    color: var(--text-color) !important;
    border: 1px solid var(--theme-color);
    &:hover { 
      background: var(--theme-color);
      color: var(--text-color) !important;
      transform: translateY(-1px); 
      box-shadow: 0 2px 8px rgba(var(--theme-color-rgb, 64, 158, 255), 0.3);
    }
  }

  &.secondary {
    background: var(--bg-color-secondary);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    &:hover { 
      border-color: var(--theme-color); 
    }
  }
  
  &.text-link {
    color: var(--text-color-light);
    &:hover { 
      color: var(--theme-color); 
    }
  }
}

@media (max-width: 768px) {
  .lang-row { 
    flex-direction: column; 
    align-items: flex-start; 
    gap: 1rem; 
  }
  .lang-actions { 
    width: 100%; 
    justify-content: space-between; 
    margin-left: 3rem; 
  }
  .btn { 
    flex: 1; 
    justify-content: center; 
  }
}
</style>
