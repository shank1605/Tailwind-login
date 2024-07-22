import { FC, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import Modal from './Modal';
import AuthPage from '../pages/AuthPage'

interface Props {
    name: any, time: any, content: any, comments: any
}

const Post: FC<Props> = ({ name, time, content, comments }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center mb-4">
          <img
            className="h-10 w-10 rounded-full mr-4"
            src="https://via.placeholder.com/40"
            alt={name}
          />
          <div>
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-gray-400 text-sm">{time}</p>
          </div>
          <div className="ml-auto text-gray-400 cursor-pointer">•••</div>
        </div>
        <div className="text-gray-300 mb-4">{content}</div>
        <div className="text-gray-400 text-sm">
          <span className="mr-4">{comments} comments</span>
        </div>
      </div>
    );
  };
  
  const Posts = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false)
    const { isAuthenticated } = useAuth() 
    const posts = [
      {
        name: 'Shashank Bankey',
        time: '5 mins ago',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        comments: 24,
      },
      {
        name: 'John Summit',
        time: '8 mins ago • Edited',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        comments: 8,
      },
    ]
    const handlePost = () => {
        if (!isAuthenticated) setOpenLogin(true)
        else alert('Already LoggedIn')
    }
    const handleCloseDialog = () => {
        setOpenLogin(false)
    }
  
    return (
        <>
        <Modal isOpen={openLogin} onClose={handleCloseDialog}><AuthPage screen='login'/></Modal>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
        <div className="max-w-xl w-full">
          <h1 className="text-3xl font-bold text-white mb-6">Hello Jane</h1>
          <p className="text-gray-400 mb-6">How are you doing today? Would you like to share something with the community? 🤗</p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-white font-semibold mb-4">Create post</h2>
            <div className="flex items-center bg-gray-700 p-4 rounded-lg mb-4">
              <span className="text-gray-400 mr-4">💬</span>
              <input
                className="bg-gray-700 w-full text-gray-300 focus:outline-none"
                type="text"
                placeholder="How are you feeling today?"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200" onClick={handlePost}>Post</button>
          </div>
          {posts.map((post, index) => (
            <Post
              key={index}
              name={post.name}
              time={post.time}
              content={post.content}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default Posts;