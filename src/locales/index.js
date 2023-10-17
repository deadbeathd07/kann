import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18n = createI18n({
	locale: localStorage.lang ? localStorage.lang : 'fr',
	fallbackLocale: 'fr',
	messages: messages,
});
