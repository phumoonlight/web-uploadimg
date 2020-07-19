import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Compressor from 'compressorjs'
import getRandomString from '../functions/getRandomString'
import css from './ImgPreview.module.css'

interface IImgPreviewProps {
  file: File,
  storageRef: firebase.storage.Reference
}

const ImgPreview = (props: IImgPreviewProps) => {
  const { file, storageRef } = props
  const [url, setUrl] = useState<string>('')
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    const upload = async () => {
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
    }
    upload()
  }, [])

  return (
    <div className={css.root}>
      <div className={css.container}>
        {isReady && <img src={url} alt="preview-img" />}
        {isReady ? <a href={url} target="_blank" rel="noopener noreferrer">{url}</a> : <div>Loading</div>}
      </div>
    </div>
  )
}

export default ImgPreview
