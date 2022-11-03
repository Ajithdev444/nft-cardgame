import React from 'react'
import styles from '../styles'

const regex = /^[A-Za-z0-9]+$/;
const CustomInput = ({ placeholder, value, handleValueChanged, label }) => {
  return (
    <>
    <label htmlFor='name' className={styles.label}>{label}</label>
    <input
    type='text'
    placeholder={placeholder}
    value={value}
    onChange={(e) => {
        if(e.target.value === '' || regex.test(e.target.value)) 
        handleValueChanged(e.target.value)
    }}
    className={styles.input}
    >
    </input>
    </>
  )
}

export default CustomInput