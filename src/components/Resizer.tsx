import React from 'react';
import { ResizerProps } from '@/types';

const Resizer: React.FC<ResizerProps> = ({ onResize }) => (
  <input
    type="range"
    min="0.5"
    max="2"
    step="0.1"
    defaultValue="1"
    onChange={(e) => onResize(parseFloat(e.target.value))}
  />
);

export default Resizer;