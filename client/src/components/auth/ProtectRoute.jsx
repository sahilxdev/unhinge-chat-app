import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({children, user, redirect="/login"}) => {
  if (!user) return <Navigate to={redirect} />;
}

export default ProtectRoute