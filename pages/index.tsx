import React, { useState } from 'react'
import useFirebaseStorageRef from '../src/hooks/useFirebaseStorageRef'
import {
  Nav,
  Heading,
  ImgPreview,
  UploadImageInput,
  RecentUploadedImages,
} from '../src/components'
import css from '../src/styles/index.module.css'

const Index = (): JSX.Element => {
  const [uploadedImageFiles, setUploadedImageFiles] = useState<File[]>([])
  const firebaseStorageRef = useFirebaseStorageRef()

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    const fileArray = [...files]
    setUploadedImageFiles([...uploadedImageFiles, ...fileArray])
  }

  return (
    <div className={css.approot}>
      <Nav />
      <Heading />
      <UploadImageInput onChange={handleFileInput} />
      {uploadedImageFiles.map((file: File) => (
        <ImgPreview key={file.name} file={file} storageRef={firebaseStorageRef} />
      ))}
      <RecentUploadedImages />
      <div className="fb-comment-label">COMMENT</div>
      <div
        className="fb-comments"
        data-href="https://uploadimg.vercel.app/"
        data-numposts="5"
        data-width="100%"
      />
      <div className={css.credit}>
        {'< > by '}
        <a href="https://github.com/phumoonlight">@phumoonlight</a>
      </div>
    </div>
  )
}

export default Index
