import Dropdown from './Dropdown'
import Input from './Input'
import Toggle from './Toggle'

import styles from './Routes.module.scss'
import Tab from './Tab'
import Slider from './Slider'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
