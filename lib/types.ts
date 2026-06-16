import { links } from './data';
import type { TranslationKeys } from '@/lang/constants';

export type SectionName = (typeof links)[number]['name'];

export type ProjectData = {
  titleKey: TranslationKeys;
  descriptionKey: TranslationKeys;
  tags: readonly string[];
  imageUrl: string;
  url?: string;
};
