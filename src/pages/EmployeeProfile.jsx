import { useState } from 'react'

const documentTypes = [
  'Уведомление о заключении/расторжении ТД',
  'Трудовой договор',
  'Договор ГПХ',
  'Уведомление о постановке на миграционный учет',
  'Информационное письмо в ГУ МВД',
  'Приказ об отстранении',
  'Платежное поручение',
  'Запрос в МИФНС',
  'Авансовые платежи',
  'Патент',
  'Миграционный учет',
]

const uploadedDocs = [
  { type: 'Патент', date: '12.01.2026', expires: '15.05.2026', status: 'Скоро истекает', size: '2.4 MB', files: 2 },
  { type: 'Трудовой договор', date: '10.01.2026', expires: '31.12.2026', status: 'Активен', size: '1.8 MB', files: 1 },
  { type: 'Авансовые платежи', date: '05.04.2026', expires: '05.05.2026', status: 'Просрочен', size: '0.9 MB', files: 3 },
]

const historyData = [
  { action: 'Загружен документ "Патент"', user: 'Петров А.В.', date: '12.01.2026 14:30' },
  { action: 'Изменено поле "Телефон"', user: 'Сидорова Е.Н.', date: '08.01.2026 10:15' },
  { action: 'Отправлено уведомление о сроке патента', user: 'Система', date: '05.04.2026 09:00' },
  { action: 'Экспорт данных сотрудника', user: 'Петров А.В.', date: '01.03.2026 16:45' },
]

const legalTips = {
  'Патент': 'Согласно ст. 13.3 ФЗ №115-ФЗ, патент выдается на срок от 1 до 12 месяцев. Иностранный гражданин обязан осуществлять ежемесячные авансовые платежи по НДФЛ для продления срока действия патента.',
  'Уведомление о заключении/расторжении ТД': 'В соответствии с п. 8 ст. 13 ФЗ №115-ФЗ, работодатель обязан уведомить территориальный орган МВД России о заключении или расторжении трудового договора с иностранным гражданином в срок, не превышающий 3 рабочих дней.',
  'Трудовой договор': 'Трудовой договор с иностранным гражданином должен содержать все обязательные условия, предусмотренные ст. 57 ТК РФ, а также учитывать особенности, установленные миграционным законодательством.',
}

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('info')

  const tabs = [
    { id: 'info', label: 'Основная информация' },
    { id: 'documents', label: 'Документы' },
    { id: 'history', label: 'История' },
    { id: 'notifications', label: 'Уведомления' },
  ]

  return (
    <div className="space-y-6">
      {/* Хлебные крошки и заголовок */}
      <div>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <button className="hover:text-slate-900 transition">Сотрудники</button>
          <span>/</span>
          <span className="text-slate-900">Иванов Алишер Рустамович</span>
        </div>
      </div>

      {/* Верхний блок профиля */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-2xl flex-shrink-0">
            ИА
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
              <h1 className="text-2xl font-bold text-slate-900">Иванов Алишер Рустамович</h1>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium w-fit">
                Требует обновления документов
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              <div>
                <span className="text-slate-500">Компания:</span>
                <span className="text-slate-900 ml-1">ООО РРМ</span>
              </div>
              <div>
                <span className="text-slate-500">Телефон:</span>
                <span className="text-slate-900 ml-1">+7 (999) 123-45-67</span>
              </div>
              <div>
                <span className="text-slate-500">Email:</span>
                <span className="text-slate-900 ml-1">ivanov@example.com</span>
              </div>
              <div>
                <span className="text-slate-500">Гражданство:</span>
                <span className="text-slate-900 ml-1">Узбекистан</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition text-sm">
              Редактировать
            </button>
            <button className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 transition text-sm">
              Скачать документы
            </button>
          </div>
        </div>
      </div>

      {/* Табы */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Основная информация */}
          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ФИО</label>
                <input
                  type="text"
                  defaultValue="Иванов Алишер Рустамович"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Пол</label>
                <select className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
                  <option>Мужской</option>
                  <option>Женский</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Гражданство</label>
                <select className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
                  <option>Узбекистан</option>
                  <option>Таджикистан</option>
                  <option>Кыргызстан</option>
                  <option>Казахстан</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Дата рождения</label>
                <input
                  type="date"
                  defaultValue="1990-03-15"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Место рождения</label>
                <input
                  type="text"
                  defaultValue="г. Ташкент"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Компания</label>
                <select className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
                  <option>ООО РРМ</option>
                  <option>ООО Миградок</option>
                  <option>ООО СтройПроект</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                <input
                  type="tel"
                  defaultValue="+7 (999) 123-45-67"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Электронная почта</label>
                <input
                  type="email"
                  defaultValue="ivanov@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Адрес регистрации</label>
                <input
                  type="text"
                  defaultValue="г. Москва, ул. Примерная, д. 1, кв. 10"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-slate-900" />
                  <span className="text-sm text-slate-700">Согласие на обработку персональных данных</span>
                </label>
              </div>
              <div className="md:col-span-2">
                <button className="px-6 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition">
                  Сохранить изменения
                </button>
              </div>
            </div>
          )}

          {/* Документы */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              {/* Upload зона */}
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-8 text-center hover:border-slate-400 transition cursor-pointer bg-slate-50/50">
                <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">Перетащите файлы сюда или нажмите для выбора</p>
                <p className="text-sm text-slate-500 mt-1">До 5 файлов на каждый тип документа, до 20 MB каждый</p>
                <select className="mt-4 px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
                  <option value="">Выберите тип документа</option>
                  {documentTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Таблица документов */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Тип документа</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Дата загрузки</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Дата окончания</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Статус</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Размер</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Файлы</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploadedDocs.map((doc, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-900 text-sm font-medium">{doc.type}</span>
                            <button className="relative group" title={legalTips[doc.type] || 'Нет подсказки'}>
                              <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs text-slate-400 group-hover:border-slate-500 group-hover:text-slate-600 transition cursor-help">
                                ?
                              </span>
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">{doc.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={doc.status === 'Просрочен' ? 'text-red-600 font-medium' : 'text-slate-700'}>
                            {doc.expires}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            doc.status === 'Активен' ? 'bg-green-100 text-green-800' :
                            doc.status === 'Скоро истекает' ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {doc.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">{doc.size}</td>
                        <td className="px-4 py-3 text-sm text-slate-600">{doc.files}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs hover:bg-slate-50 transition">Скачать</button>
                            <button className="px-3 py-1.5 rounded-xl border border-red-300 text-red-600 text-xs hover:bg-red-50 transition">Удалить</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* История */}
          {activeTab === 'history' && (
            <div className="space-y-3">
              {historyData.map((item, i) => (
                <div key={i} className="flex items-center justify-between border border-slate-200 rounded-2xl p-4 hover:border-slate-300 transition">
                  <div>
                    <p className="text-slate-900 font-medium text-sm">{item.action}</p>
                    <p className="text-slate-500 text-xs mt-1">{item.user}</p>
                  </div>
                  <span className="text-sm text-slate-500">{item.date}</span>
                </div>
              ))}
            </div>
          )}

          {/* Уведомления */}
          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border border-slate-200 rounded-2xl p-4">
                <div>
                  <h4 className="font-medium text-slate-900">Email уведомления</h4>
                  <p className="text-sm text-slate-500 mt-1">Уведомления о завершении сроков документов сотрудника</p>
                </div>
                <div className="w-14 h-8 bg-slate-900 rounded-full flex items-center px-1 justify-end">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between border border-slate-200 rounded-2xl p-4">
                <div>
                  <h4 className="font-medium text-slate-900">Уведомления о загрузке документов</h4>
                  <p className="text-sm text-slate-500 mt-1">Оповещения при загрузке новых документов сотрудника</p>
                </div>
                <div className="w-14 h-8 bg-slate-300 rounded-full flex items-center px-1">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
