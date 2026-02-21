import { useEffect, useState } from 'react'

export default function Footer({ showVisitCount = false }) {
    const [visits, setVisits] = useState(null)

    useEffect(() => {
        if (!showVisitCount) return
        let count = parseInt(localStorage.getItem('visitCount') || '0') + 1
        localStorage.setItem('visitCount', count)
        setVisits(count)
    }, [showVisitCount])

    return (
        <footer>
            Made with ❤️ for You
            {showVisitCount && visits !== null && (
                <p id="visit-count" style={{ fontSize: '0.7rem', marginTop: '5px', opacity: 0.5 }}>
                    You've visited this memory {visits} times ✨
                </p>
            )}
        </footer>
    )
}
