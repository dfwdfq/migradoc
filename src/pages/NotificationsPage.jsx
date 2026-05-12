const notifications = [
  {
    id: 1,
    title: 'Срок действия патента истекает',
    description: 'У сотрудника Иванов Алишер Рустамович (ООО РРМ) срок действия патента истекает 15.05.2026.',
    date: '12.05.2026 09:30',
    read: false,
    type: 'warning',
  },
  {
    id: 2,
    title: 'Просрочен миграционный учет',
    description: 'У сотрудника Каримов Бахтиёр Шухратович (ООО Миградок) истек срок миграционного учета 14.05.2026.',
    date: '14.05.2026 08:00',
    read: false,
    type: 'danger',
  },
  {
    id: 3,
    title: 'Документ загружен',
    description: 'Загружен новый документ "Авансовый платеж" для сотрудника Ахмедов Рустам Фархадович.',
    date: '10.05.2026 15:20',
    read: true,
    type: 'info',
  },
  {
    id: 4,
    title: 'Задача выполнена',
    description: 'Задача по обновлению трудового договора для Юсупов Джамшид Анварович отмечена как выполненная.',
    date: '08.05.2026 11:45',
    read: true,
    type: 'success',
  },
]

const typeStyles = {
  warning: 'border-l-amber-400 bg-amber-50/30',
  danger: 'border-l-red-400 bg-red-50/30',
  info: 'border-l-blue-400 bg-blue-50/30',
  success: 'border-l-green-400 bg-green-50/30',
}

const typeDotStyles = {
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  info: 'bg-blue-500',
  success: 'bg-green-500',
}

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Уведомления</h2>
          <p className="text-slate-500 mt-1">
            Центр уведомлений системы
          </p>
        </div>
        <button className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 transition text-sm">
          Отметить все как прочитанные
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-5 border-l-4 transition hover:bg-slate-50/50 ${typeStyles[notif.type]} ${notif.read ? 'opacity-75' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${typeDotStyles[notif.type]} ${notif.read ? 'opacity-40' : ''}`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h4 className={`text-sm ${notif.read ? 'text-slate-600' : 'font-semibold text-slate-900'}`}>
                    {notif.title}
                  </h4>
                  {!notif.read && (
                    <span className="px-2 py-0.5 bg-slate-900 text-white text-xs rounded-full flex-shrink-0">Новое</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{notif.description}</p>
                <p className="text-xs text-slate-400 mt-2">{notif.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="flex items-center justify-between bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-4">
        <p className="text-sm text-slate-500">Показано 4 из 12 уведомлений</p>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition disabled:opacity-50" disabled>Назад</button>
          <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm">1</button>
          <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">2</button>
          <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">Вперед</button>
        </div>
      </div>
    </div>
  )
}
