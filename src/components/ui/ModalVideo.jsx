
"use client";

import { Button, Modal } from "flowbite-react";

export function ModalVideo({url,openModal, setOpenModal}) {
  

  return (
    <>
      <Modal dismissible size="3xl" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body className="mx-auto">
          <div className="space-y-6">
          <iframe className="aspect-video  md:h-96"  src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
