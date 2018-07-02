import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AriaModal from 'react-aria-modal'

import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalHeaderCloseButton,
  underlayStyle,
} from './styles'


function getApplicationNode() {
  return document.getElementById('root')
}


let nextId = 0

function getId() {
  const id = `${nextId}`
  nextId += 1
  return id
}


export class InfoModal extends Component {
  static propTypes = {
    children: PropTypes.node,
    onRequestClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    children: undefined,
  }

  id = getId()

  withIdPrefix(str) {
    return `modal-${this.id}-${str}`
  }

  render() {
    const {
      children,
      onRequestClose,
      title,
    } = this.props

    return (
      <AriaModal
        getApplicationNode={getApplicationNode}
        initialFocus={`#${this.withIdPrefix('close')}`}
        onExit={onRequestClose}
        titleId={this.withIdPrefix('title')}
        underlayStyle={underlayStyle}
      >
        <ModalContent>
          <ModalHeader>
            <h2 id={this.withIdPrefix('title')}>{title}</h2>
            <ModalHeaderCloseButton
              aria-label="Close"
              onClick={onRequestClose}
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </ModalHeaderCloseButton>
          </ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <button
              id={this.withIdPrefix('close')}
              onClick={onRequestClose}
              type="button"
            >
              Ok
            </button>
          </ModalFooter>
        </ModalContent>
      </AriaModal>
    )
  }
}
