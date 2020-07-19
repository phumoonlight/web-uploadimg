const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const charactersLength: number = characters.length

const getRandomString = (length: number) => {
  let result: string = ''
  for (let i = 0; i < length; i += 1) {
    const randomFloat: number = Math.random() * charactersLength
    const randomInteger: number = Math.floor(randomFloat)
    result += characters.charAt(randomInteger)
  }
  return result
}

export default getRandomString
