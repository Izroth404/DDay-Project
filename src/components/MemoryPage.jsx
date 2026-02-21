import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MemoryPage({ title, backTo = '/about', children }) {
    return (
        <div>
            <div className="letter-container">
                <h1>{title}</h1>
                {children}
                <br />
            </div>
            <div className="btn-container">
                <Link to={backTo} className="btn">🏠 Back to Timeline</Link>
            </div>
            <Footer />
        </div>
    )
}
