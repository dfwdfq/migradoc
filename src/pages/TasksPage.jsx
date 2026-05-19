// src/pages/TasksPage.jsx
const tasks = [
  { id: 1, employee: 'Иванов Алишер Рустамович', document: 'Патент', expires: '15.05.2026', company: 'ООО РРМ', status: 'Скоро истекает' },
  { id: 2, employee: 'Каримов Бахтиёр Шухратович', document: 'Миграционный учет', expires: '14.05.2026', company: 'ООО Миградок', status: 'Просрочено' },
  { id: 3, employee: 'Ахмедов Рустам Фархадович', document: 'Авансовый платеж', expires: '20.05.2026', company: 'ООО РРМ', status: 'Активно' },
  { id: 4, employee: 'Юсупов Джамшид Анварович', document: 'Трудовой договор', expires: '10.05.2026', company: 'ООО СтройПроект', status: 'Просрочено' },
  { id: 5, employee: 'Мирзоев Фаррух Олимович', document: 'Патент', expires: '25.06.2026', company: 'ООО Миградок', status: 'Активно' },
]

const statusStyles = {
  'Активно': 'bg-green-100 text-green-800',
  'Скоро истекает': 'bg-amber-100 text-amber-800',
  'Просрочено': 'bg-red-100 text-red-800',
}

export default function TasksPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-bold text-[#1F1F1F]">Задачи</h2>
          <p className="text-[12px] text-gray-500">Контроль сроков документов</p>
        </div>
        <button className="h-[38px] px-6 bg-[#256F63] text-white rounded-[2px] text-sm hover:bg-[#2E8B7B]">Экспорт XLS</button>
      </div>
      <div className="bg-white border border-migra-border rounded-[2px] px-4 py-4 flex flex-wrap gap-3">
        <input placeholder="Поиск..." className="h-[36px] border border-migra-border rounded-[2px] px-3 text-sm flex-1 min-w-[200px] outline-none focus:border-migra-secondary" />
        <select className="h-[36px] border border-migra-border rounded-[2px] px-2 text-sm"><option>Все типы</option></select>
        <select className="h-[36px] border border-migra-border rounded-[2px] px-2 text-sm"><option>Все компании</option></select>
        <select className="h-[36px] border border-migra-border rounded-[2px] px-2 text-sm"><option>Все статусы</option></select>
        <button className="h-[32px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Сбросить</button>
      </div>
      <div className="bg-white border border-migra-border rounded-[2px] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#ECECEC] text-gray-500">
              <th className="text-left px-4 py-2 font-medium">Сотрудник</th>
              <th className="text-left px-4 py-2 font-medium">Документ</th>
              <th className="text-left px-4 py-2 font-medium">Компания</th>
              <th className="text-left px-4 py-2 font-medium">Дата окончания</th>
              <th className="text-left px-4 py-2 font-medium">Статус</th>
              <th className="text-left px-4 py-2 font-medium">Действия</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id} className="border-b border-[#ECECEC] hover:bg-[#F9F9F9]">
                <td className="px-4 py-2 font-medium">{t.employee}</td>
                <td className="px-4 py-2">{t.document}</td>
                <td className="px-4 py-2 text-gray-500">{t.company}</td>
                <td className="px-4 py-2 text-migra-warning">{t.expires}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${statusStyles[t.status]}`}>{t.status}</span>
                </td>
                <td className="px-4 py-2">
                  <button className="h-[32px] px-3 bg-migra-secondary text-white rounded-[2px] text-xs">Загрузить</button>
                  <button className="ml-2 h-[32px] px-3 border border-migra-border rounded-[2px] text-xs">Карточка</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
