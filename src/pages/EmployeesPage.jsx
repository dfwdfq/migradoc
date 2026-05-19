// src/pages/EmployeesPage.jsx
const employeesData = [
  { id: 1, name: 'Иванов Алишер Рустамович', company: 'ООО РРМ', citizenship: 'Узбекистан', phone: '+7 (999) 123-45-67', email: 'ivanov@example.com', patentExpires: '15.05.2026', documentStatus: 'Требует обновления' },
  { id: 2, name: 'Каримов Бахтиёр Шухратович', company: 'ООО Миградок', citizenship: 'Таджикистан', phone: '+7 (999) 234-56-78', email: 'karimov@example.com', patentExpires: '14.12.2026', documentStatus: 'Активен' },
  { id: 3, name: 'Ахмедов Рустам Фархадович', company: 'ООО РРМ', citizenship: 'Узбекистан', phone: '+7 (999) 345-67-89', email: 'akhmedov@example.com', patentExpires: '20.08.2026', documentStatus: 'Активен' },
  { id: 4, name: 'Юсупов Джамшид Анварович', company: 'ООО СтройПроект', citizenship: 'Таджикистан', phone: '+7 (999) 456-78-90', email: 'yusupov@example.com', patentExpires: '10.05.2026', documentStatus: 'Просрочен' },
  { id: 5, name: 'Мирзоев Фаррух Олимович', company: 'ООО Миградок', citizenship: 'Узбекистан', phone: '+7 (999) 567-89-01', email: 'mirzoev@example.com', patentExpires: '01.11.2026', documentStatus: 'Активен' },
]

const statusStyles = {
  'Активен': 'bg-green-100 text-green-800',
  'Требует обновления': 'bg-amber-100 text-amber-800',
  'Просрочен': 'bg-red-100 text-red-800',
}

export default function EmployeesPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-[28px] font-bold text-[#1F1F1F]">Сотрудники</h2>
          <p className="text-[12px] text-gray-500 mt-1">Управление иностранными сотрудниками — 128 человек</p>
        </div>
        <div className="flex gap-2">
          <button className="h-[38px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Импорт</button>
          <button className="h-[38px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Экспорт XLS</button>
          <button className="h-[38px] px-6 bg-[#256F63] text-white rounded-[2px] text-sm font-medium hover:bg-[#2E8B7B] transition">Добавить сотрудника</button>
        </div>
      </div>

      <div className="bg-white border border-migra-border rounded-[2px] px-4 py-3 flex flex-wrap gap-3">
        <input placeholder="Поиск по ФИО, телефону, email..." className="h-[36px] border border-migra-border rounded-[2px] px-3 text-sm flex-1 min-w-[200px] outline-none focus:border-migra-secondary" />
        <select className="h-[36px] border border-migra-border rounded-[2px] px-2 text-sm"><option>Все компании</option></select>
        <select className="h-[36px] border border-migra-border rounded-[2px] px-2 text-sm"><option>Все гражданства</option></select>
        <select className="h-[36px] border border-migra-border rounded-[2px] px-2 text-sm"><option>Все статусы</option></select>
        <button className="h-[32px] px-4 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Сбросить</button>
      </div>

      <div className="bg-white border border-migra-border rounded-[2px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#ECECEC] bg-[#FAFAFA]">
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Фото</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">ФИО</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Компания</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Гражданство</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Телефон</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Email</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Патент до</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Статус</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Действия</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((emp) => (
                <tr key={emp.id} className="border-b border-[#ECECEC] hover:bg-[#F9F9F9] transition">
                  <td className="px-4 py-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#E5E5E5] flex items-center justify-center text-xs font-medium text-gray-600">
                      {emp.name.split(' ')[0][0]}{emp.name.split(' ')[1][0]}
                    </div>
                  </td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">{emp.name}</td>
                  <td className="px-4 py-2.5 text-gray-500">{emp.company}</td>
                  <td className="px-4 py-2.5">{emp.citizenship}</td>
                  <td className="px-4 py-2.5">{emp.phone}</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">{emp.email}</td>
                  <td className="px-4 py-2.5">{emp.patentExpires}</td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[emp.documentStatus] || 'bg-gray-100 text-gray-600'}`}>
                      {emp.documentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex gap-2">
                      <button className="h-[32px] px-3 border border-migra-border rounded-[2px] text-xs hover:bg-gray-50">Открыть</button>
                      <button className="h-[32px] px-3 border border-migra-border rounded-[2px] text-xs hover:bg-gray-50">Ред.</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#ECECEC] text-sm">
          <span className="text-gray-500">Показано 5 из 128 сотрудников</span>
          <div className="flex gap-1">
            <button className="h-[32px] px-3 border border-migra-border rounded-[2px] text-xs disabled:opacity-50" disabled>Назад</button>
            <button className="h-[32px] w-[32px] bg-migra-secondary text-white rounded-[2px] text-xs font-medium">1</button>
            <button className="h-[32px] w-[32px] border border-migra-border rounded-[2px] text-xs hover:bg-gray-50">2</button>
            <button className="h-[32px] w-[32px] border border-migra-border rounded-[2px] text-xs hover:bg-gray-50">3</button>
            <button className="h-[32px] px-3 border border-migra-border rounded-[2px] text-xs hover:bg-gray-50">Вперед</button>
          </div>
        </div>
      </div>
    </div>
  )
}
