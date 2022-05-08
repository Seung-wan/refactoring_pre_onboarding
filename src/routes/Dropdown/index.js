import { useState, useEffect, useRef } from 'react'
import styles from './Dropdown.module.scss'
import { cx } from '../../styles/index'

const INIT_DATA = ['All Symbols', 'BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP']

function Dropdown() {
  const [symbol, setSymbol] = useState('')
  const [symbolList, setSymbolList] = useState(INIT_DATA)
  const [selectedSymbol, setSelectedSymbol] = useState('All Symbols')
  const [showSymbolList, setShowSymbolList] = useState(false)
  const ref = useRef()

  const handleChangeSymbol = (evt) => {
    const { value } = evt.currentTarget
    setSymbol(value)

    if (value.length === 0) setSymbolList(INIT_DATA)
    else setSymbolList(INIT_DATA.filter((item) => item.toLowerCase().includes(value.toLowerCase())))
  }

  const handleClickDropdown = () => {
    setShowSymbolList((prevState) => !prevState)
  }

  const handleClickSymbol = (evt) => {
    const { item } = evt.currentTarget.dataset

    setSelectedSymbol(item)
    setShowSymbolList((prevState) => !prevState)
  }

  useEffect(() => {
    document.body.addEventListener('click', (evt) => {
      if (ref.current.contains(evt.target)) {
        return 0
      }
      setShowSymbolList(false)
      return 1
    })
  })

  return (
    <div className={styles.dropdownContainer} ref={ref}>
      <button type='button' className={styles.dropdown} onClick={handleClickDropdown}>
        <div>{selectedSymbol}</div>
        <span className='fa-solid fa-caret-down' />
      </button>
      {showSymbolList && (
        <ul className={cx(styles.fadeIn, styles.dropdownList)}>
          <div className={styles.inputWrapper}>
            <input
              type='text'
              className={styles.searchBar}
              placeholder='search symbol'
              value={symbol}
              onChange={handleChangeSymbol}
            />
            <span className={cx('fa-solid', 'fa-magnifying-glass', styles.icon)} />
          </div>
          {symbolList.map((item, index) => {
            const key = `symbolList-${index}`
            return (
              <li className={styles.symbol} key={key}>
                <button type='button' onClick={handleClickSymbol} data-item={item}>
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
