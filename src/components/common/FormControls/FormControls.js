import React from 'react';
import styles from './FormsControls.module.css';


export const Textarea = ({input,meta,...props}) =>{
    return(
        <div className={styles.formControl + ' ' + styles.error}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>

    )
}
export const Input = ({input,meta,...props}) =>{
    return(
        <div className={styles.formInputControl + ' ' + styles.error}>
                <input {...input} {...props}/>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>

    )
}