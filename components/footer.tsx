'use client';

import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

export default function Footer() {
  const intl = useIntl();
  const year = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center">
      <p className="text-xs text-gray-400 dark:text-gray-600">
        &copy; {year} Mouhcine Soukaki &mdash;{' '}
        {intl.formatMessage({ id: TranslationKeys.FOOTER_TEXT })}
      </p>
    </footer>
  );
}
