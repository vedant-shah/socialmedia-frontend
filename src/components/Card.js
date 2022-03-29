import React from 'react'
import { FcLike } from "react-icons/fc";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
function Card(props) {
    return (
        <>
            <div className="card mb-3 w-xs-80 w-md-40 w-40" id='post'>
                <div className="card-body px-0 py-1 ">
                    <div className="postheader d-flex px-2 my-2 align-items-center">
                        <img className='posticon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                        <h6 className="card-title text-start"><strong>{props.username}</strong></h6>
                    </div>
                    <img id='postimg' src={props.img} className="card-img-top" alt="..." />
                    <div className="lc text-start">
                        <FcLike className='minicon'/>
                        <FaRegComment className='mx-3 minicon' />
                        <FaRegBookmark className='bm minicon' />
                    </div>
                    <div className='text-start px-4 py-1'>
                        <p className='mb-1'>50,000 likes</p>
                        <p className='mb-1'><strong>{props.username}</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea doloremque aperiam perferendis eius suscipit quos tempore ab ex pariatur!</p>
                        <p className="text-muted">view all 400 comments</p>
                        <p className="text-muted">5 hours ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card