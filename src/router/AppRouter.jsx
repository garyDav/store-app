import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'
import LoginPage from '../pages/auth/LoginPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={false}>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
