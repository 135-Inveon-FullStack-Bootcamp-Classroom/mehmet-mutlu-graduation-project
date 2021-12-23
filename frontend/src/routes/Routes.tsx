import React from 'react'
import { Routes as RoutesFiles, Route } from "react-router-dom";
import Home from '../pages/Home/Home';

const Routes: React.FC = () => {
  return (
    <RoutesFiles>
      <Route path="/" element={<Home />} />
    </RoutesFiles>
  )
}

export default Routes
