import React from 'react'
import addstory from '../images/addstoryc.png'
function Story() {
    const height = window.innerHeight-40;
    console.log(height);
    let storyimg = `https://source.unsplash.com/480x${height}/?random`
    let storyimg1 = `https://source.unsplash.com/475x${height}/?random`
    let storyimg2 = `https://source.unsplash.com/485x${height}/?random`
    return (
        <>
            <div id='storycontainer'>
                <img className='storyicon1' src={addstory} alt="" />

                <img className='storyicon' src="https://live.staticflickr.com/3412/3414333906_3429c9837c_b.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://live.staticflickr.com/3412/3414333906_3429c9837c_b.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://live.staticflickr.com/3412/3414333906_3429c9837c_b.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://live.staticflickr.com/3412/3414333906_3429c9837c_b.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://live.staticflickr.com/3412/3414333906_3429c9837c_b.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://live.staticflickr.com/3412/3414333906_3429c9837c_b.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
            </div>

            <div className="modal fade" id="exampleModa2" tabIndex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={storyimg} className="d-block h-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={storyimg1} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={storyimg2} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Story