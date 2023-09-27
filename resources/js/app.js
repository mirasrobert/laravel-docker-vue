require('./bootstrap');

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

import MainLayout from './Layouts/MainLayout.vue'

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`)
    page.default.layout = page.default.layout || MainLayout

    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
