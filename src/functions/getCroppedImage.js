const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    // chips: 他のload関数、error関数があっても購読出来る様にaddEventListener()で記述
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    // chips：英文コメにあるように、CodeSandbox上ではクロスオリジン問題があるため必須の模様。
    //        当アプリには必要なし。
    // image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox 
    image.src = url
  })

export default async function getCroppedImage({ imageURL, name }, pixelCrop) {

  const image = await createImage(imageURL)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea
  canvas.height = safeArea

  // draw rotated image and store data.
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  )
  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob(blob => {
      // blob⇒fileに変換
      const file = new File([blob], name, { type: 'image/png' })
      resolve(file)
    })
  })
}