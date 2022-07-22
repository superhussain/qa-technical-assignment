<template>
  <header>
    <NuxtLink to="/">
      <img
        src="https://uploads-ssl.webflow.com/62cc826b4348eb1bf477e2ec/62cc826b4348eb091c77e310_full%20logo-dark-full%20bleed.svg"
        alt="Squaredance Logo"
      />
    </NuxtLink>

    <div>
      <Notifications />
      <OrgSwitcher />
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
}
</style>
