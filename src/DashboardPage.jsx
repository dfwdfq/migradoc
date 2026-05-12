// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import TasksPage from './pages/TasksPage'
import EmployeesPage from './pages/EmployeesPage'
import EmployeeProfile from './pages/EmployeeProfile'
import CompaniesPage from './pages/CompaniesPage'
import CompanyProfile from './pages/CompanyProfile'
import NotificationsPage from './pages/NotificationsPage'
import SettingsPage from './pages/SettingsPage'
import HelpPage from './pages/HelpPage'
import LoginPage from './pages/LoginPage'

export default function DashboardPage() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Страница входа — без сайдбара */}
        <Route path="/login" element={<LoginPage />} />

        {/* Все остальные страницы — внутри Layout с сайдбаром */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employees/:id" element={<EmployeeProfile />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/companies/:id" element={<CompanyProfile />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
