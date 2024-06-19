'use client';

import { useEffect } from 'react';

import { Button, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react';

const LegalAlert = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  useEffect(() => {
    const alert = localStorage.getItem('alert');
    if (alert !== 'true') {
      onOpen();
    }
  }, []);

  const handleClose = () => {
    onClose();
    localStorage.setItem('alert', 'true');
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        isDismissable={false}
        isKeyboardDismissDisabled
        hideCloseButton
        shouldBlockScroll={false}
        classNames={{
          base: 'max-w-2xl bg-primary rounded-[48px] py-16 sm:py-20',
          body: 'flex flex-col items-center gap-8 text-off-white',
        }}
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody>
            <p className="text-6xl font-medium">Harmonix</p>
            <p className="w-4/5 sm:w-3/4 text-center text-lg font-light">
              Harmonix is not available in the US and other select countries. By entering this site
              you agree to the terms of use and the privacy policy.
            </p>
            <Button
              color="secondary"
              size="lg"
              className="text-primary rounded-full px-8"
              onClick={handleClose}
            >
              Enter
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LegalAlert;
