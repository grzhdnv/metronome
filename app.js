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
})
addBeats.addEventListener('click', () => {
  if (beatsPerMeasure >= 12) return
  beatsPerMeasure++
  measureCount.textContent = beatsPerMeasure
})

// Helper functions
function updateMetronome() {
  tempoDisplay.textContent = bpm
  tempoSlider.value = bpm
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
