import {
  NextApiRequest as INextApiRequest,
  NextApiResponse as INextApiResponse,
} from 'next'
import initFirebaseAppStorageServerSide from '../../src/functions/initFirebaseAppStorageServerSide'

interface ReturnResult {
  status: number,
  payload: any
}

const firebaseStorageRef = initFirebaseAppStorageServerSide()
let isImagesNotFetch = true
let localStoredImages: string[] = []

const fetchImagesFromFirebase = async () => {
  const { items } = await firebaseStorageRef.list()
  const imageURLs = await Promise.all(items.map((item) => item.getDownloadURL()))
  const reversedImageURLs = imageURLs.reverse()
  localStoredImages = reversedImageURLs
  isImagesNotFetch = false
}

const doGet = async (): Promise<ReturnResult> => {
  if (isImagesNotFetch) await fetchImagesFromFirebase()
  return {
    status: 200,
    payload: { localStoredImages },
  }
}

const doPost = async (req: INextApiRequest): Promise<ReturnResult> => {
  const { uploadedImageUrl } = req.body
  localStoredImages.unshift(uploadedImageUrl)
  return { status: 201, payload: 'success added url.' }
}

const handleRequest = async (req: INextApiRequest, res: INextApiResponse) => {
  let result: ReturnResult
  switch (req.method) {
    case 'GET':
      result = await doGet()
      break
    case 'POST':
      result = await doPost(req)
      break
    default:
      result = {
        status: 200,
        payload: {
          message: 'not found.',
        },
      }
  }
  res.status(result.status).json(result.payload)
}

export default handleRequest
