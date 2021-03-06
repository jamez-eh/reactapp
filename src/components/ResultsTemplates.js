// displays the view corresponding to job.analysis
import React, { PropTypes } from 'react'
import ResultFishers from './ResultFishers'
import ResultSubtyping from './ResultSubtyping'
import ResultDatabase from './ResultDatabase'
import ResultPanseq from './ResultsPanseq'
import Bulk from '../containers/Bulk'


const ResultsTemplates = ({ job }) => {
  switch (job.analysis) {
    case 'fishers':
      return <ResultFishers jobId={job.hash} />
    case "Virulence Factors and Serotype":
      return <ResultSubtyping jobId={job.hash} />
    case "Virulence Factors":
      return <ResultSubtyping jobId={job.hash} />
    case "Serotype":
      return <ResultSubtyping jobId={job.hash} />
    case "Antimicrobial Resistance":
      return <ResultSubtyping jobId={job.hash} />
    case "Subtyping":
      return <ResultSubtyping jobId={job.hash} />
    case "Panseq":
      return <ResultPanseq jobId={job.hash} />
    case "bulk":
      return <Bulk />
    case "database":
      return <ResultDatabase jobId={job.hash} />
    default:
      return <div>ERROR: no matching analysis view found.</div>
  }
}

ResultsTemplates.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
}

export default ResultsTemplates
