import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import Compressor from 'compressorjs'
import getRandomString from '../functions/getRandomString'
import css from './ImgPreview.module.css'

interface ImgPreviewProps {
  doUpload?: boolean,
  file: File,
  storageRef: firebase.storage.Reference
}

const INPUT_COPY_LINK_DEFAULT = 'Copy link'
const INPUT_COPY_LINK_CLICKED = 'Link copied!'

const ImgPreview: React.FunctionComponent<ImgPreviewProps> = (props: ImgPreviewProps) => {
  const { file, storageRef, doUpload = true } = props
  const [inputCopyLinkValue, setInputCopyLinkValue] = useState<string>(INPUT_COPY_LINK_DEFAULT)
  const [url, setUrl] = useState<string>('')
  const [isReady, setIsReady] = useState<boolean>(false)
  const inputRef = useRef(null)
  const handleClickReadOnlyInput = () => inputRef.current.select()
  const handleClickCopyLink = () => {
    inputRef.current.select()
    document.execCommand('copy')
    setInputCopyLinkValue(INPUT_COPY_LINK_CLICKED)
    setTimeout(() => setInputCopyLinkValue(INPUT_COPY_LINK_DEFAULT), 2500)
  }

  useEffect(() => {
    if (doUpload) {
      const metadata = { contentType: file.type }
      const fileExtension = file.name.split('.').pop()
      const newFileName = `${+new Date()}-${getRandomString(10)}.${fileExtension}`
      // eslint-disable-next-line no-new
      new Compressor(file, {
        quality: 0.5,
        success: async (compressedBlob) => {
          const result = await storageRef.child(newFileName).put(compressedBlob, metadata)
          const downloadUrl = await result.ref.getDownloadURL()
          Axios.post('/api/images', { uploadedImageUrl: downloadUrl })
          setUrl(downloadUrl)
          setIsReady(true)
        },
      })
    } else {
      setUrl(URL.createObjectURL(file))
      setIsReady(true)
    }
  }, [])

  return (
    <div className={css.root}>
      <div className={css.container}>
        {isReady && <img src={url} alt="preview-img" />}
        {isReady ? (
          <div className={css.sharecontainer}>
            <input
              value={url}
              ref={inputRef}
              onClick={handleClickReadOnlyInput}
              readOnly
            />
            <button type="button" onClick={handleClickCopyLink}>{inputCopyLinkValue}</button>
          </div>
        ) : <div>Loading</div>}
      </div>
    </div>
  )
}

export default ImgPreview
