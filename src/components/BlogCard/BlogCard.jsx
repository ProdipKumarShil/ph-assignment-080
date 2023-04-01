import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogCard = ({card, func, addBookmark}) => {
  const {id, img, title, readTime, user} = card

  const notify = () => toast.success('👌 bookmark added', {
    position: "top-right",
    autoClose: 800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;
  const notify2 = () => toast.error('💩 bookmark removed', {
    position: "top-right",
    autoClose: 800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;

  const [icon, setIcon] = useState(false)
  const changeIcon = () => {
    icon ? notify2(id) : notify();
    setIcon(!icon)
    addBookmark(id)
  }

  return (
    <>
      <div className="card card-compact w-[auto] bg-base-100 m-2 rounded-md shadow mt-10">
        <figure><img className='h-[600px] object-cover w-[845px]' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className='flex items-center'>
              <img className='w-16 h-16 rounded-full' src={user.img} alt="" />
              <div className="ml-6">
                <p className='text-2xl font-bold'>{user.name}</p>
                <p className='text-slate-400'>March {user.date}, 2023</p>
              </div>
            </div>
            <div className="">
              <p className='text-slate-400 text-xl font-medium'>{readTime} min to read <FontAwesomeIcon onClick={() => changeIcon(id)} className='cursor-pointer animate-bounce  h-7' icon={icon ? faBookmark : faRegularBookmark} /></p>
            </div>
          </div>
          <h2 className="card-title text-4xl my-4 mb-4">{title}</h2>
          <p onClick={() => func(parseInt(readTime))} className='underline text-xl cursor-pointer active:text-textColor'>Mark as read </p>
          {/* <p href="#" onClick={notify} className='underline text-xl cursor-pointer'>Ha ha... baked your toast</p> */}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default BlogCard;