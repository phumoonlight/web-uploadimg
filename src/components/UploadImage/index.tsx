import React from 'react'
import css from './styles.module.css'

interface UploadImageProps {
  onChange?: React.ChangeEventHandler
}

const UploadImage: React.FunctionComponent<UploadImageProps> = (props) => {
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

export default UploadImage
