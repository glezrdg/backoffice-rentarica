import React from 'react'

// css
import './styles.css'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  color?: 'primary' | 'success' | 'warning' | 'info' | 'danger'
  type?: 'fill' | 'outline'
  rounded?: boolean
  text?: string
  icon?: string
  iconButton?: boolean
}

const Button: React.FC<IButtonProps> = ({
  color = 'primary',
  type = 'fill',
  className,
  rounded,
  icon,
  iconButton,
  text,
}) => {
  // Function that returns a class dependind on props
  const showClases = () => {
    let classText = ''

    if (iconButton) classText += ' p-2'
    if (rounded || iconButton) classText += ' rounded-full'
    if (icon) classText += ' flex items-center'

    return classText
  }

  return (
    <button
      data-te-ripple-init
      data-te-ripple-color={type === 'fill' ? 'light' : 'dark'}
      className={`btn ${type} ${color} ${className} ${showClases()}`}
    >
      {icon && <i className={`h-4 w-4 ${icon} ${text && 'mr-1 '}`} />}
      {text}
    </button>
  )
}

export default Button
