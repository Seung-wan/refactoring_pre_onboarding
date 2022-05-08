import styles from './Toggle.module.scss'

function Toggle() {
  return (
    <div>
      <label className={styles.toggle}>
        <input type='checkbox' />
        <span className={styles.toggleSlider} />
        <div className={styles.item1}>기본</div>
        <div className={styles.item2}>상세</div>
      </label>
    </div>
  )
}

export default Toggle
