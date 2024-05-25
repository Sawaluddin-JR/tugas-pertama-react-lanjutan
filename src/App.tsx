import React from 'react';
import candidates from './candidates';
import CandidateCard from './components/CandidateCard';

const App: React.FC = () => {
  return (
    <div>
      <h1 className="title">PEMILU PUB</h1>
      <div className="App">
        {candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default App;