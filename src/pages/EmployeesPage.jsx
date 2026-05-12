const employeesData = [
  {
    id: 1,
    name: 'Иванов Алишер Рустамович',
    company: 'ООО РРМ',
    citizenship: 'Узбекистан',
    phone: '+7 (999) 123-45-67',
    email: 'ivanov@example.com',
    patentExpires: '15.05.2026',
    documentStatus: 'Требует обновления',
  },
  {
    id: 2,
    name: 'Каримов Бахтиёр Шухратович',
    company: 'ООО Миградок',
    citizenship: 'Таджикистан',
    phone: '+7 (999) 234-56-78',
    email: 'karimov@example.com',
    patentExpires: '14.12.2026',
    documentStatus: 'Активен',
  },
  {
    id: 3,
    name: 'Ахмедов Рустам Фархадович',
    company: 'ООО РРМ',
    citizenship: 'Узбекистан',
    phone: '+7 (999) 345-67-89',
    email: 'akhmedov@example.com',
    patentExpires: '20.08.2026',
    documentStatus: 'Активен',
  },
  {
    id: 4,
    name: 'Юсупов Джамшид Анварович',
    company: 'ООО СтройПроект',
    citizenship: 'Таджикистан',
    phone: '+7 (999) 456-78-90',
    email: 'yusupov@example.com',
    patentExpires: '10.05.2026',
    documentStatus: 'Просрочен',
  },
]

const statusStyles = {
  'Активен': 'bg-green-100 text-green-800',
  'Требует обновления': 'bg-amber-100 text-amber-800',
  'Просрочен': 'bg-red-100 text-red-800',
}

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      {/* Заголовок */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Сотрудники</h2>
          <p className="text-slate-500 mt-1">
            Управление иностранными сотрудниками — 128 человек
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 transition text-slate-700">
            Импорт
          </button>
          <button className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 transition text-slate-700">
            Экспорт XLS
          </button>
          <button className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition">
            Добавить сотрудника
          </button>
        </div>
      </div>

      {/* Поиск и фильтры */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
        <div className="flex flex-wrap gap-3 items-center">
          <input
            placeholder="Поиск по ФИО, телефону, email..."
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 flex-1 min-w-[200px]"
          />
          <select className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
            <option value="">Все компании</option>
            <option>ООО РРМ</option>
            <option>ООО Миградок</option>
            <option>ООО СтройПроект</option>
          </select>
          <select className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
            <option value="">Все гражданства</option>
            <option>Узбекистан</option>
            <option>Таджикистан</option>
            <option>Кыргызстан</option>
          </select>
          <select className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
            <option value="">Все статусы</option>
            <option>Активен</option>
            <option>Требует обновления</option>
            <option>Просрочен</option>
          </select>
          <button className="px-4 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 transition text-slate-600">
            Сбросить
          </button>
        </div>
      </div>

      {/* Таблица */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Фото</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">ФИО</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Компания</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Гражданство</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Телефон</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Email</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Патент до</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Статус</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Действия</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((emp) => (
                <tr key={emp.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">
                      {emp.name.split(' ')[0][0]}{emp.name.split(' ')[1][0]}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">{emp.name}</td>
                  <td className="px-6 py-4 text-slate-600">{emp.company}</td>
                  <td className="px-6 py-4 text-slate-600">{emp.citizenship}</td>
                  <td className="px-6 py-4 text-slate-600">{emp.phone}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{emp.email}</td>
                  <td className="px-6 py-4 text-slate-700">{emp.patentExpires}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[emp.documentStatus]}`}>
                      {emp.documentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">
                        Открыть
                      </button>
                      <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">
                        Ред.
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Мобильные карточки */}
        <div className="lg:hidden divide-y divide-slate-100">
          {employeesData.map((emp) => (
            <div key={emp.id} className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm flex-shrink-0">
                  {emp.name.split(' ')[0][0]}{emp.name.split(' ')[1][0]}
                </div>
                <div>
                  <span className="font-medium text-slate-900 block">{emp.name}</span>
                  <span className="text-sm text-slate-500">{emp.company}</span>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${statusStyles[emp.documentStatus]}`}>
                  {emp.documentStatus}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-slate-500">Гражданство: <span className="text-slate-700">{emp.citizenship}</span></span>
                <span className="text-slate-500">Патент до: <span className="text-slate-700">{emp.patentExpires}</span></span>
                <span className="text-slate-500">Тел: <span className="text-slate-700">{emp.phone}</span></span>
                <span className="text-slate-500">Email: <span className="text-slate-700 text-xs">{emp.email}</span></span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm">Открыть</button>
                <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm">Редактировать</button>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200">
          <p className="text-sm text-slate-500">Показано 4 из 128 сотрудников</p>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition disabled:opacity-50" disabled>Назад</button>
            <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm">1</button>
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">2</button>
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">3</button>
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">Вперед</button>
          </div>
        </div>
      </div>
    </div>
  )
}
