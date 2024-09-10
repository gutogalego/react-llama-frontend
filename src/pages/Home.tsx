import React from 'react';
import TextCompletion from '../components/TextCompletion';
import TextSummarization from '../components/TextSummarization';

const Home = () => {
  return (
    <div>
      <TextCompletion />
      <TextSummarization />
    </div>
  );
};

export default Home;
