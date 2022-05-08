import { useState } from 'react'

import styles from './Tab.module.scss'
import { cx } from '../../styles/index'

const INIT_TAB = ['감자', '고구마', '카레라이스']

function Tab() {
  const [selectedTab, setSelectedTab] = useState('감자')

  const clickTabHandler = (e) => {
    const { value } = e.currentTarget.dataset
    setSelectedTab(INIT_TAB[value])
  }

  return (
    <ul className={styles.tab}>
      {INIT_TAB.map((item, index) => {
        const key = `tabList-${index}`
        return (
          <li className={cx(styles.menu, { [styles.selected]: selectedTab === item })} key={key}>
            <button type='button' data-value={index} onClick={clickTabHandler}>
              {item}
            </button>
          </li>
        )
      })}
      <div
        className={styles.selectedTab}
        style={{
          transform: `translateX(${INIT_TAB.indexOf(selectedTab) * 100}%)`,
        }}
      />
    </ul>
  )
}

export default Tab
