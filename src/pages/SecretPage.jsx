import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'

export default function SecretPage() {
  const [noPos, setNoPos] = useState({ left: '55%', top: 'auto' })
  const [popupOpen, setPopupOpen] = useState(false)
  const cardRef = useRef(null)
  const noBtnRef = useRef(null)
  const hoverSoundRef = useRef(null)
  const yesSoundRef = useRef(null)

  // Floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div')
      heart.className = 'heart'
      heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💗'
      heart.style.cssText = `
        position: fixed;
        bottom: -20px;
        left: ${Math.random() * 100}vw;
        font-size: ${Math.random() * 22 + 14}px;
        animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
        pointer-events: none;
        filter: blur(0.3px);
        z-index: 0;
        opacity: ${Math.random() * 0.5 + 0.4};
      `
      document.body.appendChild(heart)
      setTimeout(() => heart.remove(), 8000)
    }, 380)
    return () => clearInterval(interval)
  }, [])

  function handleNoHover() {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0
      hoverSoundRef.current.play().catch(() => { })
    }
    if (cardRef.current && noBtnRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const btnRect = noBtnRef.current.getBoundingClientRect()
      const maxX = cardRect.width - btnRect.width - 10
      const maxY = cardRect.height - btnRect.height - 10
      setNoPos({
        left: Math.random() * maxX + 'px',
        top: Math.random() * maxY + 'px',
      })
    }
  }

  function handleYes() {
    if (yesSoundRef.current) {
      yesSoundRef.current.play().catch(() => { })
    }
    if (confetti) {
      confetti({ particleCount: 260, spread: 120, origin: { y: 0.65 } })
    }
    setTimeout(() => setPopupOpen(true), 300)
  }

  return (
    <>
      <style>{`
        body {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
          background-size: 400% 400%;
          animation: bgMove 12s ease infinite;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }
        @keyframes bgMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .secret-card-inner {
          width: min(92%, 420px);
          padding: 40px 30px 45px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(18px);
          border-radius: 28px;
          text-align: center;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.4);
          position: relative;
          animation: cardIn 1.1s ease;
          margin-bottom: 50px;
          z-index: 10;
        }
        .secret-card-inner::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 30px;
          background: linear-gradient(120deg, #ff4d6d, #ff9a9e, #fbc2eb);
          z-index: -1;
          filter: blur(20px);
          opacity: 0.7;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .secret-emoji {
          font-size: 68px;
          margin-bottom: 12px;
          animation: heartbeat 1.8s infinite;
          display: block;
        }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          25%      { transform: scale(1.08); }
          50%      { transform: scale(1); }
          75%      { transform: scale(1.12); }
        }
        .secret-card-inner h2 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          color: #4a1c2f;
          margin-bottom: 30px;
          line-height: 1.35;
        }
        .secret-buttons {
          position: relative;
          height: 78px;
        }
        .secret-buttons button {
          position: absolute;
          padding: 14px 36px;
          border-radius: 40px;
          border: none;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .secret-buttons button:active { transform: scale(0.94); }
        #yes-btn {
          left: 12%;
          background: linear-gradient(135deg, #ff4d6d, #ff758f);
          color: #fff;
          box-shadow: 0 15px 35px rgba(255,77,109,0.55);
        }
        #yes-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(255,77,109,0.7); }
        #no-btn {
          background: rgba(255,255,255,0.9);
          color: #777;
        }
        .secret-hint {
          margin-top: 28px;
          font-size: 13px;
          color: #6b6b6b;
          font-style: italic;
        }
        @keyframes floatUp {
          from { transform: translateY(0) scale(1); opacity: 1; }
          to   { transform: translateY(-120vh) scale(1.8); opacity: 0; }
        }
        .gif-popup-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.8);
          z-index: 10001;
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; flex-direction: column;
          color: white;
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .gif-popup-inner {
          background: white;
          padding: 20px;
          border-radius: 25px;
          text-align: center;
          width: min(92%, 380px);
          animation: cardIn 0.5s ease;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .gif-popup-inner h3 {
          color: #d6336c;
          font-family: 'Playfair Display', serif;
          margin-top: 20px;
          font-size: 1.5rem;
        }
        .close-popup-btn {
          position: relative;
          margin-top: 20px;
          background: linear-gradient(135deg, #ff4d6d, #ff758f);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 40px;
          cursor: pointer;
          width: 100%;
          font-weight: 600;
          font-size: 1rem;
        }
      `}</style>

      <audio ref={hoverSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-343.mp3" />
      <audio ref={yesSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3" />

      <div className="secret-card-inner" ref={cardRef}>
        <span className="secret-emoji">🤭🤭</span>
        <h2>XYZ,<br />Would you like to go out with me?</h2>

        <div className="secret-buttons">
          <button id="yes-btn" onClick={handleYes}>Yes 💖</button>
          <button
            id="no-btn"
            ref={noBtnRef}
            style={{ left: noPos.left, top: noPos.top }}
            onMouseEnter={handleNoHover}
          >
            No 🙈
          </button>
        </div>

        <Link to="/" className="btn" style={{ marginTop: '20px', display: 'inline-block', position: 'relative' }}>
          🏠 Back to Home
        </Link>
        <div className="secret-hint">Some stories don't allow "no" ✨</div>
      </div>

      {popupOpen && (
        <div className="gif-popup-overlay">
          <div className="gif-popup-inner">
            <div
              className="tenor-gif-embed"
              data-postid="20339407"
              data-share-method="host"
              data-aspect-ratio="0.75"
              data-width="100%"
            >
              <a href="https://tenor.com/view/disco-time-bldk29-gif-20339407">Disco Time Bldk29 GIF</a>
            </div>
            <script type="text/javascript" async src="https://tenor.com/embed.js" />
            <h3>Let's Party! 💃✨</h3>
            <button className="close-popup-btn" onClick={() => setPopupOpen(false)}>
              Close 🌸
            </button>
          </div>
        </div>
      )}
    </>
  )
}
