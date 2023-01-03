import React from "react";

const Dashboard = () => {

    return (
        <div className='content-between'>
        <div className='justify-between content-end'>
        
        <form class="w-full max-w-sm">
            <div class="flex items-center border-b border-teal-500 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Start New Trip" aria-label="Destination"></input>
                <button class="flex-shrink-0 bg-blue-700 hover:bg-blue-800 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Let's Go!
                </button>
                <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                    Cancel
                </button>
            </div>
        </form>

            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center'>Start New Trip</button>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-full px-5 py-2.5 text-center mr-5'>Last Trip</button>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-full px-5 py-2.5 text-center mr-5'>2nd Last Trip</button>
            <button className='flex-initial w-32 bg-blue-700 hover:bg-blue-800 text-white focus:outline-none font-medium text-sm rounded-full px-5 py-2.5 text-center mr-5'>3rd Last Trip
            </button>
            </div>
        </div>
    );
};

export default Dashboard;