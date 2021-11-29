import React from 'react'

import PropsTypes from 'prop-types'

import { ContainerButton } from './styles'

const Button = ({ children, ...rest }) => {
  return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default Button

Button.propTypes = {
  children: PropsTypes.string
}
