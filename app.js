import Timer from './timer.js'

const click1 = new Audio('click1.mp3')
const click2 = new Audio('click2.mp3')

const tempoDisplay = document.querySelector('.tempo')
const tempoText = document.querySelector('.tempo-text')
const decreaseTempoBtn = document.querySelector('.decrease-tempo')
const increaseTempoBtn = document.querySelector('.increase-tempo')
const tempoSlider = document.querySelector('.slider')
const startStopBtn = document.querySelector('.start-stop')
const subtractBeats = document.querySelector('.subtract-beats')
const addBeats = document.querySelector('.add-beats')
const measureCount = document.querySelector('.measure-count')

let bpm = 140
let beatsPerMeasure = 4
let count = 0
let isRunning = false
let tempoTextStr = 'Medium'

decreaseTempoBtn.addEventListener('click', () => {
  if (bpm <= 40) return
  bpm--
  updateMetronome()
})
increaseTempoBtn.addEventListener('click', () => {
  if (bpm >= 240) return
  bpm++
  updateMetronome()
})

tempoSlider.addEventListener('input', () => {
  bpm = tempoSlider.value
  updateMetronome()
})

subtractBeats.addEventListener('click', () => {
  if (beatsPerMeasure <= 1) return
  beatsPerMeasure--
  measureCount.textContent = beatsPerMeasure
  count = 0
})
addBeats.addEventListener('click', () => {
  if (beatsPerMeasure >= 12) return
  beatsPerMeasure++
  measureCount.textContent = beatsPerMeasure
  count = 0
})

startStopBtn.addEventListener('click', () => {
  count = 0
  if (!isRunning) {
    metronome.start()
    isRunning = true
    startStopBtn.textContent = 'STOP'
  } else {
    metronome.stop()
    isRunning = false
    startStopBtn.textContent = 'START'
  }
})

function updateMetronome() {
  tempoDisplay.textContent = bpm
  tempoSlider.value = bpm
  metronome.timeInterval = 60000 / bpm

  if (bpm > 40 && bpm <= 80) {
    tempoTextStr = 'Slow'
  }
  if (bpm > 80 && bpm <= 120) {
    tempoTextStr = 'Getting there'
  }
  if (bpm > 120 && bpm <= 180) {
    tempoTextStr = 'Nice and Steady'
  }
  if (bpm > 180 && bpm <= 220) {
    tempoTextStr = 'Funky Stuff'
  }
  if (bpm > 220 && bpm <= 240) {
    tempoTextStr = 'Relax Dude'
  }

  tempoText.textContent = tempoTextStr
}

function playClick() {
  if (count === beatsPerMeasure) {
    count = 0
  }
  if (count === 0) {
    click1.play()
    click1.currentTime = 0
  } else {
    click2.play()
    click2.currentTime = 0
  }
  count++
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true })
