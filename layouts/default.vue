<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/normalize.css/normalize.css';
@font-face {
  font-family: 'JetBrains Mono';
  src: url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/eot/JetBrainsMono-Regular.eot')
      format('embedded-opentype'),
    url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff2/JetBrainsMono-Regular.woff2')
      format('woff2'),
    url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff/JetBrainsMono-Regular.woff')
      format('woff'),
    url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/ttf/JetBrainsMono-Regular.ttf')
      format('truetype');
  font-weight: normal;
  font-style: normal;
}

* {
  -webkit-font-feature-settings: 'liga' on, 'calt' on;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: 'JetBrains Mono';
}

html {
  font-family: monospace;
  font-size: 1.2em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  resize: none;
}
</style>
