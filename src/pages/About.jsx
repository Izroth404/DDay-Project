import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const timelineItems = [
    { side: 'left', href: '/memories/darejeeling', icon: '🌸', border: 'border-orange', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'right', href: '/memories/jesus-night', icon: '🎅', border: 'border-blue', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'left', href: '/memories/movie-night', icon: '🍿', border: 'border-green', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'right', href: '/memories/brahmataal', icon: '🏔️', border: 'border-red', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'left', href: '/memories/purulia', icon: '🚞', border: 'border-red', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'right', href: '/memories/misc', icon: '📅', border: 'border-green', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'left', href: '/memories/adi-inc', icon: '😔', border: 'border-red', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'right', href: '/memories/budday', icon: '🎂', border: 'border-blue', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'left', href: '/memories/dhurandar', icon: '🎞️', border: 'border-blue', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'right', href: '/memories/candor', icon: '🤶', border: 'border-blue', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
    { side: 'left', href: '/memories/sandakphu', icon: '🧗‍♀️', border: 'border-blue', heading: 'Heading', desc: 'Loren Simpsum', date: 'mm/dd/yyyy' },
]

export default function About() {
    return (
        <div>
            <header>
                <div className="header-box">
                    <h1>Ap Chronology Samjhiye💖</h1>
                    <p className="header-subtitle">A collection of moments I overthought until now.</p>
                </div>
            </header>

            <section className="timeline-container">
                <h2>My Timeline ✨</h2>
                <div className="timeline-v2">
                    {timelineItems.map((item, i) => (
                        <div key={i} className={`timeline-item ${item.side}`}>
                            <Link to={item.href} className="icon-link">
                                <div className={`icon-circle ${item.border}`}>{item.icon}</div>
                            </Link>
                            <div className="content">
                                <h3>{item.heading}</h3>
                                <p>{item.desc}</p>
                                <span className="date">{item.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="btn-container">
                <Link to="/" className="btn">🏠 Back to Home</Link>
            </div>
            <Footer />
        </div>
    )
}
