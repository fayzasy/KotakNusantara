import './style.css'

/* ── Generate bintang ── */
const field = document.getElementById('starsField')
if (field) {
  // Ukuran dalam rem: kecil, sedang, besar
  const sizes   = [0.55, 0.7, 0.85, 1.1, 1.4, 1.8, 2.2]
  const chars   = ['✦', '✧']
  const total   = 60  // jumlah bintang keseluruhan

  /* Lebih banyak bintang di area header (0–18dvh),
     berkurang secara gradual ke bawah */
  for (let i = 0; i < total; i++) {
    const star  = document.createElement('span')
    star.className = 'star'
    star.textContent = chars[Math.floor(Math.random() * chars.length)]

    // Distribusi vertikal: berat di atas (untuk area judul)
    const topPct = i < 22
      ? Math.random() * 18        // 22 bintang di header zone (0–18dvh %)
      : 18 + Math.random() * 82   // sisanya tersebar ke bawah

    const size  = sizes[Math.floor(Math.random() * sizes.length)]
    const dur   = (2.2 + Math.random() * 2.8).toFixed(2)
    const delay = (Math.random() * 5).toFixed(2)
    // warna: mostly gold, sesekali purple atau teal
    const colors = ['#FACC15', '#FACC15', '#FACC15', '#C084FC', '#2DD4BF', '#F97316']
    const color = colors[Math.floor(Math.random() * colors.length)]

    star.style.cssText = `
      left: ${(Math.random() * 96 + 2).toFixed(1)}%;
      top:  ${topPct.toFixed(1)}%;
      font-size: ${size}rem;
      color: ${color};
      opacity: ${(0.4 + Math.random() * 0.55).toFixed(2)};
      --dur: ${dur}s;
      --delay: ${delay}s;
    `
    field.appendChild(star)
  }
}

/* ── Scroll hint: hilang setelah scroll 80px ── */
const hint = document.getElementById('scrollHint')
if (hint) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) hint.classList.add('hidden')
    else hint.classList.remove('hidden')
  }, { passive: true })
}

/* ── Subtle parallax on items (desktop only) ── */
const items = document.querySelectorAll('.item')
if (items.length && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2
    const cy = window.innerHeight / 2
    const dx = (e.clientX - cx) / cx
    const dy = (e.clientY - cy) / cy
    items.forEach((item, i) => {
      const d = (i % 3 + 1) * 5
      item.style.translate = `${dx * d}px ${dy * d}px`
    })
  })
}
