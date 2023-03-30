import React from 'react'
import styles from './Spin.module.css'

interface ISpinProps {
  children?: React.ReactNode
}

const Spin: React.FC<ISpinProps> = (props) => {
  return (
    <div className='animate-spin w-fit'>
      <div className='grid grid-cols-2 w-fit animate-pulse'>
        <div className={styles.spin_ball} role='status'></div>
        <div className={styles.spin_ball} role='status'></div>
        <div className={styles.spin_ball} role='status'></div>
        <div className={styles.spin_ball} role='status'></div>
      </div>
    </div>
  )
}

export default Spin
