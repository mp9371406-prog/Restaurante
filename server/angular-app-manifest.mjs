
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Restaurante/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Restaurante"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SOOCDEKK.js"
    ],
    "route": "/Program%20Files/Git/Restaurante/menu"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Restaurante",
    "route": "/Program%20Files/Git/Restaurante/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 869, hash: '4e874757fac6b81f2adb67499942b23e9977a0c4d62a92272dea5d5700e93ed8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1382, hash: 'df26d7be15e277f0c8b1e22cc0cd630c28a119f6218884e72113cd7c8e2be30f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
