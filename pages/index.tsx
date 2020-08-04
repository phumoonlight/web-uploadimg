import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import useFirebaseStorageRef from '../src/hooks/useFirebaseStorageRef'
import {
  AppTitle,
  AppNav,
  ImgPreview,
  UploadImage,
  ImgExplore,
} from '../src/components'
import css from '../src/styles/index.module.css'

const Index = (): JSX.Element => {
  const [uploadedImageFiles, setUploadedImageFiles] = useState<File[]>([])
  const [uploadedImageURLs, setUploadedImageURLs] = useState<string[]>([])
  const firebaseStorageRef = useFirebaseStorageRef()

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get('/api/images')
      const { imagesCache } = data
      setUploadedImageURLs(imagesCache)
    })()
  }, [])

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    const fileArray = [...files]
    setUploadedImageFiles([...uploadedImageFiles, ...fileArray])
  }

  return (
    <div className={css.approot}>
      <AppNav />
      <div className={css.appheader}>
        <AppTitle />
        <UploadImage onChange={handleFileInput} />
      </div>
      {uploadedImageFiles.map((file: File) => (
        <ImgPreview key={file.name} file={file} storageRef={firebaseStorageRef} />
      ))}
      <ImgExplore imgUrls={uploadedImageURLs} />
      <div
        className="fb-comments"
        data-href="https://uploadimg.vercel.app/"
        data-numposts="5"
        data-width="100%"
      />
    </div>
  )
}

export default Index
