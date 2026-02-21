import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Index() {
    const [secretInput, setSecretInput] = useState('')
    const navigate = useNavigate()

    function checkSecret() {
        const userInput = secretInput.trim().toLowerCase()
        const correctAnswer = 'x^2y^4+xsiny'
        if (
            userInput === correctAnswer ||
            userInput === 'x2y4+xsiny=0' ||
            userInput === 'x^2*y^4+x*siny=0' ||
            userInput === '(x^2*y^4)+(x*siny)=0'
        ) {
            alert('Correct! Opening the secret chapter... ❤️')
            navigate('/secret')
        } else {
            alert('Not quite! Hint: It\'s an exact differential equation. 😉')
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') checkSecret()
    }

    return (
        <div>
            <header className="header-box" style={{ display: 'block', margin: '50px auto 0', width: 'fit-content' }}>
                <h1>After the Storm has passed and we're still here. ✨</h1>
                <p>I've spent a lot of time overthinking what to say, so I decided to build it instead.</p>
                <p className="subtitle">"I'm not just raising the bar; I'm laying it all out for you."</p>
                <Link to="/about" className="btn">The Timeline ⏱️</Link>
            </header>

            <div className="gif-container">
                <iframe
                    src="https://giphy.com/embed/7p3e2WCM0VEnm"
                    width="100%"
                    height="100%"
                    style={{ position: 'relative' }}
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                />
            </div>

            <main className="content-grid">
                {/* Card 1: Inside My Mind */}
                <div className="card">
                    <h2>Inside My Mind</h2>
                    <p>I know you probably have a million questions about why I stayed distant, or why now. I tried to answer them here.</p>
                    <Link to="/questions" className="btn">Read More</Link>
                </div>

                {/* Card 2: The Verdict */}
                <div className="card">
                    <h2>The Verdict</h2>
                    <p>Now that I've shared my side... what are you thinking? I'm ready to hear it, whenever you're ready to say it.</p>
                    <div className="btn-group">
                        <a href="" className="btn wa-btn" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-whatsapp"></i> Whatsapp
                        </a>
                        <a href="" className="btn mail-btn" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-envelope"></i> Email
                        </a>
                    </div>
                </div>

                {/* Card 3: Secret */}
                <div className="card secret-card">
                    <div className="card-image-wrapper">
                        <img src="media/doc6.jpg" alt="Secret Hint" className="card-img" />
                    </div>
                    <h2>Solve to find the secret? 🔐</h2>
                    <p>The key to the secret page lies in the solution to this exact differential equation:</p>
                    <div className="secret-input-area">
                        <input
                            type="text"
                            id="secret-answer"
                            placeholder="No Cheating! Solve it yourself!"
                            value={secretInput}
                            onChange={e => setSecretInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={checkSecret} className="btn">Unlock Page</button>
                    </div>
                </div>
            </main>

            <Footer showVisitCount={true} />
        </div>
    )
}
