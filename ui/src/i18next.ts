import * as i18n from 'i18next';
import { getLanguage } from './utils';
import { en } from './translations/en';
import { eo } from './translations/eo';
import { es } from './translations/es';
import { de } from './translations/de';
import { fr } from './translations/fr';
import { sv } from './translations/sv';
import { ru } from './translations/ru';
import { zh } from './translations/zh';
import { nl } from './translations/nl';

// https://github.com/nimbusec-oss/inferno-i18next/blob/master/tests/T.test.js#L66
// TODO don't forget to add moment locales for new languages.
const resources = {
  en,
  eo,
  es,
  de,
  zh,
  fr,
  sv,
  ru,
  nl,
}

function format(value: any, format: any, lng: any) {
	if (format === 'uppercase') return value.toUpperCase();
	return value;
}

i18n
.init({
  debug: true,
  // load: 'languageOnly',

  // initImmediate: false,
  lng: getLanguage(),
  fallbackLng: 'en',
	resources,
	interpolation: {
    format: format
    
  }
});

export { i18n, resources };
