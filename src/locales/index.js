import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18n = createI18n({
	locale: 'fr',
	fallbackLocale: 'fr',
	messages: messages,
});

export default i18n;
