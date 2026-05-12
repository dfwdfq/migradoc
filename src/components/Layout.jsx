// src/components/Layout.jsx
import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Панель задач', icon_path: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10...' },
  { to: '/tasks', label: 'Задачи', icon_path: 'M9 5H7a2 2...' },
  { to: '/employees', label: 'Сотрудники', icon_path: 'M12 4.354a4...' },
  { to: '/companies', label: 'Компании', icon_path: 'M19 21V5...' },
  { to: '/documents', label: 'Документы', icon_path: 'M7 21h10a2...' },
  { to: '/notifications', label: 'Уведомления', icon_path: 'M15 17h5...' },
  { to: '/settings', label: 'Личный кабинет', icon_path: 'M10.325 4.317...' },
  { to: '/help', label: 'Помощь', icon_path: 'M8.228 9...' }
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  if (isLogin) return <Outlet />

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F3F3]">
      {/* Верхняя полоска (десктоп) */}
      <div className="hidden lg:block h-[26px] bg-[#1F655B] flex-shrink-0" />

      <div className="flex flex-1 overflow-hidden">
        {/* Сайдбар десктоп */}
        <aside className="hidden lg:flex flex-col w-[250px] bg-[#1F655B] text-white flex-shrink-0">
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
                      ? 'bg-[rgba(255,255,255,0.08)] border-l-[3px] border-[#9FC8BE]'
                      : 'hover:bg-[rgba(255,255,255,0.06)] border-l-[3px] border-transparent'
                  }`
                }
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon_path} />
                </svg>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-5 py-4 border-t border-[rgba(255,255,255,0.1)] text-xs text-[#9FC8BE]">
            Тариф: Бизнес · 120 сотрудников
          </div>
        </aside>

        {/* Мобильный хедер */}
        <div className="lg:hidden fixed top-0 left-0 right-0 h-[52px] bg-[#1F655B] flex items-center justify-between px-4 z-30 text-white">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
          <span className="font-semibold text-lg">МИГРАСКОП</span>
          <div className="w-8 h-8 rounded-full bg-white/20" />
        </div>

        {/* Мобильное меню */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-20">
            <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-[250px] bg-[#1F655B] text-white shadow-lg overflow-y-auto">
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
                          ? 'bg-[rgba(255,255,255,0.08)] border-l-[3px] border-[#9FC8BE]'
                          : 'hover:bg-[rgba(255,255,255,0.06)] border-l-[3px] border-transparent'
                      }`
                    }
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon_path} />
                    </svg>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Контент */}
        <main className="flex-1 overflow-auto lg:pt-[18px] px-5 pb-8 pt-16 lg:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}