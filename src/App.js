import React from 'react';
import ReactDOM from 'react-dom/client';

const Header=()=>{
    return (

        <div className='header flex justify-between border border-black'>
            <div className="logo w-[120px]">
            <img className='w-[150px]' src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" />
            </div>
        
           <div className='nav-items py-0 px-2'>
                <ul className='flex '>
                <li className='p-4 m-4 text-[20px]'>Home</li>
                <li className='p-4 m-4 text-[20px]'>About Us</li>
                <li className='p-4 m-4 text-[20px]'>Contact Us</li>
                <li className='p-4 m-4 text-[20px]'>Cart</li>
                </ul>
        
           </div>
        </div>
    );
}
const RestaurantCard = ()=>{
    return (
        <div className='res-card w-[200px] h-[300px] border border-black '>
            <h3 className=''>Meghana Foods</h3>
        </div>
    )
}
const Body = () =>{
    return (
        <div className='body'>
            <div className='search' >Search</div>
            <div className='res-container'>
                <RestaurantCard />
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className='App'>
         <Header />
         <Body />
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
