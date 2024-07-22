import React from 'react'

interface Props {
    children: React.ReactNode
}
const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-lg w-full border-solid border-2 border-stone-400">
                {children}
            </div>
        </div>
    )
}

export default Container