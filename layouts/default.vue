<template>
  <main id="app">
    <AppHeader />
    <div class="content">
      <slot />
    </div>
  </main>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ui-sans, sans-serif;
}

* {
  box-sizing: border-box;
}

.content {
  padding: 1rem 1.5rem;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}
</style>
