// src/pages/EmployeeProfile.jsx
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
]

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('info')

  const tabs = [
    { id: 'info', label: 'Основная информация' },
    { id: 'documents', label: 'Документы' },
    { id: 'history', label: 'История' },
    { id: 'notifications', label: 'Уведомления' },
  ]

  return (
    <div className="space-y-4">
      <div className="text-xs text-gray-500">
        <button className="hover:text-migra-secondary transition">Сотрудники</button> / Иванов Алишер Рустамович
      </div>

      <div className="bg-white border border-migra-border rounded-[2px] p-5 flex flex-col sm:flex-row gap-4 items-start">
        <div className="w-16 h-16 rounded-full bg-[#E5E5E5] flex items-center justify-center text-xl font-bold text-gray-600">ИА</div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-xl font-bold text-gray-800">Иванов Алишер Рустамович</h1>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Требует обновления</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 text-sm">
            <div><span className="text-gray-500">Компания:</span> ООО РРМ</div>
            <div><span className="text-gray-500">Телефон:</span> +7 (999) 123-45-67</div>
            <div><span className="text-gray-500">Email:</span> ivanov@example.com</div>
            <div><span className="text-gray-500">Гражданство:</span> Узбекистан</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="h-[38px] px-5 bg-migra-secondary text-white rounded-[2px] text-sm font-medium hover:bg-[#256F63]">Редактировать</button>
          <button className="h-[38px] px-5 border border-migra-border rounded-[2px] text-sm hover:bg-gray-50">Скачать документы</button>
        </div>
      </div>

      <div className="bg-white border border-migra-border rounded-[2px] overflow-hidden">
        <div className="flex border-b border-migra-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-[42px] px-5 text-sm font-medium relative transition ${
                activeTab === tab.id ? 'text-migra-secondary' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-migra-secondary" />}
            </button>
          ))}
        </div>

        <div className="p-5">
          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">ФИО</label>
                <input defaultValue="Иванов Алишер Рустамович" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Пол</label>
                <select className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm">
                  <option>Мужской</option>
                  <option>Женский</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Гражданство</label>
                <select className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm">
                  <option>Узбекистан</option>
                  <option>Таджикистан</option>
                  <option>Кыргызстан</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Дата рождения</label>
                <input type="date" defaultValue="1990-03-15" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Телефон</label>
                <input type="tel" defaultValue="+7 (999) 123-45-67" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" defaultValue="ivanov@example.com" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked className="rounded-[2px] border-migra-border" />
                  Согласие на обработку персональных данных
                </label>
              </div>
              <div className="md:col-span-2">
                <button className="h-[38px] px-6 bg-migra-secondary text-white rounded-[2px] text-sm font-medium hover:bg-[#256F63]">Сохранить изменения</button>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-5">
              <div className="border border-dashed border-migra-border rounded-[2px] p-6 text-center bg-[#FAFAFA]">
                <p className="text-sm font-medium">Перетащите файлы сюда или нажмите для выбора</p>
                <p className="text-xs text-gray-500 mt-1">До 5 файлов на каждый тип документа, до 20 MB каждый</p>
                <select className="mt-3 h-[36px] border border-migra-border rounded-[2px] px-3 text-sm">
                  <option value="">Выберите тип документа</option>
                  {documentTypes.slice(0,5).map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#ECECEC]">
                    <th className="text-left px-3 py-2 font-medium text-gray-500">Тип</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-500">Дата загрузки</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-500">Окончание</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-500">Статус</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-500">Размер</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-500">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedDocs.map((doc, i) => (
                    <tr key={i} className="border-b border-[#ECECEC]">
                      <td className="px-3 py-2 font-medium">{doc.type}</td>
                      <td className="px-3 py-2">{doc.date}</td>
                      <td className="px-3 py-2 text-migra-warning">{doc.expires}</td>
                      <td className="px-3 py-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          doc.status === 'Активен' ? 'bg-green-100 text-green-800' :
                          doc.status === 'Скоро истекает' ? 'bg-amber-100 text-amber-800' :
                          'bg-red-100 text-red-800'
                        }`}>{doc.status}</span>
                      </td>
                      <td className="px-3 py-2 text-gray-500">{doc.size}</td>
                      <td className="px-3 py-2">
                        <button className="text-xs text-migra-secondary hover:underline mr-2">Скачать</button>
                        <button className="text-xs text-red-600 hover:underline">Удалить</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-2">
              {historyData.map((h, i) => (
                <div key={i} className="flex justify-between items-center border-b border-[#ECECEC] py-2 text-sm">
                  <div>
                    <p className="font-medium">{h.action}</p>
                    <p className="text-xs text-gray-500">{h.user}</p>
                  </div>
                  <span className="text-xs text-gray-500">{h.date}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center border border-migra-border rounded-[2px] p-3">
                <div>
                  <p className="text-sm font-medium">Email уведомления</p>
                  <p className="text-xs text-gray-500">Уведомления о завершении сроков документов</p>
                </div>
                <div className="w-10 h-6 bg-migra-secondary rounded-full flex items-center px-0.5">
                  <div className="w-5 h-5 bg-white rounded-full ml-auto" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}