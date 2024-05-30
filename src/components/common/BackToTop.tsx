'use client';

import { ArrowUpIcon } from '@heroicons/react/16/solid';

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2 font-light text-sm animate-bounce z-20"
      onClick={handleBackToTop}
    >
      Back to top
      <ArrowUpIcon className="w-4 h-4" />
    </button>
  );
};

export default BackToTop;
