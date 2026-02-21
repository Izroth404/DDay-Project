import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const faqs = [
    {
        question: 'What is Lorem Ipsum?🤖',
        answer: (
            <ul>
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 3</li>
                <li>Point 3</li>
                <li>Point 3</li>
            </ul>
        ),
    },
    {
        question: 'What is Lorem Ipsum?🤔',
        answer: (
            <div className="inner-padding">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        ),
    },
]

export default function Questions() {
    const [activeIndex, setActiveIndex] = useState(null)
    const [question, setQuestion] = useState('')

    function toggleFaq(i) {
        setActiveIndex(prev => (prev === i ? null : i))
    }

    function sendQuestionToWA() {
        if (!question.trim()) {
            alert('You have to type something first! ❤️')
            return
        }
        const myNumber = ''
        const encodedMsg = encodeURIComponent('Hi! Question from the website: ' + question)
        window.open(`https://wa.me/${myNumber}?text=${encodedMsg}`, '_blank')
        setQuestion('')
    }

    return (
        <div>
            <Link to="/" className="btn" style={{ marginTop: '30px', display: 'inline-block' }}>🏠 Home</Link>
            <div className="letter-container">
                <h1>Common Curiosities 🤔🤔🤔🤔</h1>
                <p>Everything you ever wondered (or I ever overthought) in one place.</p>

                <div className="faq-accordion">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`faq-item ${activeIndex === i ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFaq(i)}>
                                {faq.question}
                            </button>
                            <div className="faq-answer scrollable-answer">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card ask-me-card">
                <h3>Ask me anything... 📝</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Got a question that isn't here? Send it to me!</p>
                <div className="input-group">
                    <input
                        type="text"
                        id="user-question-only"
                        placeholder="Type your question here..."
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                    />
                    <button onClick={sendQuestionToWA} className="btn">Submit Question</button>
                </div>
                <div id="pending-questions"></div>
            </div>

            <Footer />
        </div>
    )
}
