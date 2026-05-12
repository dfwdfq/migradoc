import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

// Пункты меню с иконками (SVG paths)
const navItems = [
  {
    to: '/dashboard',
    label: 'Панель задач',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    to: '/tasks',
    label: 'Задачи',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    to: '/employees',
    label: 'Сотрудники',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    to: '/companies',
    label: 'Компании',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    to: '/documents',
    label: 'Документы',
    icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    to: '/notifications',
    label: 'Уведомления',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    to: '/settings',
    label: 'Личный кабинет',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    to: '/help',
    label: 'Помощь',
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Не показываем сайдбар на странице логина
  const isLoginPage = location.pathname === '/login'

  return (
    <div className="min-h-screen bg-slate-100 flex text-slate-900">
      {/* ======================== */}
      {/* Сайдбар (десктоп)        */}
      {/* ======================== */}
      {!isLoginPage && (
        <aside className="hidden lg:flex lg:flex-col w-72 bg-white border-r border-slate-200 p-6 gap-6 shadow-sm flex-shrink-0">
          {/* Заголовок */}
          <div>
            <h1 className="text-2xl font-bold">Миградок</h1>
            <p className="text-sm text-slate-500 mt-1">Система миграционного контроля</p>
          </div>

          {/* Навигация */}
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-left px-4 py-3 rounded-2xl transition flex items-center gap-3 ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={item.icon}
                  />
                </svg>
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Блок профиля и тарифа */}
          <div className="mt-auto bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 font-medium text-sm">
                АП
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Администратор</p>
                <p className="text-xs text-slate-500">admin@migradoc.ru</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Тариф: Бизнес · 120 сотрудников
            </p>
            <NavLink
              to="/settings"
              className="mt-3 w-full rounded-xl bg-white border border-slate-300 py-2 text-sm hover:bg-slate-100 transition block text-center"
            >
              Управление тарифом
            </NavLink>
          </div>
        </aside>
      )}

      {/* ======================== */}
      {/* Мобильный хедер          */}
      {/* ======================== */}
      {!isLoginPage && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between z-30 shadow-sm">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl hover:bg-slate-100 transition"
            aria-label="Меню"
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
          <h1 className="text-lg font-bold">Миградок</h1>
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">
            АП
          </div>
        </div>
      )}

      {/* ======================== */}
      {/* Мобильное меню (оверлей) */}
      {/* ======================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-20">
          {/* Затемнение фона */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Боковая панель */}
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6 flex flex-col gap-4 overflow-y-auto">
            <div className="mb-2">
              <h1 className="text-xl font-bold">Миградок</h1>
              <p className="text-xs text-slate-500 mt-1">
                Система миграционного контроля
              </p>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-left px-4 py-3 rounded-2xl transition flex items-center gap-3 ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <p className="text-xs text-slate-500">
                Тариф: Бизнес · 120 сотрудников
              </p>
              <NavLink
                to="/settings"
                className="mt-3 w-full rounded-xl bg-white border border-slate-300 py-2 text-sm hover:bg-slate-100 transition block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Управление тарифом
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* ======================== */}
      {/* Основной контент         */}
      {/* ======================== */}
      <main
        className={`flex-1 overflow-auto ${
          isLoginPage ? '' : 'p-4 lg:p-8 mt-14 lg:mt-0'
        }`}
      >
        <Outlet />
      </main>
    </div>
  )
}
