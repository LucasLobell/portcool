'use client';

import React, { useState } from 'react'
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';

const CpButton = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText('lucaslobell2@gmail.com');
  
      setCopied(true);
    }

  return (
    <MagicButton 
    title={copied ? 'Email copied' : 'Copy my email'}
    icon={<IoCopyOutline />}
    position="left"
    handleClick={handleCopy}
    otherClasses='w-50 h-10'
    />
  )
}

export default CpButton