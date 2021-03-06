import React from 'react'
import addstory from '../images/addstory.png'
function Story() {
    const height = window.innerHeight - 40;
    let storyimg = `https://source.unsplash.com/480x${height}/?random`
    let storyimg1 = `https://source.unsplash.com/475x${height}/?random`
    let storyimg2 = `https://source.unsplash.com/485x${height}/?random`
    return (
        <>
            <div id='storycontainer' className='mt-xs-3'>
                <img className='storyicon1' data-bs-toggle="modal" data-bs-target="#exampleModal" src={addstory} alt="" />
                <img className='storyicon' src="https://data.whicdn.com/images/346854440/original.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/06/pandasecurity-hackers-deep-web.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://1.bp.blogspot.com/-hWY3B2mW93E/Xlte6weCyKI/AAAAAAAAdRk/IhZhlhNelK0pYMLzvaqoii2C1tbdDTwtACLcBGAsYHQ/s1600/Half%2BFace%2BDP%2Bin%2BDark%2BVIEW%2Bfor%2BSocial%2BMedia%2B%25284%2529.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://blog.floydhub.com/content/images/2019/03/aaron-burden-236415-unsplash.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://data.whicdn.com/images/346854440/original.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModa2" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://data.whicdn.com/images/346854440/original.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://data.whicdn.com/images/346854440/original.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
                <img className='storyicon' src="https://data.whicdn.com/images/346854440/original.jpg" alt="" />
                <img className='storyicon' src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" alt="" />
            </div>

            <div className="modal fade" id="exampleModa2" tabIndex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" id='storyclose' className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>

                        <div className="modal-body">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={storyimg} className="d-block h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={storyimg1} className="d-block h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={storyimg2} className="d-block h-100" alt="..." />
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