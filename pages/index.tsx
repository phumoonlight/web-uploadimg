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
  const [uploadedImgFiles, setUploadedImgFiles] = useState<File[]>([])
  const [exploreImgUrls, setExploreImgUrls] = useState<string[]>([])
  const storageRef = useFirebaseStorageRef()

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get('/api/images')
      const { imagesCache } = data
      setExploreImgUrls(imagesCache)
    })()
  }, [])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { files } = event.target
      const filesArray = [...files]
      setUploadedImgFiles([...uploadedImgFiles, ...filesArray])
    } catch (error) {}
  }

  return (
    <div className={css.approot}>
      <AppNav />
      <div className={css.appheader}>
        <AppTitle />
        <UploadImage onChange={handleInput} />
      </div>
      {uploadedImgFiles.map((file: File) => (
        <ImgPreview key={file.name} file={file} storageRef={storageRef} />
      ))}
      <ImgExplore imgUrls={exploreImgUrls} />
    </div>
  )
}

export default Index
