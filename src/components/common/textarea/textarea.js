import React from 'react';
import styles from '@/styles/components/common/Textarea.module.css';

const Textarea = ({ name, placeholder, value, onChange, className, required }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className}
    required={required}
  ></textarea>
);

export default Textarea;