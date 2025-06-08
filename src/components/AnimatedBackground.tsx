import React, { ReactNode } from 'react'

interface AnimatedBackgroundProps {
  children: ReactNode
  className?: string
  contentClassName?: string
  showNavPadding?: boolean
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  className = '', 
  contentClassName = '',
  showNavPadding = true 
}) => {
  return (
    <div className={`min-h-screen main-gradient-bg ${className}`}>
      <div className={`main-content-wrapper ${showNavPadding ? 'with-nav-padding' : 'no-nav-padding'} ${contentClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default AnimatedBackground
