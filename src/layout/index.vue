<script lang="ts" setup></script>

<template>
	<div class="w-full flex items-center justify-center flex-wrap gap-x-4 text-4xl p-2 mt-4">
		<div class="w-full flex items-center justify-center mb-4">
			<button>清除默认样式的按钮</button>
		</div>
		<div class="i-ph-anchor-simple-thin" />
		<!-- 来自 Phosphor 图标的基本锚点图标 -->
		<div class="i-ph-anchor-simple-thin" />
		<!-- 来自 Material Design Icons 的一个橙色闹钟 -->
		<div class="i-mdi-alarm text-orange-400" />
		<!-- 一个大尺寸的 Vue 标志 -->
		<div class="i-logos-vue text-3xl" />
		<!-- 太阳在亮模式，月亮在暗模式，来自 Carbon -->
		<button class="i-carbon-sun dark:i-carbon-moon" />
		<!-- Twemoji 笑脸，悬停时变成流泪表情 -->
		<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
		<div class="i-vscode-icons:file-type-light-pnpm" />
		<div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
		<span class="i-ic:baseline-16mp" />
		<span class="i-vscode-icons:file-type-java" />
	</div>
</template>

<style scoped></style>
