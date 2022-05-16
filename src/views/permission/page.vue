<script lang="ts" setup>
import { useRouter } from 'vue-router'
import SwitchRoles from './components/SwitchRoles.vue'

const router = useRouter()

const handleRolesChange = () => {
  router.push({ path: '/401' }).catch((err) => {
    console.warn(err)
  })
}
</script>

<template>
  <div class="app-container">
    <el-tag type="success" size="large" style="margin-bottom: 15px"> 111 当前页面只有 admin 权限可见 </el-tag>
    <hl-group gap="var(--sm)">
      <hl-button>默认</hl-button>
      <hl-button type="primary">首选</hl-button>
      <hl-button type="success">成功</hl-button>
      <hl-button type="warning">警告</hl-button>
      <hl-button type="danger">危险</hl-button>
      <hl-button type="info">信息</hl-button>
      <hl-button type="link">link</hl-button>
    </hl-group>
    <SwitchRoles @change="handleRolesChange" />
  </div>
</template>
