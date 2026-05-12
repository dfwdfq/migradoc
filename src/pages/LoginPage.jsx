// src/pages/LoginPage.jsx
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // логика входа
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-migra-bg p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white border border-migra-border rounded-[2px] overflow-hidden">
        <div className="bg-migra-primary p-8 md:w-1/2 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">МИГРАСКОП</h1>
            <p className="mt-4 text-sm leading-6 text-migra-accent">
              Система миграционного контроля для управления документами иностранных сотрудников
            </p>
          </div>
          <div className="space-y-3 mt-8">
            {['Контроль сроков документов', 'Уведомления по email', 'Интеграция с 1С и СБИС'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <svg className="w-4 h-4 text-migra-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs text-migra-accent mt-8">© 2026 МИГРАСКОП</p>
        </div>

        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[20px] font-semibold text-gray-800 mb-1">Вход в систему</h2>
          <p className="text-[12px] text-gray-500 mb-6">Введите email и пароль для входа</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@migraskop.ru"
                required
                className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm outline-none focus:border-migra-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm outline-none focus:border-migra-secondary"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded-[2px] border-migra-border text-migra-secondary focus:ring-0"
                />
                <span className="text-sm text-gray-700">Запомнить меня</span>
              </label>
              <button type="button" className="text-sm text-migra-secondary hover:underline">Забыли пароль?</button>
            </div>
            <button
              type="submit"
              className="w-full h-[38px] bg-migra-secondary text-white rounded-[2px] text-sm font-medium hover:bg-[#256F63] transition"
            >
              Войти
            </button>
          </form>
          <p className="text-center text-xs text-gray-500 mt-6">
            Нет аккаунта?{' '}
            <button className="text-migra-secondary font-medium hover:underline">Свяжитесь с нами</button>
          </p>
        </div>
      </div>
    </div>
  )
}