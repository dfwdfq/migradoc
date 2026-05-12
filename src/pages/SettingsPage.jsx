// src/pages/SettingsPage.jsx
import { useState } from 'react'

const users = [
  { email: 'admin@migraskop.ru', role: 'Администратор', status: 'Активен', access: 'Полный доступ' },
  { email: 'manager@migraskop.ru', role: 'Менеджер', status: 'Активен', access: 'Чтение и загрузка' },
  { email: 'viewer@migraskop.ru', role: 'Наблюдатель', status: 'Заблокирован', access: 'Только чтение' },
]

const personalDocs = [
  { name: 'Договор с платформой.pdf', date: '10.01.2026', size: '1.2 MB' },
  { name: 'Акт выполненных работ.pdf', date: '15.03.2026', size: '0.8 MB' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('tariff')

  const tabs = [
    { id: 'tariff', label: 'Тариф' },
    { id: 'access', label: 'Права доступа' },
    { id: 'notifications', label: 'Уведомления' },
    { id: 'documents', label: 'Документы' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold text-[#1F1F1F]">Личный кабинет</h2>
      <div className="bg-white border border-migra-border rounded-[2px] overflow-hidden">
        <div className="flex border-b border-migra-border">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`h-[42px] px-5 text-sm font-medium relative transition ${
                activeTab === t.id ? 'text-migra-secondary' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {t.label}
              {activeTab === t.id && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-migra-secondary" />}
            </button>
          ))}
        </div>

        <div className="p-5">
          {activeTab === 'tariff' && (
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-migra-border rounded-[2px] p-4 text-center">
                  <p className="text-xs text-gray-500">Сотрудников</p>
                  <p className="text-2xl font-bold">120 / 200</p>
                </div>
                <div className="border border-migra-border rounded-[2px] p-4 text-center">
                  <p className="text-xs text-gray-500">Компаний</p>
                  <p className="text-2xl font-bold">5 / 10</p>
                </div>
                <div className="border border-migra-border rounded-[2px] p-4 text-center">
                  <p className="text-xs text-gray-500">Пользователей</p>
                  <p className="text-2xl font-bold">3 / 5</p>
                </div>
              </div>
              <div className="border border-migra-border rounded-[2px] p-5">
                <h3 className="font-semibold mb-3">Текущий тариф: Бизнес</h3>
                <div className="flex gap-3">
                  {['Базовый 5 000 ₽', 'Бизнес 12 000 ₽', 'Корпоративный 25 000 ₽'].map((t, i) => (
                    <div key={i} className={`flex-1 border rounded-[2px] p-3 text-sm ${i === 1 ? 'border-migra-secondary bg-[#F0FAF8]' : 'border-migra-border'}`}>
                      <p className="font-medium">{t.split(' ')[0]}</p>
                      <p className="text-xs text-gray-500">{50*i+50} сотрудников</p>
                      <p className="text-lg font-bold mt-1">{t.split(' ')[1]} ₽/мес</p>
                      {i === 1 && <span className="text-xs text-migra-secondary">Активен</span>}
                    </div>
                  ))}
                </div>
                <button className="mt-4 h-[38px] px-6 bg-migra-secondary text-white rounded-[2px] text-sm hover:bg-[#256F63]">Изменить тариф</button>
              </div>
            </div>
          )}

          {activeTab === 'access' && (
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Управление пользователями</span>
                <button className="h-[38px] px-4 bg-migra-secondary text-white rounded-[2px] text-sm">Добавить</button>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#ECECEC]">
                    <th className="text-left py-2 font-medium text-gray-500">Email</th>
                    <th className="text-left py-2 font-medium text-gray-500">Роль</th>
                    <th className="text-left py-2 font-medium text-gray-500">Статус</th>
                    <th className="text-left py-2 font-medium text-gray-500">Доступ</th>
                    <th className="text-left py-2 font-medium text-gray-500">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={i} className="border-b border-[#ECECEC]">
                      <td className="py-2">{u.email}</td>
                      <td>{u.role}</td>
                      <td>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          u.status === 'Активен' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>{u.status}</span>
                      </td>
                      <td>{u.access}</td>
                      <td>
                        <button className="text-xs text-migra-secondary mr-2">Ред.</button>
                        <button className="text-xs text-red-600">Блок.</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-3">
              <p className="text-xs text-gray-500">Telegram уведомления исключены из системы.</p>
              {['Email уведомления', 'Системные уведомления'].map((item, i) => (
                <div key={i} className="flex justify-between items-center border border-migra-border rounded-[2px] p-3">
                  <span className="text-sm">{item}</span>
                  <div className={`w-10 h-6 rounded-full flex items-center px-0.5 ${i === 0 ? 'bg-migra-secondary' : 'bg-gray-300'}`}>
                    <div className={`w-5 h-5 bg-white rounded-full ${i === 0 ? 'ml-auto' : ''}`} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-3">
              <div className="border border-dashed border-migra-border rounded-[2px] p-6 text-center">
                <p className="text-sm font-medium">Загрузить документ</p>
                <p className="text-xs text-gray-500">Акты, договоры, справки</p>
              </div>
              {personalDocs.map((doc, i) => (
                <div key={i} className="flex justify-between items-center border-b border-[#ECECEC] py-2">
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.date} · {doc.size}</p>
                  </div>
                  <button className="text-xs text-migra-secondary hover:underline">Скачать</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}