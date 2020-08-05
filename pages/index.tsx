import React, { useState } from 'react'
import useFirebaseStorageRef from '../src/hooks/useFirebaseStorageRef'
import {
  Nav,
  Heading,
  ImgPreview,
  UploadImageInput,
  RecentUploadedImages,
  FacebookComment,
  Credit,
} from '../src/components'

const Index = (): JSX.Element => {
  const [uploadedImageFiles, setUploadedImageFiles] = useState<File[]>([])
  const firebaseStorageRef = useFirebaseStorageRef()

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    const fileArray = [...files]
    setUploadedImageFiles([...uploadedImageFiles, ...fileArray])
  }

  return (
    <div>
      <Nav />
      <Heading />
      <UploadImageInput onChange={handleFileInput} />
      {uploadedImageFiles.map((file: File) => (
        <ImgPreview key={file.name} file={file} storageRef={firebaseStorageRef} />
      ))}
      <RecentUploadedImages />
      <FacebookComment />
      <Credit />
    </div>
  )
}

export default Index
