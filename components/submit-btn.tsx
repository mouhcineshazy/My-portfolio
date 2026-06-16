'use client';

import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const intl = useIntl();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-7 py-3 rounded-full font-medium text-sm hover:scale-[1.03] active:scale-[0.98] focus:scale-[1.03] focus:outline-none transition-transform duration-150 shadow-sm disabled:opacity-60 disabled:scale-100"
    >
      {pending ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {intl.formatMessage({ id: TranslationKeys.CONTACT_SUBMIT })}
          <FaPaperPlane className="text-xs opacity-70" />
        </>
      )}
    </button>
  );
}
