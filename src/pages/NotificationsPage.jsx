// src/pages/NotificationsPage.jsx
const notifications = [
  { id: 1, title: 'Срок действия патента', desc: 'Иванов А.Р. - 15.05.2026', date: '12.05.2026', read: false, type: 'warning' },
  { id: 2, title: 'Просрочен миграционный учет', desc: 'Каримов Б.Ш. - 14.05.2026', date: '14.05.2026', read: false, type: 'danger' },
  { id: 3, title: 'Документ загружен', desc: 'Ахмедов Р.Ф. - Авансовый платеж', date: '10.05.2026', read: true, type: 'info' },
  { id: 4, title: 'Задача выполнена', desc: 'Юсупов Д.А. - Трудовой договор', date: '08.05.2026', read: true, type: 'success' },
]

const typeStyles = {
  warning: 'border-l-migra-warning bg-[#FFF8F0]',
  danger: 'border-l-[#E74C3C] bg-[#FFF0F0]',
  info: 'border-l-migra-secondary bg-[#F0FAF8]',
  success: 'border-l-green-500 bg-[#F0FFF4]',
}

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] font-bold text-[#1F1F1F]">Уведомления</h2>
        <button className="h-[38px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Отметить все прочитанными</button>
      </div>

      <div className="bg-white border border-migra-border rounded-[2px] divide-y divide-[#ECECEC]">
        {notifications.map((n) => (
          <div key={n.id} className={`flex items-start gap-3 p-4 border-l-4 ${typeStyles[n.type]}`}>
            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
              n.type === 'warning' ? 'bg-migra-warning' : n.type === 'danger' ? 'bg-red-500' : n.type === 'info' ? 'bg-migra-secondary' : 'bg-green-500'
            } ${n.read ? 'opacity-30' : ''}`} />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className={`text-sm ${n.read ? 'text-gray-500' : 'font-semibold text-gray-800'}`}>{n.title}</h3>
                {!n.read && <span className="text-xs bg-migra-warning text-white px-1.5 py-0.5 rounded-full">Новое</span>}
              </div>
              <p className="text-sm text-gray-800 mt-1">{n.desc}</p>
              <p className="text-xs text-gray-500 mt-2">{n.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}