import React, { useState } from 'react'
import useFirebaseStorageRef from '../src/hooks/useFirebaseStorageRef'
import Nav from '../src/components/Nav'
import Heading from '../src/components/Heading'
import UploadImageInput from '../src/components/UploadImageInput'
import ImgPreview from '../src/components/ImgPreview'
import RecentUploadedImages from '../src/components/RecentUploadedImages'
import FacebookComment from '../src/components/FacebookComment'
import Credit from '../src/components/Credit'

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
