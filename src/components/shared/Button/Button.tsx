import React from 'react'

// css
import './styles.css'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  color?: 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'white'
  type?: 'fill' | 'outline'
  buttonType?: 'submit' | 'button'
  rounded?: boolean
  text?: string
  tooltip?: string
  icon?: string
  iconButton?: boolean
  disabled?: boolean
  onClick?: (e: any) => void
}

const Button: React.FC<IButtonProps> = ({
  color = 'primary',
  disabled = false,
  type = 'fill',
  className,
  rounded,
  icon,
  iconButton,
  text,
  tooltip,
  onClick,
  buttonType,
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
      className={`group btn ${type} ${color} ${className} ${showClases()}`}
      onClick={(e) => onClick && onClick(e)}
      type={buttonType}
      disabled={disabled}
    >
      {icon && <i className={`h-4 w-4 ${icon} ${text && 'mr-1 '}`} />}
      {text}
      {tooltip && (
        <div className='group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-8 mb-6 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100'>
          <div className='flex max-w-xs flex-col items-center'>
            <div className='rounded bg-gray-900 p-2 text-xs text-center shadow-lg'>
              {tooltip}
            </div>
            <div className='clip-bottom h-2 w-4 bg-gray-900'></div>
          </div>
        </div>
      )}
    </button>
  )
}

export default Button
