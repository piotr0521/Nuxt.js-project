<template>
	<div class="page">
		<SiteHeader/>
		<Nuxt/>
		<SiteFooter/>
	</div>
</template>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.page {
	position: relative;
	overflow: hidden;
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-template-columns: 100%;
	min-height: 100vh;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 800px;
		z-index: -2;
		background: $body-gradient;
	}
}
</style>
