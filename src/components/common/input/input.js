import React from 'react';
import styles from '@/styles/components/common/Input.module.css';

const Input = ({ type, name, placeholder, value, onChange, className, required }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className}
    required={required}
  />
);

export default Input;
