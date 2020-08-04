import {
  NextApiRequest as INextApiRequest,
  NextApiResponse as INextApiResponse,
} from 'next'
import XMLHttpRequest from 'xhr2'
import initFirebaseAppStorageServerSide from '../../src/functions/initFirebaseAppStorageServerSide'

interface ReturnResult {
  status: number,
  payload: any
}

(global as any).XMLHttpRequest = XMLHttpRequest
const storageRef = initFirebaseAppStorageServerSide()
let localStoredImages = []

const doGet = async (): Promise<ReturnResult> => {
  const localStoredImagesEmpty = !localStoredImages.length
  if (localStoredImagesEmpty) {
    const { items } = await storageRef.list()
    const imageURLs = await Promise.all(items.map((item) => item.getDownloadURL()))
    const reversedImageURLs = imageURLs.reverse()
    localStoredImages = reversedImageURLs
  }
  return { status: 200, payload: { localStoredImages } }
}

const doPost = async (req: INextApiRequest): Promise<ReturnResult> => {
  const { uploadedImageUrl } = req.body
  localStoredImages.unshift(uploadedImageUrl)
  return { status: 201, payload: 'success added url.' }
}

const requestHandler = async (req: INextApiRequest, res: INextApiResponse) => {
  let returnResult: ReturnResult
  switch (req.method) {
    case 'GET':
      returnResult = await doGet()
      break
    case 'POST':
      returnResult = await doPost(req)
      break
    default:
      returnResult = {
        status: 200,
        payload: {
          message: 'not found.',
        },
      }
  }
  res.status(returnResult.status).json(returnResult.payload)
}

export default requestHandler
