import React from "react";

const Dashboard = () => {

    return (
        <div className='content-between'>
        <div className='justify-between content-end'>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center'>Start New Trip</button>
        </div>
        <div className='justify-between content-end'>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-full px-5 py-2.5 text-center mr-5'>Last Trip</button>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-full px-5 py-2.5 text-center mr-5'>2nd Last Trip</button>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-full px-5 py-2.5 text-center mr-5'>3rd Last Trip</button>
        </div>
        </div>
    );
};

export default Dashboard;