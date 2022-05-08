import { useState } from 'react'
import styles from './Slider.module.scss'
import { cx } from '../../styles/index'

function Slider() {
  const [result, setResult] = useState(1)
  const [toggle, setToggle] = useState(false)
  const rangeValues = [1, 25, 50, 75, 100]

  const onChangeInputRange = (e) => {
    setResult(e.currentTarget.value)
    setToggle(false)
  }

  const onClickProgressPoint = (e) => {
    setResult(e.currentTarget.value)
    setToggle(true)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Slider</div>
      <div className={styles.interfaceContainer}>
        <span className={styles.interfaceContent}>{result}</span>
        <span className={styles.interfacePercent}>%</span>
      </div>

      <div className={styles.slideContainer}>
        <div className={styles.fillLower} style={{ width: `${result}%` }} />
        <input
          type='range'
          name='points'
          min='1'
          max='100'
          step='1'
          list='progressPoint'
          value={result}
          defaultValue='1'
          className={styles.slider}
          onChange={onChangeInputRange}
        />
        <div className={styles.slideMarks}>
          {rangeValues.map((value, index) => {
            const key = `range-${index}`
            return <div key={key} className={cx(styles.slideMark, { [styles.selected]: result >= value })} />
          })}
        </div>
      </div>

      {/* 버튼을 조작하는 부분 */}
      <div className={styles.buttonContainer}>
        <datalist id='progressPoint'>
          {rangeValues.map((value, index) => {
            const key = `progress-${index}`
            return (
              <option
                key={key}
                value={value}
                label={`${value}%`}
                className={cx({ [styles.selected]: toggle && result === value })}
                onClick={onClickProgressPoint}
              />
            )
          })}
        </datalist>
      </div>
    </div>
  )
}

export default Slider
