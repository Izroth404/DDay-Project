import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Questions from './pages/Questions'
import SecretPage from './pages/SecretPage'
import Darejeeling from './pages/memories/Darejeeling'
import JesusNight from './pages/memories/JesusNight'
import MovieNight from './pages/memories/MovieNight'
import Brahmataal from './pages/memories/Brahmataal'
import Purulia from './pages/memories/Purulia'
import Misc from './pages/memories/Misc'
import AdiInc from './pages/memories/AdiInc'
import Budday from './pages/memories/Budday'
import Dhurandar from './pages/memories/Dhurandar'
import Candor from './pages/memories/Candor'
import Sandakphu from './pages/memories/Sandakphu'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/secret" element={<SecretPage />} />
            <Route path="/memories/darejeeling" element={<Darejeeling />} />
            <Route path="/memories/jesus-night" element={<JesusNight />} />
            <Route path="/memories/movie-night" element={<MovieNight />} />
            <Route path="/memories/brahmataal" element={<Brahmataal />} />
            <Route path="/memories/purulia" element={<Purulia />} />
            <Route path="/memories/misc" element={<Misc />} />
            <Route path="/memories/adi-inc" element={<AdiInc />} />
            <Route path="/memories/budday" element={<Budday />} />
            <Route path="/memories/dhurandar" element={<Dhurandar />} />
            <Route path="/memories/candor" element={<Candor />} />
            <Route path="/memories/sandakphu" element={<Sandakphu />} />
        </Routes>
    )
}

export default App
