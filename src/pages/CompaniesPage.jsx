const companiesData = [
  {
    id: 1,
    name: 'ООО РРМ',
    inn: '7701234567',
    employees: 45,
    status: 'Активна',
    responsible: 'Петров Алексей Владимирович',
    address: 'г. Москва, ул. Строителей, д. 15',
  },
  {
    id: 2,
    name: 'ООО Миградок',
    inn: '7702345678',
    employees: 32,
    status: 'Активна',
    responsible: 'Сидорова Елена Николаевна',
    address: 'г. Санкт-Петербург, пр. Невский, д. 100',
  },
  {
    id: 3,
    name: 'ООО СтройПроект',
    inn: '7703456789',
    employees: 51,
    status: 'Активна',
    responsible: 'Иванова Мария Сергеевна',
    address: 'г. Москва, ул. Рабочая, д. 42',
  },
  {
    id: 4,
    name: 'ООО ТехноСервис',
    inn: '7704567890',
    employees: 0,
    status: 'Закрыта',
    responsible: 'Петров Алексей Владимирович',
    address: 'г. Казань, ул. Центральная, д. 7',
  },
]

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Компании</h2>
          <p className="text-slate-500 mt-1">Управление организациями — 5 компаний</p>
        </div>
        <button className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition">
          Добавить компанию
        </button>
      </div>

      {/* Поиск */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
        <input
          placeholder="Поиск по названию, ИНН..."
          className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
        />
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companiesData.map((company) => (
          <div
            key={company.id}
            className={`bg-white rounded-3xl border shadow-sm p-6 transition hover:border-slate-300 ${
              company.status === 'Закрыта' ? 'border-slate-200 opacity-75' : 'border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{company.name}</h3>
                <p className="text-sm text-slate-500 mt-1">ИНН: {company.inn}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                company.status === 'Активна' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'
              }`}>
                {company.status}
              </span>
            </div>

            <div className="space-y-2 text-sm text-slate-600 mb-5">
              <div className="flex justify-between">
                <span className="text-slate-500">Сотрудников:</span>
                <span className="text-slate-900 font-medium">{company.employees}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ответственный:</span>
                <span className="text-slate-900">{company.responsible}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Адрес:</span>
                <span className="text-slate-900 text-right max-w-[60%]">{company.address}</span>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
                Открыть
              </button>
              <button className="px-4 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">
                Редактировать
              </button>
              {company.status === 'Активна' && (
                <button className="px-4 py-2 rounded-xl border border-red-300 text-red-600 text-sm hover:bg-red-50 transition">
                  Закрыть организацию
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
