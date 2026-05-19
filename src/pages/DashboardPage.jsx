// src/pages/DashboardPage.jsx
export default function DashboardPage() {
  const tasks = [
    { employee: 'Иванов Алишер Рустамович', document: 'Патент', expires: '15.05.2026', company: 'ООО РРМ' },
    { employee: 'Каримов Бахтиёр Шухратович', document: 'Миграционный учет', expires: '14.05.2026', company: 'ООО Миградок' }
  ]

  const employees = [
    { name: 'Иванов Алишер Рустамович', company: 'ООО РРМ', status: 'Активен' },
    { name: 'Каримов Бахтиёр Шухратович', company: 'ООО Миградок', status: 'Требует обновления' }
  ]

  return (
    <div className="space-y-4">
      {/* Заголовок и поиск */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-bold text-[#1F1F1F]">Панель задач</h2>
          <p className="text-[12px] text-gray-500 mt-1">Контроль сроков документов иностранных сотрудников</p>
        </div>
        <div className="flex gap-3">
          <input
            placeholder="Поиск задач"
            className="h-[36px] border border-migra-border rounded-[2px] px-3 text-sm w-64 outline-none focus:border-migra-secondary"
          />
            <button className="h-[38px] px-6 bg-[#256F63] text-white rounded-[2px] text-sm font-medium transition hover:bg-[#2E8B7B]">
            Добавить сотрудника 
          </button>
        </div>
      </div>

      {/* KPI карточки */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Активные задачи', value: '24' },
          { label: 'Сотрудники', value: '128' },
          { label: 'Компании', value: '5' }
        ].map(item => (
          <div key={item.label} className="bg-white border border-migra-border rounded-[2px] px-4 py-5">
            <p className="text-[12px] text-gray-500">{item.label}</p>
            <p className="text-[28px] font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Задачи по документам */}
      <div className="bg-white border border-migra-border rounded-[2px] px-4 py-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-[18px] font-semibold">Задачи по документам</h3>
            <p className="text-[12px] text-gray-500">Уведомления отправляются по e-mail</p>
          </div>
          <div className="flex gap-2">
            <button className="h-[32px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Фильтр</button>
            <button className="h-[32px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Сортировка</button>
          </div>
        </div>

        <div className="space-y-3">
          {tasks.map((task, i) => (
            <div key={i} className="border border-[#ECECEC] rounded-[2px] px-4 py-3 flex justify-between items-center">
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <span className="px-2 py-0.5 bg-[#FFF3E0] text-migra-warning text-xs rounded-full">Требует обновления</span>
                  <span className="text-sm text-gray-500">{task.company}</span>
                </div>
                <h4 className="font-semibold text-sm">{task.employee}</h4>
                <p className="text-sm text-gray-800">Документ: {task.document}</p>
                <p className="text-sm text-migra-warning">Срок окончания: {task.expires}</p>
              </div>
              <div className="flex gap-2">
                <button className="h-[38px] px-4 bg-[#256F63] text-white rounded-[2px] text-sm hover:bg-[#2E8B7B]">Загрузить</button>
                <button className="h-[38px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Карточка</button>
                <button className="h-[38px] px-4 border border-migra-warning text-migra-warning rounded-[2px] text-sm hover:bg-[#FFF3E0]">Приказ</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Нижние блоки: Сотрудники и Настройка уведомлений */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-migra-border rounded-[2px] px-4 py-5">
          <h3 className="text-[18px] font-semibold mb-4">Сотрудники</h3>
          {employees.map((e, i) => (
            <div key={i} className="flex justify-between items-center border-b border-[#ECECEC] py-2 last:border-0">
              <div>
                <p className="text-sm font-medium">{e.name}</p>
                <p className="text-[12px] text-gray-500">{e.company}</p>
              </div>
              <span className="text-sm text-gray-500">{e.status}</span>
            </div>
          ))}
        </div>

        <div className="bg-white border border-migra-border rounded-[2px] px-4 py-5">
          <h3 className="text-[18px] font-semibold mb-4">Настройка уведомлений</h3>
          <div className="flex justify-between items-center py-3 border-b border-[#ECECEC]">
            <div>
              <p className="text-sm font-medium">Email уведомления</p>
              <p className="text-[12px] text-gray-500">Уведомления о завершении сроков</p>
            </div>
            <div className="w-10 h-6 bg-migra-secondary rounded-full flex items-center px-0.5">
              <div className="w-5 h-5 bg-white rounded-full ml-auto" />
            </div>
          </div>
          <div className="mt-4 p-3 bg-[#F9F9F9] border border-[#ECECEC] rounded-[2px] text-sm text-gray-500">
            Telegram уведомления исключены из системы.
          </div>
        </div>
      </div>
    </div>
  )
}
