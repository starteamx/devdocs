<script setup lang="ts">
const matrix = [
  { 
    scenario: 'AI 模型训练 / 深度学习', 
    primary: 'Python', 
    secondary: 'C++', 
    reason: '生态垄断 (PyTorch/TF)。' 
  },
  { 
    scenario: '高并发微服务 / 云原生', 
    primary: 'Go', 
    secondary: 'Java/Rust', 
    reason: 'GMP 模型，协程轻量，启动快。' 
  },
  { 
    scenario: '大型复杂企业业务 (DDD)', 
    primary: 'Java', 
    secondary: 'C#', 
    reason: '强类型与成熟的 Spring 生态保障可维护性。' 
  },
  { 
    scenario: '系统底层 / 驱动 / 嵌入式', 
    primary: 'C', 
    secondary: 'Rust', 
    reason: '操作系统母语；Rust 提供内存安全。' 
  },
  { 
    scenario: '高性能游戏引擎 (3A)', 
    primary: 'C++', 
    secondary: 'C# (Unity)', 
    reason: '对内存和硬件的极致控制。' 
  },
  { 
    scenario: 'Web 前端 / 全栈应用', 
    primary: 'TypeScript', 
    secondary: 'JavaScript', 
    reason: '类型系统是大型项目协作的刚需。' 
  },
];
</script>

<template>
  <div class="matrix-container">
    <div class="table-scroll">
      <table class="decision-table">
        <thead>
          <tr>
            <th width="25%">🎯 业务场景</th>
            <th width="15%">🥇 首选</th>
            <th width="15%">🥈 备选</th>
            <th>💡 核心技术依据</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in matrix" :key="idx">
            <td class="scenario">{{ row.scenario }}</td>
            <td class="primary-lang">{{ row.primary }}</td>
            <td class="secondary-lang">{{ row.secondary }}</td>
            <td class="reason">{{ row.reason }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.matrix-container {
  margin: 3rem auto;
  max-width: 960px;
}

.table-scroll {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.decision-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  margin: 0; 
  
  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }

  th {
    background: var(--bg-color-secondary);
    color: var(--theme-color);
    font-weight: 600;
    white-space: nowrap;
  }

  tr:nth-child(even) { 
    background: var(--bg-color-secondary); 
    opacity: 0.5; 
  }
  tr:hover { 
    background: var(--bg-color-secondary); 
  }

  .scenario { 
    font-weight: 600; 
  }
  .primary-lang { 
    color: var(--theme-color); 
    font-weight: bold; 
  }
  .secondary-lang { 
    color: var(--text-color-light); 
  }
  .reason { 
    font-size: 0.9rem; 
    color: var(--text-color-light); 
    line-height: 1.4; 
  }
}
</style>
