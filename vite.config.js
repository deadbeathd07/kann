import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/kann/',
	define: {
		__VUE_I18N_FULL_INSTALL__: true,
		__VUE_I18N_LEGACY_API__: false,
		__INTLIFY_PROD_DEVTOOLS__: false,
	},
	plugins: [vue(), vueJsx()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "./src/assets/styles/colors.scss";
        `,
			},
		},
	},
});
