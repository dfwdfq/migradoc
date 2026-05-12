import { useState } from 'react'

export default function CompanyProfile() {
  const [activeSection, setActiveSection] = useState('requisites')

  const sections = [
    { id: 'requisites', label: 'Реквизиты' },
    { id: 'addresses', label: 'Адреса' },
    { id: 'bank', label: 'Банковские реквизиты' },
    { id: 'integrations', label: 'Интеграции' },
    { id: 'classifier', label: 'Классификатор МВД' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
        <button className="hover:text-slate-900 transition">Компании</button>
        <span>/</span>
        <span className="text-slate-900">ООО РРМ</span>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ООО РРМ</h1>
            <p className="text-slate-500 text-sm">ИНН: 7701234567 · КПП: 770101001</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
              Редактировать
            </button>
            <button className="px-4 py-2 rounded-xl border border-red-300 text-red-600 text-sm hover:bg-red-50 transition">
              Закрыть организацию
            </button>
          </div>
        </div>

        {/* Навигация по разделам */}
        <div className="flex border-b border-slate-200 overflow-x-auto mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-5 py-3 text-sm font-medium transition whitespace-nowrap ${
                activeSection === section.id
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Реквизиты */}
        {activeSection === 'requisites' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Название компании</label>
              <input type="text" defaultValue="ООО РРМ" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Организационно-правовая форма</label>
              <select className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300 text-slate-700">
                <option>ООО</option>
                <option>АО</option>
                <option>ИП</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">ИНН</label>
              <input type="text" defaultValue="7701234567" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
              <p className="text-xs text-slate-400 mt-1">Автозагрузка реквизитов по ИНН</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">КПП</label>
              <input type="text" defaultValue="770101001" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">ОГРН (ОГРНИП)</label>
              <input type="text" defaultValue="1127746123456" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">ОКВЭД</label>
              <input type="text" defaultValue="41.20" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Директор компании</label>
              <input type="text" defaultValue="Петров Алексей Владимирович" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div className="md:col-span-2">
              <button className="px-6 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition">
                Сохранить
              </button>
            </div>
          </div>
        )}

        {/* Адреса */}
        {activeSection === 'addresses' && (
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-slate-900">Юридический адрес</h4>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-slate-900" />
                  <span className="text-slate-600">Использовать для уведомлений</span>
                </label>
              </div>
              <input type="text" defaultValue="г. Москва, ул. Строителей, д. 15, офис 301" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-slate-900">Фактический адрес</h4>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-slate-900" />
                  <span className="text-slate-600">Использовать для уведомлений</span>
                </label>
              </div>
              <input type="text" defaultValue="г. Москва, ул. Рабочая, д. 42, стр. 3" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-slate-900">Рабочая площадка 1</h4>
                <button className="text-sm text-red-500 hover:text-red-600 transition">Удалить</button>
              </div>
              <input type="text" defaultValue="г. Москва, ул. Производственная, д. 10" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <button className="px-4 py-3 rounded-2xl border border-dashed border-slate-300 text-slate-600 hover:bg-slate-50 transition text-sm">
              + Добавить рабочую площадку
            </button>
          </div>
        )}

        {/* Банковские реквизиты */}
        {activeSection === 'bank' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">БИК</label>
              <input type="text" defaultValue="044525225" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">КС (заполняется автоматически)</label>
              <input type="text" defaultValue="30101810400000000225" className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 outline-none text-slate-600" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Название банка (заполняется автоматически)</label>
              <input type="text" defaultValue="ПАО Сбербанк" className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 outline-none text-slate-600" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">РС</label>
              <input type="text" defaultValue="40702810500000012345" className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
          </div>
        )}

        {/* Интеграции */}
        {activeSection === 'integrations' && (
          <div className="space-y-5">
            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-slate-900">Интеграция с 1С</h4>
                  <p className="text-sm text-slate-500 mt-1">Выгрузка и загрузка данных о физических лицах</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-green-600 font-medium">Подключено</span>
                  <button className="px-4 py-2 rounded-xl border border-slate-300 text-sm hover:bg-slate-50 transition">
                    Синхронизировать
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-slate-900">Интеграция со СБИС</h4>
                  <p className="text-sm text-slate-500 mt-1">Формирование запросов в МИФНС и выгрузка документов</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">Не подключено</span>
                  <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
                    Настроить
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Классификатор МВД */}
        {activeSection === 'classifier' && (
          <div className="space-y-5">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
              Программа автоматически предлагает подразделение ГУ МВД по юридическому адресу компании. Вы можете изменить его вручную.
            </div>
            <div className="border border-green-200 rounded-2xl p-5 bg-green-50/30">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-slate-900">Основное подразделение ГУ МВД</h4>
                <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">Автовыбор</span>
              </div>
              <select className="w-full px-4 py-3 rounded-2xl border border-green-300 bg-white outline-none focus:ring-2 focus:ring-green-300 text-slate-700">
                <option>УВМ ГУ МВД России по г. Москве</option>
              </select>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">ОКТМО</label>
                  <input type="text" defaultValue="45373000" className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 outline-none text-slate-600" readOnly />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Налоговый орган</label>
                  <input type="text" defaultValue="ИФНС России № 7 по г. Москве" className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 outline-none text-slate-600" readOnly />
                </div>
              </div>
            </div>
            <button className="px-4 py-3 rounded-2xl border border-dashed border-slate-300 text-slate-600 hover:bg-slate-50 transition text-sm">
              + Добавить дополнительное подразделение
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
