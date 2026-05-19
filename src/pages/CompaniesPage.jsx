// src/pages/CompaniesPage.jsx
const companies = [
  { id: 1, name: 'ООО РРМ', inn: '7701234567', employees: 45, status: 'Активна', responsible: 'Петров Алексей Владимирович', address: 'г. Москва, ул. Строителей, д. 15' },
  { id: 2, name: 'ООО Миградок', inn: '7702345678', employees: 32, status: 'Активна', responsible: 'Сидорова Елена Николаевна', address: 'г. Санкт-Петербург, пр. Невский, д. 100' },
  { id: 3, name: 'ООО СтройПроект', inn: '7703456789', employees: 51, status: 'Активна', responsible: 'Иванова Мария Сергеевна', address: 'г. Москва, ул. Рабочая, д. 42' },
  { id: 4, name: 'ООО ТехноСервис', inn: '7704567890', employees: 0, status: 'Закрыта', responsible: 'Петров Алексей Владимирович', address: 'г. Казань, ул. Центральная, д. 7' },
]

export default function CompaniesPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-[28px] font-bold text-[#1F1F1F]">Компании</h2>
          <p className="text-[12px] text-gray-500 mt-1">Управление организациями — 5 компаний</p>
        </div>
        <button className="h-[38px] px-6 bg-[#256F63] text-white rounded-[2px] text-sm font-medium transition">
          Добавить компанию
        </button>
      </div>

      <div className="bg-white border border-[#DCDCDC] rounded-[2px] px-4 py-3">
        <input
          placeholder="Поиск по названию, ИНН..."
          className="w-full h-[36px] border border-[#DCDCDC] rounded-[2px] px-3 text-sm outline-none focus:border-[#2E8B7B]"
        />
      </div>

      {/* Адаптивная сетка: одна колонка на мобильных, две на больших экранах */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {companies.map((c) => (
          <div
            key={c.id}
            className={`bg-white border rounded-[2px] p-5 flex flex-col ${
              c.status === 'Закрыта' ? 'border-[#ECECEC] opacity-60' : 'border-[#DCDCDC]'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{c.name}</h3>
                <p className="text-sm text-gray-500">ИНН: {c.inn}</p>
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  c.status === 'Активна' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {c.status}
              </span>
            </div>

            <div className="space-y-2 text-sm flex-1">
              <div className="flex justify-between">
                <span className="text-gray-500">Сотрудников:</span>
                <span className="font-medium">{c.employees}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Ответственный:</span>
                <span className="text-right">{c.responsible}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 flex-shrink-0">Адрес:</span>
                <span className="text-right ml-2 break-words">{c.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#ECECEC]">
              <button className="h-[38px] px-4 bg-[#256F63] text-white rounded-[2px] text-sm transition">
                Открыть
              </button>
              <button className="h-[38px] px-4 border border-[#DCDCDC] rounded-[2px] text-sm hover:bg-gray-50 transition">
                Редактировать
              </button>
              {c.status === 'Активна' && (
                <button className="h-[38px] px-4 border border-[#F39A32] text-[#F39A32] rounded-[2px] text-sm hover:bg-[#FFF3E0] transition">
                  Закрыть
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}