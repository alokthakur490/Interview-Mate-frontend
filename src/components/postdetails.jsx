import React, { useState } from 'react';
import { FaComment, FaImage, FaHeart } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { BiSolidLike } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import user from '../assets/images/user.png'; // Path to user image
import toast, { Toaster } from 'react-hot-toast';
import Sparkle from 'react-sparkle';

const PostDetail = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { text: 'Great post!', id: 1, userPic: user },
    { text: 'Very informative, thanks for sharing.', id: 2, userPic: user },
  ]);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, { text: comment, id: Date.now(), userPic: user }]);
      setComment('');
      setShowCommentBox(false); // Close comment box after submitting
    }
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleLikeClick = () => {
    setShowSparkle(true);
    setLiked(!liked);
    setTimeout(() => setShowSparkle(false), 2000);
  };

  const post = {
    title: 'Exploring the Beauty of Nature',
    content: `Nature is not only a place of beauty but also a source of inspiration and tranquility. From lush green forests to serene lakes and majestic mountains, nature has a way of captivating our senses and providing a sense of peace. In this post, we'll explore some of the most stunning natural landscapes and the impact they have on our well-being.`,
    image: 'https://c4.wallpaperflare.com/wallpaper/383/633/300/sybil-kailena-davina-e-sybille-y-sybil-a-hd-wallpaper-preview.jpg',
    date: '18 Aug 2024',
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-3 mb-5">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-4">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full bg-gray-400 mr-3" src={user} alt="User" />
          <div>
            <h4 className="text-lg font-semibold">Anurag Singh</h4>
            <p className="text-sm text-gray-600">4th year student at NIT Jalandhar</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
        <button
          className={`text-sm font-semibold ${isFollowing ? 'text-gray-500' : 'text-blue-500'}`}
          onClick={toggleFollow}
        >
          {isFollowing ? 'Following' : 'Follow +'}
        </button>
      </div>
      {/* Post Content */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.content}</p>
      </div>
      {/* Post Image */}
      {post.image && (
        <div className="mb-4">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
      {/* Like & Comment Section */}
      <div className="flex items-center justify-between mb-4">
        <button
          className="relative flex items-center text-gray-500 hover:text-gray-900"
          onClick={handleLikeClick}
        >
          {showSparkle && liked && (
            <Sparkle
              color="blue"
              count={30}
              minSize={7}
              maxSize={12}
              overflowPx={10}
              fadeOutSpeed={15}
            />
          )}
          <BiSolidLike className="text-2xl" style={{ color: `${liked ? 'blue' : 'grey'}` }} />
          <span>Like</span>
        </button>
        <button
          className="flex items-center text-gray-500 hover:text-gray-900"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          <FaComment className="w-5 h-5 mr-1" />
          <span>Comment</span>
        </button>
      </div>
      {/* Comments */}
      {showCommentBox && (
        <div className="p-2 bg-gray-100 rounded-lg shadow-md">
          <div className="flex items-start mb-4">
            <img className="w-8 h-8 rounded-full bg-gray-400 mr-3" src={user} alt="User" />
            <textarea
              value={comment}
              onChange={handleCommentChange}
              rows="3"
              placeholder="Add a comment..."
              className="flex-grow p-2 border rounded-lg focus:outline-none"
            />
          </div>
          <button
            onClick={handleCommentSubmit}
            className="bg-blue text-white py-2 px-3 rounded-lg flex items-center hover:bg-blue-700"
          >
            <IoMdSend className="w-5 h-5 mr-2" />
            Send
          </button>
        </div>
      )}
      {/* Display Comments */}
      <div className="mt-6">
        <div className="text-lg font-semibold mb-2">Comments:</div>
        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c.id} className="flex items-start p-2 border-b border-gray-200">
              <img className="w-10 h-10 rounded-full bg-gray-400 mr-3" src={c.userPic} alt="User" />
              <p className="text-gray-700">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PostDetail;