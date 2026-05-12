// src/pages/HelpPage.jsx
import { useState } from 'react'

const faqCategories = [
  {
    id: 'faq',
    label: 'Частые вопросы',
    items: [
      { q: 'Как добавить нового сотрудника?', a: 'Перейдите в раздел «Сотрудники» и нажмите «Добавить сотрудника». Заполните обязательные поля: ФИО, гражданство, компанию.' },
      { q: 'Какие уведомления отправляет система?', a: 'Email-уведомления при приближении срока окончания документов (менее чем за 3 дня). Telegram исключён.' },
    ],
  },
  {
    id: 'navigation',
    label: 'Навигация',
    items: [
      { q: 'Где найти карточку сотрудника?', a: 'В разделе «Сотрудники» кликните на ФИО, либо из задач нажмите «Карточка сотрудника».' },
    ],
  },
]

export default function HelpPage() {
  const [activeCat, setActiveCat] = useState('faq')
  const [openItems, setOpenItems] = useState({})

  const toggle = (catId, idx) => {
    const key = `${catId}-${idx}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const current = faqCategories.find(c => c.id === activeCat)

  return (
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold text-[#1F1F1F]">Помощь</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-48 flex-shrink-0 bg-white border border-migra-border rounded-[2px] p-2">
          {faqCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`block w-full text-left px-3 py-2 rounded-[2px] text-sm transition ${
                activeCat === cat.id ? 'bg-migra-secondary text-white' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex-1 bg-white border border-migra-border rounded-[2px] p-4">
          <h3 className="text-lg font-semibold mb-3">{current.label}</h3>
          <div className="space-y-2">
            {current.items.map((item, idx) => {
              const key = `${activeCat}-${idx}`
              return (
                <div key={key} className="border border-[#ECECEC] rounded-[2px]">
                  <button
                    onClick={() => toggle(activeCat, idx)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-[#FAFAFA] transition"
                  >
                    <span className="text-sm font-medium">{item.q}</span>
                    <svg className={`w-4 h-4 text-gray-500 transition ${openItems[key] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openItems[key] && (
                    <div className="px-4 pb-3 text-sm text-gray-800 border-t border-[#ECECEC] pt-2">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}