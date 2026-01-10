<script setup lang="ts">
import { languageData } from "../../data/languages.js";

// Base 路径，与 config.ts 中的 base 配置保持一致
const BASE = "/devdocs/";
</script>

<template>
  <div id="top-12" class="custom-container">
    
    <div class="section-title">
      <h2>🏆 TIOBE 热门编程语言 Top 12</h2>
      <p>实时追踪全球技术趋势，掌握核心生产力工具</p>
    </div>

    <div class="lang-grid">
      <a
        v-for="lang in languageData" 
        :key="lang.id" 
        :href="`${BASE}${lang.id}/`"
        class="lang-card"
      >
        
        <div class="rank-badge" :class="'rank-' + lang.rank">
          #{{ lang.rank }}
        </div>

        <div class="card-header">
          <div class="icon-box">
            <i :class="lang.icon"></i>
          </div>
          <div class="title-box">
            <h3>{{ lang.name }}</h3>
          </div>
        </div>

        <p class="desc">{{ lang.description }}</p>

        <div class="action-row" @click.stop>
          <a :href="lang.links.manual" target="_blank" class="btn primary">
            <i class="fa-solid fa-book"></i> 文档
          </a>
          <a :href="lang.links.tutorial" target="_blank" class="btn secondary">
            <i class="fa-solid fa-graduation-cap"></i> 教程
          </a>
          <a :href="lang.links.web" target="_blank" class="btn outline">
            <i class="fa-solid fa-globe"></i> 官网
          </a>
        </div>

      </a>
    </div>
  </div>
</template>

<style scoped>
/* 样式部分 */
:root {
  --card-bg: var(--bg-color-secondary);
  --rank-gold: #FFD700;
  --rank-silver: #C0C0C0;
  --rank-bronze: #CD7F32;
  --rank-norm: var(--theme-color-light);
}

.custom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}
.section-title h2 { 
  border-bottom: none; 
  margin-bottom: 0.5rem; 
  font-size: 2rem;
}
.section-title p { 
  color: var(--text-color-light); 
}

.lang-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.lang-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none !important;
  display: block;
  color: inherit;
}

.lang-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
  border-color: var(--theme-color);
}

/* 🏆 排名角标设计 */
.rank-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--rank-norm);
  color: #fff;
  font-weight: bold;
  padding: 5px 15px;
  border-bottom-left-radius: 12px;
  font-size: 1.1rem;
  font-family: 'Impact', sans-serif;
  opacity: 0.9;
}

/* 前三名给特殊颜色 */
.rank-1 { 
  background: var(--rank-gold); 
  color: #000; 
  box-shadow: 0 0 10px var(--rank-gold); 
}
.rank-2 { 
  background: var(--rank-silver); 
  color: #000; 
}
.rank-3 { 
  background: var(--rank-bronze); 
  color: #000; 
}

.card-header { 
  display: flex; 
  align-items: center; 
  margin-bottom: 1rem; 
  margin-top: 0.5rem;
}
.icon-box { 
  font-size: 2.5rem; 
  margin-right: 1rem; 
  color: var(--theme-color); 
  min-width: 40px; 
  text-align: center;
}
.title-box h3 { 
  margin: 0; 
  font-size: 1.5rem; 
  border: none; 
}

.desc {
  font-size: 0.9rem;
  color: var(--text-color-light);
  margin-bottom: 1.5rem;
  height: 2.8rem;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.action-row {
  display: flex;
  gap: 10px;
}

.btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  border-radius: 8px;
  text-decoration: none !important;
  font-size: 0.9rem;
  transition: all 0.2s;
  gap: 6px;
  font-weight: 500;
}

.btn.primary { 
  background: var(--theme-color); 
  color: white !important; 
}
.btn.primary:hover { 
  opacity: 0.9; 
}

.btn.secondary { 
  background: var(--bg-color); 
  color: var(--text-color) !important; 
  border: 1px solid var(--border-color); 
}
.btn.secondary:hover { 
  background: var(--code-bg-color); 
}

.btn.outline { 
  border: 1px dashed var(--border-color); 
  color: var(--text-color-light) !important; 
}
.btn.outline:hover { 
  color: var(--theme-color) !important; 
  border-color: var(--theme-color); 
  background: rgba(0,0,0,0.02); 
}
</style>
