import './style.css'

const overlay  = document.getElementById('showerOverlay')
const field    = document.getElementById('showerField')
const nameEl   = document.getElementById('showerName')
const closeBtn = document.getElementById('showerClose')

let showerInterval = null
let hoverTimeout   = null

function spawnTag(text) {
  const tag = document.createElement('span')
  tag.className = 'job-tag'
  tag.textContent = text
  const left     = Math.random() * (window.innerWidth - 240)
  const rotation = (Math.random() - 0.5) * 22
  const duration = 2.6 + Math.random() * 1.8
  const dist     = window.innerHeight + 90
  tag.style.cssText = `
    left: ${left}px;
    --r: ${rotation}deg;
    --dist: ${dist}px;
    animation-duration: ${duration}s;
    animation-delay: ${Math.random() * 0.35}s;
  `
  field.appendChild(tag)
  tag.addEventListener('animationend', () => tag.remove(), { once: true })
}

function startShower(jobs) {
  field.innerHTML = ''
  jobs.forEach(j => spawnTag(j))
  showerInterval = setInterval(() => {
    jobs.forEach(j => { if (Math.random() > 0.3) spawnTag(j) })
  }, 700)
}

function stopShower() {
  clearInterval(showerInterval)
  showerInterval = null
}

function openOverlay(name, jobs) {
  nameEl.textContent = name
  overlay.classList.add('active')
  startShower(jobs)
}

function closeOverlay() {
  overlay.classList.remove('active')
  stopShower()
  setTimeout(() => { field.innerHTML = '' }, 400)
}

/* Wire up each card:
   - mobile/touch → tap to open
   - desktop      → hover to open (300ms delay so quick passes don't trigger)
*/
const isTouch = window.matchMedia('(pointer: coarse)').matches

document.querySelectorAll('.member-card').forEach(card => {
  const name = card.dataset.name
  const jobs = JSON.parse(card.dataset.jobs || '[]')

  if (isTouch) {
    card.addEventListener('click', () => openOverlay(name, jobs))
  } else {
    card.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => openOverlay(name, jobs), 280)
    })
    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout)
    })
  }
})

closeBtn.addEventListener('click', closeOverlay)
overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay() })
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay() })
