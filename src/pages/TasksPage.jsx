const tasksData = [
  {
    id: 1,
    employee: 'Иванов Алишер Рустамович',
    document: 'Патент',
    expires: '15.05.2026',
    company: 'ООО РРМ',
    status: 'Скоро истекает',
    responsible: 'Петров А.В.',
  },
  {
    id: 2,
    employee: 'Каримов Бахтиёр Шухратович',
    document: 'Миграционный учет',
    expires: '14.05.2026',
    company: 'ООО Миградок',
    status: 'Просрочено',
    responsible: 'Сидорова Е.Н.',
  },
  {
    id: 3,
    employee: 'Ахмедов Рустам Фархадович',
    document: 'Авансовый платеж',
    expires: '20.05.2026',
    company: 'ООО РРМ',
    status: 'Активно',
    responsible: 'Петров А.В.',
  },
  {
    id: 4,
    employee: 'Юсупов Джамшид Анварович',
    document: 'Трудовой договор',
    expires: '10.05.2026',
    company: 'ООО СтройПроект',
    status: 'Просрочено',
    responsible: 'Иванова М.С.',
  },
  {
    id: 5,
    employee: 'Мирзоев Фаррух Олимович',
    document: 'Патент',
    expires: '25.06.2026',
    company: 'ООО Миградок',
    status: 'Активно',
    responsible: 'Сидорова Е.Н.',
  },
]

const statusStyles = {
  'Активно': 'bg-green-100 text-green-800',
  'Скоро истекает': 'bg-amber-100 text-amber-800',
  'Просрочено': 'bg-red-100 text-red-800',
  'Выполнено': 'bg-slate-100 text-slate-600',
}

export default function TasksPage() {
  return (
    <div className="space-y-6">
      {/* Заголовок */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Задачи</h2>
          <p className="text-slate-500 mt-1">
            Контроль сроков документов и управление задачами
          </p>
        </div>
        <button className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition self-start">
          Экспорт XLS
        </button>
      </div>

      {/* Панель фильтров */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
        <div className="flex flex-wrap gap-3 items-center">
          <input
            placeholder="Поиск по сотруднику или документу..."
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 flex-1 min-w-[200px]"
          />
          <select className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
            <option value="">Все типы документов</option>
            <option>Патент</option>
            <option>Миграционный учет</option>
            <option>Авансовый платеж</option>
            <option>Трудовой договор</option>
            <option>Уведомление МВД</option>
          </select>
          <select className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
            <option value="">Все компании</option>
            <option>ООО РРМ</option>
            <option>ООО Миградок</option>
            <option>ООО СтройПроект</option>
          </select>
          <select className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
            <option value="">Все статусы</option>
            <option>Активно</option>
            <option>Скоро истекает</option>
            <option>Просрочено</option>
            <option>Выполнено</option>
          </select>
          <button className="px-4 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 transition text-slate-600">
            Сбросить
          </button>
        </div>
      </div>

      {/* Таблица задач */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Таблица для desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Сотрудник</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Документ</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Компания</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Дата окончания</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Ответственный</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Статус</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Действия</th>
              </tr>
            </thead>
            <tbody>
              {tasksData.map((task) => (
                <tr key={task.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{task.employee}</td>
                  <td className="px-6 py-4 text-slate-600">{task.document}</td>
                  <td className="px-6 py-4 text-slate-600">{task.company}</td>
                  <td className="px-6 py-4">
                    <span className={task.status === 'Просрочено' ? 'text-red-600 font-medium' : 'text-slate-700'}>
                      {task.expires}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{task.responsible}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[task.status]}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
                        Загрузить
                      </button>
                      <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">
                        Карточка
                      </button>
                      {task.status === 'Просрочено' && (
                        <button className="px-3 py-2 rounded-xl border border-red-300 text-red-600 text-sm hover:bg-red-50 transition">
                          Приказ
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Карточки для мобильных */}
        <div className="md:hidden divide-y divide-slate-100">
          {tasksData.map((task) => (
            <div key={task.id} className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-900">{task.employee}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[task.status]}`}>
                  {task.status}
                </span>
              </div>
              <div className="flex gap-4 text-sm text-slate-500">
                <span>{task.document}</span>
                <span>·</span>
                <span>{task.company}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Срок: <span className={task.status === 'Просрочено' ? 'text-red-600 font-medium' : 'text-slate-700'}>{task.expires}</span></span>
                <span className="text-slate-500">{task.responsible}</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm">Загрузить</button>
                <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm">Карточка</button>
                {task.status === 'Просрочено' && (
                  <button className="px-3 py-2 rounded-xl border border-red-300 text-red-600 text-sm">Приказ</button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200">
          <p className="text-sm text-slate-500">Показано 5 из 24 задач</p>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition disabled:opacity-50" disabled>
              Назад
            </button>
            <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm">1</button>
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">2</button>
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">3</button>
            <button className="px-3 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">
              Вперед
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
