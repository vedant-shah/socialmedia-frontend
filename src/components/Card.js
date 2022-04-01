import React from 'react'
import { FcLike } from "react-icons/fc";
function Card(props) {
    return (
        <>
            <div className="card mb-3 w-xs-80 w-md-40 w-40 mw-xxl-50 " id='post'>
                <div className="card-body px-0 py-1  ">
                    <div className="postheader d-flex px-2 my-2 align-items-center">
                        <img className='posticon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                        <h6 className="card-title text-start"><strong>{props.username}</strong></h6>
                    </div>
                    <img id='postimg' src={props.img} className="card-img-top" alt="..." />
                    <div className="lc text-start">
                        <FcLike className='minicon' />
                        <span style={{ fontSize: "1rem", marginLeft: "4px" }}><strong>Liked by you and 45 others</strong></span>
                        {/* <FaRegComment className='mx-3 minicon' />
                        <FaRegBookmark className='bm minicon' /> */}
                    </div>
                    <div className='text-start px-3 py-1'>
                        <p className='mb-1'><strong>{props.username}</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea doloremque aperiam perferendis eius suscipit quos tempore ab ex pariatur!</p>
                        <p className='mb-0'><strong>NotSomeoneYouKnow: 🔥🔥🔥</strong></p>
                        <p className='mb-0'><strong>Rando123: 🤩😍😍</strong></p>
                        <div className="input-group my-3 ">
                            <input type="text" className="form-control comment" placeholder="Comment..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-success" type="button" id="button-addon2">Button</button>
                        </div>
                        <p className="text-muted">view all 400 comments</p>
                        <p className="text-muted">5 hours ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card