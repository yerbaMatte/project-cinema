import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

export function ModalMovieDetails() {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{movie.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>TEXT</ModalBody>

          <ModalFooter>
            <Link to='.'>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </Link>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
