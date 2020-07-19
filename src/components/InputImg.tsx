import React from 'react'
import css from './InputImg.module.css'

interface IInputImgProps {
  onChange?: React.ChangeEventHandler
}

const InputImg = (props: IInputImgProps) => {
  const { onChange } = props
  let inputRef: HTMLInputElement
  const handleClick = () => inputRef.click()
  const handleInputRef = (ref: HTMLInputElement) => { inputRef = ref }

  return (
    <div className={css.root}>
      <button
        type="button"
        className={css.overide}
        onClick={handleClick}
      >
        START UPLOAD
      </button>
      <input
        type="file"
        accept="image/*"
        className={css.input}
        onChange={onChange}
        ref={handleInputRef}
        multiple
      />
    </div>
  )
}

export default InputImg
