import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

const Home = () => {
    let state = useSelector(state => state)

    return (
        <div>
            <Header />
            {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='' className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            <div className='container mt-3'>
                <div className='row'>
                    {state.hotelData.map((v) => {
                        return (
                            <div className='col-3 mt-3'>
                                <Card title={v.title} img={v.img} rooms={v.rooms} price={v.price} />
                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;


// import React from 'react'
// import Header from '../components/Header';
// import Card from '../components/Card';
// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getUser} from '../store/action'
// import {useEffect} from 'react';
// import './style.css';

// const Home = () => {
//     let state = useSelector(state => state)
//     const { id } = useParams()
//     const user = useSelector(state => state.user)
//     const dispatch = useDispatch()
//     console.log(user)

//     useEffect(() => {
//         dispatch(getUser(id))
//     }, [])
    
//     return (
//         <>
//             <h2>{user.username}</h2>
//             <h2>{user.email}</h2>
//             <Header />
//             <div className='container mt-3'>
//                 <div className='row'>
//                     {state.hotelData.map((v) => {
//                         return (
//                             <div className='col-3 mt-2'>
//                                 <Card title={v.title} img={v.img} rooms={v.rooms} price={v.price} />
//                             </div>
//                         )

//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

//  export default Home;

// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getUser, getAllUsers} from '../store/action'
// import { useEffect, useState } from 'react';
// import './style.css';

// function Home() {
//     const { id } = useParams()
//     const user = useSelector(state => state.user)
//     const allUsers = useSelector(state => state.allUsers)
//     const dispatch = useDispatch()
    
//     console.log(user)
    
//     useEffect(() => {
//         dispatch(getUser(id))
//         dispatch(getAllUsers())
//     }, [])
    
//     return (
//         <div>
//             <h1>Home</h1>
//             <h2>{user.username}</h2>
//             <h2>{user.email}</h2>
//             <hr />
//             <div classNameName="d-flex">
//                 <div classNameName="card users_card">
//                     <h3>All Users</h3>
//                     <ul>
//                         {allUsers.map((v, i) => {
//                             return v.email !== user.email && <li key={i}>
//                                 <div>
//                                     <h4> {v.username}</h4>
//                                     <span>{v.email}</span>
//                                 </div>
//                             </li>
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;

