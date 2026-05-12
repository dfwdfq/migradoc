// src/components/Layout.jsx
import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  {
    to: '/dashboard',
    label: 'Панель задач',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    to: '/tasks',
    label: 'Задачи',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
  },
  {
    to: '/employees',
    label: 'Сотрудники',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    to: '/companies',
    label: 'Компании',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    to: '/documents',
    label: 'Документы',
    icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    to: '/notifications',
    label: 'Уведомления',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
  },
  {
    to: '/settings',
    label: 'Личный кабинет',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    to: '/help',
    label: 'Помощь',
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  // На странице входа сайдбар не показываем
  if (isLogin) return <Outlet />

  return (
    <div className="min-h-screen flex flex-col bg-migra-bg">
      {/* Верхняя тонкая полоска (десктоп) */}
      <div className="hidden lg:block h-[26px] bg-migra-primary flex-shrink-0" />

      <div className="flex flex-1 overflow-hidden">
        {/* Десктопный сайдбар */}
        <aside className="hidden lg:flex flex-col w-[250px] bg-migra-primary text-white flex-shrink-0">
          <div className="px-5 py-6">
            <h1 className="text-[20px] font-semibold tracking-tight">МИГРАСКОП</h1>
          </div>
          <nav className="flex-1">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 h-[52px] text-[14px] font-medium transition ${
                    isActive
                      ? 'bg-[rgba(255,255,255,0.08)] border-l-[3px] border-migra-accent'
                      : 'hover:bg-[rgba(255,255,255,0.06)] border-l-[3px] border-transparent'
                  }`
                }
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-5 py-4 border-t border-[rgba(255,255,255,0.1)] text-xs text-migra-accent">
            Тариф: Бизнес · 120 сотрудников
          </div>
        </aside>

        {/* Мобильный хедер */}
        <div className="lg:hidden fixed top-0 left-0 right-0 h-[52px] bg-migra-primary flex items-center justify-between px-4 z-30 text-white">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
          <span className="font-semibold text-lg">МИГРАСКОП</span>
          <div className="w-8 h-8 rounded-full bg-white/20" />
        </div>

        {/* Мобильное меню (оверлей) */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-20">
            <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-[250px] bg-migra-primary text-white shadow-lg overflow-y-auto">
              <div className="px-5 py-6">
                <h2 className="text-xl font-semibold">МИГРАСКОП</h2>
              </div>
              <nav>
                {navItems.map(item => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-5 h-[52px] text-sm font-medium ${
                        isActive
                          ? 'bg-[rgba(255,255,255,0.08)] border-l-[3px] border-migra-accent'
                          : 'hover:bg-[rgba(255,255,255,0.06)] border-l-[3px] border-transparent'
                      }`
                    }
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Основной контент */}
        <main className="flex-1 overflow-auto lg:pt-[18px] px-5 pb-8 pt-16 lg:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}