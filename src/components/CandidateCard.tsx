import React from 'react';
import { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="productList">
      <div className="productCard">
        <img src={candidate.image} alt="candidate-img" className="productImage" />
        <div className="productCard__content">
          <h1 className="productNumber">{candidate.number}</h1>
          <h3 className="productName">{candidate.name}</h3>
          <div className="displayStack__1">
            <div className="productBatch">{candidate.batch}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
