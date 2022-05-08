import { useState } from 'react'
import { cx } from '../../styles/index'
import styles from './Input.module.scss'

const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function Input() {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [password, setPassword] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false)

  const handleChangeEmail = (event) => {
    const { value } = event.currentTarget
    setEmail(value)

    if (REGEX_EMAIL.test(value)) setIsValidEmail(true)
    else setIsValidEmail(false)
  }

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value)
  }

  const handleClickShowEmail = () => {
    setIsShowPassword((prevState) => !prevState)
  }

  const handleBlurEmailErrorMessage = () => {
    !isValidEmail && email.length > 0 ? setShowEmailErrorMessage(true) : setShowEmailErrorMessage(false)
  }

  const handleFocusEmail = () => {
    setShowEmailErrorMessage(false)
  }

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputLabelWrapper}>
        <label className={styles.label} htmlFor='email'>
          E-mail
        </label>
        <div className={styles.inputIconWrapper}>
          <input
            className={styles.email}
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={handleChangeEmail}
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmailErrorMessage}
          />
          <span
            className={cx('fa-solid', 'fa-circle-check', `${styles.icon}`, `${styles.checkIcon}`, {
              [styles.checked]: isValidEmail,
            })}
          />
        </div>
        {showEmailErrorMessage && <p className={styles.errorMessage}>Invalid e-mail address.</p>}
      </div>
      <div className={styles.inputLabelWrapper}>
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <div className={styles.inputIconWrapper}>
          <input
            className={styles.password}
            type={isShowPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={handleChangePassword}
          />
          <button type='button' onClick={handleClickShowEmail}>
            <span
              className={cx(
                'fa-solid',
                { 'fa-eye': isShowPassword, 'fa-eye-slash': !isShowPassword },
                `${styles.icon}`,
                `${styles.eyeIcon}`
              )}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
