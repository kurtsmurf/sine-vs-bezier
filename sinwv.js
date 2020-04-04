const canvas = document.querySelector('#wvz')

const scale = 16
const maxWidth = Math.floor(window.innerWidth / scale) * scale - 64
const maxHeight = Math.floor(window.innerHeight / scale) * scale - 64
const side = Math.min(maxWidth, maxHeight, 512)

const color = '#0DBC79'

canvas.height = side
canvas.width = side
canvas.style.border = scale + 'px solid ' + color

const ctx = canvas.getContext('2d')
const width = Math.floor(canvas.width / scale)
const height = Math.floor(canvas.height / scale)

ctx.scale(scale, scale)
ctx.fillStyle = color



const drawSineWave = () => {
  ctx.strokeStyle = color
  const ctrlPtLen = .366 * width
  const top = .5
  const bottom = height - .5

  ctx.beginPath()
  ctx.moveTo(0, top)
  ctx.bezierCurveTo(
    ctrlPtLen, top,
    width - ctrlPtLen, bottom,
    width, bottom
  )
  
  // ctx.lineTo(width,height)
  ctx.stroke()
}
drawSineWave()

ctx.fillStyle = 'orange'

for (x=.5;x<width;x++) {
  const base = 3 * Math.PI / 2
  const inc = x / width * Math.PI
  const phase = base + inc
  const sine = Math.sin(phase)
  const amp = height / 2 - .5
  const y = sine * amp + (height / 2)

  ctx.beginPath()
  ctx.arc(x, y, .5, 0, 2*Math.PI)
  ctx.fill()
}