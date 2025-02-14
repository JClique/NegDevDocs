<script setup>
import DefaultTheme from 'vitepress/theme';
import {VPBadge} from 'vitepress/theme';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
	  <template #sidebar-nav-after>
		  <VPBadge
		    text="Version 0.01"
		  />
	  </template>
  </Layout>
</template>