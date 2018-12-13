import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _11a5e0e1 = () => import('..\\pages\\team\\index.vue' /* webpackChunkName: "pages_team_index" */).then(m => m.default || m)
const _242bf3d4 = () => import('..\\pages\\recursos\\index.vue' /* webpackChunkName: "pages_recursos_index" */).then(m => m.default || m)
const _56541661 = () => import('..\\pages\\politica-de-privacidad\\index.vue' /* webpackChunkName: "pages_politica-de-privacidad_index" */).then(m => m.default || m)
const _15befcf2 = () => import('..\\pages\\analisis\\index.vue' /* webpackChunkName: "pages_analisis_index" */).then(m => m.default || m)
const _97423054 = () => import('..\\pages\\susc.vue' /* webpackChunkName: "pages_susc" */).then(m => m.default || m)
const _977978bc = () => import('..\\pages\\recursos\\observatorio-de-twits-en-politica-de-drogas\\index.vue' /* webpackChunkName: "pages_recursos_observatorio-de-twits-en-politica-de-drogas_index" */).then(m => m.default || m)
const _65c690bc = () => import('..\\pages\\recursos\\enlaces-de-interes\\index.vue' /* webpackChunkName: "pages_recursos_enlaces-de-interes_index" */).then(m => m.default || m)
const _0b644b39 = () => import('..\\pages\\recursos\\observatorio-de-articulos-cientificos\\index.vue' /* webpackChunkName: "pages_recursos_observatorio-de-articulos-cientificos_index" */).then(m => m.default || m)
const _2387d1de = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/team",
			component: _11a5e0e1,
			name: "team"
		},
		{
			path: "/recursos",
			component: _242bf3d4,
			name: "recursos"
		},
		{
			path: "/politica-de-privacidad",
			component: _56541661,
			name: "politica-de-privacidad"
		},
		{
			path: "/analisis",
			component: _15befcf2,
			name: "analisis"
		},
		{
			path: "/susc",
			component: _97423054,
			name: "susc"
		},
		{
			path: "/recursos/observatorio-de-twits-en-politica-de-drogas",
			component: _977978bc,
			name: "recursos-observatorio-de-twits-en-politica-de-drogas"
		},
		{
			path: "/recursos/enlaces-de-interes",
			component: _65c690bc,
			name: "recursos-enlaces-de-interes"
		},
		{
			path: "/recursos/observatorio-de-articulos-cientificos",
			component: _0b644b39,
			name: "recursos-observatorio-de-articulos-cientificos"
		},
		{
			path: "/",
			component: _2387d1de,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
