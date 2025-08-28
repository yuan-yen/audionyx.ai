import React, { Component } from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

class Button extends Component<ButtonProps> {
  handleClick = () => {
    const { href, onClick, external } = this.props;
    
    if (onClick) {
      onClick();
    }
    
    if (href) {
      if (external) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    }
  };

  render() {
    const { variant = 'primary', children, className = '' } = this.props;
    
    return (
      <button 
        className={`btn btn-${variant} ${className}`}
        onClick={this.handleClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;