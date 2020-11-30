import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

import { Customer } from 'services/localStorage'
import FormContent from 'components/elements/FormContent/FormContent'

type ModalPopupProps = {
  show: boolean
  setShow: (show: boolean) => void
  customer: Customer
}

export default function ModalPopup({ show, setShow, customer }: ModalPopupProps) {
  const handleClose = () => setShow(false)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{customer.name !== '' ? customer.name : 'Create new customer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContent customer={customer} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}
