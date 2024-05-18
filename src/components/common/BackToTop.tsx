'use client';

import { Button } from '@nextui-org/react';

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button variant="light" className="text-white" onClick={handleBackToTop}>
      Back to top
    </Button>
  );
};

export default BackToTop;
