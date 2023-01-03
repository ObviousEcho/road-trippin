import React from "react";

const Dashboard = () => {

    return (
        <div>
        <div className='content-center'>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white font-bold'>Start New Trip</button>
        </div>
        <div className='content-end'>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white font-bold'>Last Trip</button>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white font-bold'>2nd Last Trip</button>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white font-bold'>3rd Last Trip</button>
        </div>
        </div>
    );
};

export default Dashboard;