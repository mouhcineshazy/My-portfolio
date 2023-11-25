import { Langs } from './constants';
import { en } from './en';
import { fr } from './fr';

export const defaultLanguage = 'en';

export type SupportedLocales = Langs.ENGLISH | Langs.FRENCH;

export const locales: Record<string, Record<string, string>> = {
  en,
  fr,
};
