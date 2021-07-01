<template>
	<header>
		<div class="container">
			<b-navbar>
				<template #brand>
					<b-navbar-item tag="router-link" :to="{ path: '/' }">
					<img src="../assets/img/logo.svg" alt="Comptalib logo">
					</b-navbar-item>
				</template> 
				<template #start>
					<b-navbar-item tag="router-link" :to="{ path: '/' }" >
					Home
					</b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/about' }" >
					About
					</b-navbar-item>
				</template>
				<template #end>
					<b-navbar-item tag="div">
					<div class="buttons">
						<a class="button is-primary">
						<strong>Sign up</strong>
						</a>
						<a class="button is-light">
						Log in
						</a>
					</div>
					</b-navbar-item>
				</template>
			</b-navbar>  
		</div>
	</header>
</template>
<style lang='scss' scoped>
	@import '../assets/scss/button';
	@import '../assets/scss/nav';
</style>