import { React, useState } from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Map from './components/Map.tsx';

// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';

// import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

function inputDestination() {
  // store input value from form
  const [destination, setDestination] = useState('');
  //   const [destinationProps, setDestinationProps] = useState('');

  // form input change handler
  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setDestination(inputValue);
  };

  // form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!destination) {
      return;
    }
    setDestinationProps(destination);
    setDestination('');
  };
}

const Dashboard = () => {
  return (
    <div>
      <div className='text-center mt-4'>
        <form class='w-full max-w-sm'>
          <div class='flex items-center border-b border-teal-500 py-2'>
            <input
              class='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none align-middle'
              type='text'
              placeholder='Start New Trip'
              aria-label='Destination'
              value={destination}
              onChange={handleInputChange}
            ></input>
            <button
              class='flex-shrink-0 bg-blue-700 hover:bg-blue-800 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-full'
              type='button'
              onClick={handleFormSubmit}
            >
              Let's Go!
            </button>
          </div>
        </form>
      </div>

      {/* <div>
      const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {thought.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={thought.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm thoughtId={thought._id} />
      </div>
    </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
