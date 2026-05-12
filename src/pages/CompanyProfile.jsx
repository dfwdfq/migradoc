// src/pages/CompanyProfile.jsx
import { useState } from 'react'

const sections = [
  { id: 'requisites', label: 'Реквизиты' },
  { id: 'addresses', label: 'Адреса' },
  { id: 'bank', label: 'Банковские реквизиты' },
  { id: 'integrations', label: 'Интеграции' },
  { id: 'classifier', label: 'Классификатор МВД' },
]

export default function CompanyProfile() {
  const [active, setActive] = useState('requisites')

  return (
    <div className="space-y-4">
      <div className="text-xs text-gray-500">
        <button className="hover:text-migra-secondary">Компании</button> / ООО РРМ
      </div>

      <div className="bg-white border border-migra-border rounded-[2px] p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">ООО РРМ</h1>
            <p className="text-sm text-gray-500">ИНН: 7701234567 · КПП: 770101001</p>
          </div>
          <div className="flex gap-2">
            <button className="h-[38px] px-5 bg-migra-secondary text-white rounded-[2px] text-sm hover:bg-[#256F63]">Редактировать</button>
            <button className="h-[38px] px-5 border border-migra-warning text-migra-warning rounded-[2px] text-sm hover:bg-[#FFF3E0]">Закрыть организацию</button>
          </div>
        </div>

        <div className="flex border-b border-migra-border mb-5">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`h-[42px] px-5 text-sm font-medium relative transition ${
                active === s.id ? 'text-migra-secondary' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {s.label}
              {active === s.id && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-migra-secondary" />}
            </button>
          ))}
        </div>

        {active === 'requisites' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Название компании</label>
              <input defaultValue="ООО РРМ" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Организационно-правовая форма</label>
              <select className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm">
                <option>ООО</option><option>АО</option><option>ИП</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ИНН</label>
              <input defaultValue="7701234567" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
              <p className="text-xs text-gray-500 mt-1">Автоматическая загрузка реквизитов по ИНН</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">КПП</label>
              <input defaultValue="770101001" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Директор</label>
              <input defaultValue="Петров Алексей Владимирович" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
            </div>
            <div className="md:col-span-2">
              <button className="h-[38px] px-6 bg-migra-secondary text-white rounded-[2px] text-sm hover:bg-[#256F63]">Сохранить</button>
            </div>
          </div>
        )}

        {active === 'addresses' && (
          <div className="space-y-4">
            <div className="border border-[#ECECEC] rounded-[2px] p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-sm">Юридический адрес</p>
                <label className="flex items-center gap-2 text-xs">
                  <input type="checkbox" defaultChecked className="rounded-[2px]" />
                  Использовать для уведомлений
                </label>
              </div>
              <input defaultValue="г. Москва, ул. Строителей, д. 15" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
            </div>
            <button className="text-sm text-migra-secondary hover:underline">+ Добавить рабочую площадку</button>
          </div>
        )}

        {active === 'bank' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">БИК</label>
              <input defaultValue="044525225" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">КС</label>
              <input defaultValue="30101810400000000225" readOnly className="w-full h-[36px] border border-[#ECECEC] bg-[#F7F7F7] rounded-[2px] px-3 text-sm text-gray-400" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Банк</label>
              <input defaultValue="ПАО Сбербанк" readOnly className="w-full h-[36px] border border-[#ECECEC] bg-[#F7F7F7] rounded-[2px] px-3 text-sm text-gray-400" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">РС</label>
              <input defaultValue="40702810500000012345" className="w-full h-[36px] border border-migra-border rounded-[2px] px-3 text-sm" />
            </div>
          </div>
        )}

        {active === 'integrations' && (
          <div className="space-y-4">
            {[
              { name: '1С', connected: true, desc: 'Выгрузка и загрузка данных о физических лицах' },
              { name: 'СБИС', connected: false, desc: 'Формирование запросов в МИФНС' }
            ].map((int) => (
              <div key={int.name} className="border border-[#ECECEC] rounded-[2px] p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">{int.name}</p>
                  <p className="text-xs text-gray-500">{int.desc}</p>
                </div>
                <div>
                  {int.connected ? (
                    <span className="text-sm text-green-700 font-medium">Подключено</span>
                  ) : (
                    <button className="h-[38px] px-4 bg-migra-secondary text-white rounded-[2px] text-sm">Настроить</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {active === 'classifier' && (
          <div className="space-y-4">
            <div className="border border-migra-border rounded-[2px] p-4 bg-[#FAFAFA]">
              <p className="text-sm">УВМ ГУ МВД России по г. Москве</p>
              <p className="text-xs text-gray-500">Автовыбор по юр. адресу</p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <label className="text-xs text-gray-500">ОКТМО</label>
                  <input defaultValue="45373000" readOnly className="w-full h-[36px] border border-[#ECECEC] bg-[#F7F7F7] rounded-[2px] px-3 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Налоговый орган</label>
                  <input defaultValue="ИФНС России №7" readOnly className="w-full h-[36px] border border-[#ECECEC] bg-[#F7F7F7] rounded-[2px] px-3 text-sm" />
                </div>
              </div>
            </div>
            <button className="text-sm text-migra-secondary hover:underline">+ Добавить подразделение</button>
          </div>
        )}
      </div>
    </div>
  )
}