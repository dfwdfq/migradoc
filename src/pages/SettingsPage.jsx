import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('tariff')

  const tabs = [
    { id: 'tariff', label: 'Тариф' },
    { id: 'access', label: 'Права доступа' },
    { id: 'notifications', label: 'Настройка уведомлений' },
    { id: 'documents', label: 'Документы' },
  ]

  const users = [
    { email: 'admin@migradoc.ru', role: 'Администратор', status: 'Активен', access: 'Полный доступ' },
    { email: 'manager@migradoc.ru', role: 'Менеджер', status: 'Активен', access: 'Чтение и загрузка' },
    { email: 'viewer@migradoc.ru', role: 'Наблюдатель', status: 'Заблокирован', access: 'Только чтение' },
  ]

  const personalDocs = [
    { name: 'Договор с платформой.pdf', date: '10.01.2026', size: '1.2 MB' },
    { name: 'Акт выполненных работ.pdf', date: '15.03.2026', size: '0.8 MB' },
    { name: 'Справка о тарифе.pdf', date: '01.04.2026', size: '0.3 MB' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Личный кабинет</h2>
        <p className="text-slate-500 mt-1">Настройки аккаунта и тарифа</p>
      </div>

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
          {/* Тариф */}
          {activeTab === 'tariff' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                  <p className="text-sm text-slate-500">Сотрудников</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">120 / 200</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                    <div className="bg-slate-900 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                  <p className="text-sm text-slate-500">Компаний</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">5 / 10</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                    <div className="bg-slate-900 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                  <p className="text-sm text-slate-500">Пользователей</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">3 / 5</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                    <div className="bg-slate-900 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5">
                <h4 className="font-semibold text-slate-900 mb-3">Текущий тариф: Бизнес</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex-1 min-w-[200px] border border-slate-200 rounded-2xl p-4 hover:border-slate-400 transition cursor-pointer">
                    <p className="font-medium text-slate-900">Базовый</p>
                    <p className="text-sm text-slate-500 mt-1">50 сотрудников · 3 компании</p>
                    <p className="text-lg font-bold text-slate-900 mt-2">5 000 ₽/мес</p>
                  </div>
                  <div className="flex-1 min-w-[200px] border-2 border-slate-900 rounded-2xl p-4 bg-slate-50">
                    <p className="font-medium text-slate-900">Бизнес</p>
                    <p className="text-sm text-slate-500 mt-1">200 сотрудников · 10 компаний</p>
                    <p className="text-lg font-bold text-slate-900 mt-2">12 000 ₽/мес</p>
                    <span className="text-xs text-green-600 font-medium">Текущий</span>
                  </div>
                  <div className="flex-1 min-w-[200px] border border-slate-200 rounded-2xl p-4 hover:border-slate-400 transition cursor-pointer">
                    <p className="font-medium text-slate-900">Корпоративный</p>
                    <p className="text-sm text-slate-500 mt-1">500+ сотрудников · ∞ компаний</p>
                    <p className="text-lg font-bold text-slate-900 mt-2">25 000 ₽/мес</p>
                  </div>
                </div>
                <button className="mt-5 px-6 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition">
                  Изменить тариф
                </button>
              </div>
            </div>
          )}

          {/* Права доступа */}
          {activeTab === 'access' && (
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500">Управление пользователями и их правами</p>
                <button className="px-4 py-3 rounded-2xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
                  Добавить пользователя
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Email</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Роль</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Статус</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Доступ</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-slate-500">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                        <td className="px-4 py-3 text-sm text-slate-900">{user.email}</td>
                        <td className="px-4 py-3 text-sm text-slate-600">{user.role}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Активен' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">{user.access}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs hover:bg-slate-50 transition">Ред.</button>
                            <button className="px-3 py-1.5 rounded-xl border border-red-300 text-red-600 text-xs hover:bg-red-50 transition">Блок.</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5">
                <h4 className="font-medium text-slate-900 mb-4">Настройка прав для новой роли</h4>
                <div className="space-y-3">
                  {['Просмотр задач', 'Редактирование сотрудников', 'Загрузка документов', 'Управление компаниями', 'Доступ к настройкам', 'Экспорт данных'].map((perm) => (
                    <label key={perm} className="flex items-center justify-between border border-slate-100 rounded-xl p-3 cursor-pointer hover:bg-slate-50 transition">
                      <span className="text-sm text-slate-700">{perm}</span>
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-slate-900" />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Настройка уведомлений */}
          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-500">Управление каналами связи для уведомлений</p>
              <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Telegram уведомления исключены из системы согласно обновленному техническому заданию. Уведомления доступны только по e-mail и внутри платформы.
                </p>
              </div>
              {[
                { title: 'Email уведомления', desc: 'Уведомления о завершении сроков документов', enabled: true },
                { title: 'Уведомления о новых задачах', desc: 'Оповещения при появлении новых задач', enabled: true },
                { title: 'Системные уведомления', desc: 'Технические оповещения платформы', enabled: false },
                { title: 'Уведомления о загрузке файлов', desc: 'Оповещения при загрузке документов сотрудниками', enabled: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border border-slate-200 rounded-2xl p-4">
                  <div>
                    <h4 className="font-medium text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                  <div className={`w-14 h-8 rounded-full flex items-center px-1 ${item.enabled ? 'bg-slate-900 justify-end' : 'bg-slate-300'}`}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Документы */}
          {activeTab === 'documents' && (
            <div className="space-y-5">
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 text-center hover:border-slate-400 transition cursor-pointer bg-slate-50/50">
                <p className="text-slate-700 font-medium">Загрузить документ</p>
                <p className="text-sm text-slate-500 mt-1">Акты, договоры, справки и другие файлы</p>
              </div>
              <div className="space-y-3">
                {personalDocs.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between border border-slate-200 rounded-2xl p-4 hover:border-slate-300 transition">
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{doc.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{doc.date} · {doc.size}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs hover:bg-slate-50 transition">Скачать</button>
                      <button className="px-3 py-1.5 rounded-xl border border-red-300 text-red-600 text-xs hover:bg-red-50 transition">Удалить</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
