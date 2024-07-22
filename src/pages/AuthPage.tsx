
import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

interface Props {
    screen: string
}
const AuthPage: React.FC<Props> = ({ screen }) => {
    const [currentPage, setCurrentPage] = useState(screen)
    const handleChangeScreen = (page: string) => setCurrentPage(page)
    return (
        <>
            {currentPage === 'login' ? <Login handleChangeScreen={handleChangeScreen} /> : <Register handleChangeScreen={handleChangeScreen} />}
        </>
    )
}

export default AuthPage
