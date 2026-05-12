export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-4xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Левая часть */}
        <div className="bg-slate-900 p-10 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Миградок</h1>
            <p className="text-slate-300 mt-3 text-lg leading-relaxed">
              Система миграционного контроля для управления документами
              иностранных сотрудников
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-slate-200">Контроль сроков документов</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <span className="text-slate-200">Уведомления по email</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-slate-200">Интеграция с 1С и СБИС</span>
            </div>
          </div>

          <p className="text-slate-400 text-xs mt-6">
            © 2026 Миградок. Все права защищены.
          </p>
        </div>

        {/* Правая часть — форма */}
        <div className="p-10 flex flex-col justify-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Вход в систему</h2>
            <p className="text-slate-500 mt-2 text-sm">
              Введите email и пароль для входа
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="example@migradoc.ru"
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Пароль
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400" />
                <span className="text-sm text-slate-600">Запомнить меня</span>
              </label>
              <button type="button" className="text-sm text-slate-500 hover:text-slate-900 transition">
                Забыли пароль?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition active:scale-[0.98]"
            >
              Войти
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            Нет аккаунта?{' '}
            <button className="text-slate-700 hover:text-slate-900 font-medium transition">
              Свяжитесь с нами
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
