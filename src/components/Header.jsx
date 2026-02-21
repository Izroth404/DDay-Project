import { Link } from 'react-router-dom'

export default function Header({ title, subtitle, buttonText, buttonTo }) {
    return (
        <header>
            <div className="header-box">
                <h1>{title}</h1>
                {subtitle && <p className="header-subtitle">{subtitle}</p>}
                {buttonText && buttonTo && (
                    <Link to={buttonTo} className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>
                        {buttonText}
                    </Link>
                )}
            </div>
        </header>
    )
}
