import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import Login from '../pages/Login'





const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRouter