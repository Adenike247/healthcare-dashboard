import React from 'react'
import DiagnosticList from '../DiagnosticList/DiagnosticList'
import DiagnosisHistory from '../DiagnosisHistory';

const MainContent = () => {
  return (
    <div>
      <DiagnosisHistory />
      <DiagnosticList />
    </div>
  );
}

export default MainContent