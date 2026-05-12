import { useState } from 'react'

const faqCategories = [
  {
    id: 'faq',
    label: 'Частые вопросы',
    items: [
      { q: 'Как добавить нового сотрудника?', a: 'Перейдите в раздел «Сотрудники» и нажмите кнопку «Добавить сотрудника». Заполните обязательные поля: ФИО, гражданство, компанию. После создания карточки вы сможете загружать документы сотрудника.' },
      { q: 'Какие уведомления отправляет система?', a: 'Система отправляет email-уведомления при приближении срока окончания документов (менее чем за 3 дня). Уведомления также отображаются на сайте в разделе «Задачи». Telegram-уведомления исключены из системы.' },
      { q: 'Как загрузить документ сотрудника?', a: 'Откройте карточку сотрудника, перейдите на вкладку «Документы». Выберите тип документа из выпадающего списка и перетащите файл в зону загрузки или нажмите на неё для выбора файла. Можно загрузить до 5 файлов на каждый тип, каждый до 20 МБ.' },
      { q: 'Как работает контроль сроков?', a: 'При загрузке документа с включенной опцией контроля даты окончания система автоматически отслеживает срок. При приближении срока (менее 3 дней) создается задача и отправляется уведомление.' },
    ],
  },
  {
    id: 'navigation',
    label: 'Навигация',
    items: [
      { q: 'Где найти карточку сотрудника?', a: 'Карточка сотрудника доступна из раздела «Сотрудники» при клике на ФИО сотрудника, а также из раздела «Задачи» при клике на кнопку «Карточка сотрудника» в блоке задачи.' },
      { q: 'Как формируется приказ об отстранении?', a: 'Кнопка «Приказ об отстранении» появляется в блоке задачи только если у сотрудника есть просроченные разрешительные документы. При нажатии открывается страница заполнения приказа.' },
    ],
  },
  {
    id: 'documents',
    label: 'Документы',
    items: [
      { q: 'Какие типы документов поддерживаются?', a: 'Поддерживаются: патент, миграционный учет, трудовой договор, договор ГПХ, уведомления МВД, авансовые платежи, платежные поручения, запросы в МИФНС, приказы об отстранении и другие.' },
      { q: 'Как работает автозаполнение платежного поручения?', a: 'При заполнении ФИО иностранного сотрудника программа автоматически подбирает налоговый орган, банковские реквизиты, ОКТМО и КБК на основе региона действия патента из карточки сотрудника.' },
    ],
  },
  {
    id: 'integrations',
    label: 'Интеграции',
    items: [
      { q: 'Как настроить интеграцию с 1С?', a: 'Интеграция настраивается индивидуально. Обратитесь в службу поддержки для подключения. После настройки в карточке компании появится кнопка синхронизации.' },
      { q: 'Как работает интеграция со СБИС?', a: 'Из карточки сотрудника можно сформировать запрос в МИФНС о праве не удерживать НДФЛ и выгрузить его в СБИС. После отправки в карточке сотрудника автоматически отмечается чекбокс «Запрос отправлен».' },
    ],
  },
  {
    id: 'legal',
    label: 'Законодательство',
    items: [
      { q: 'Какие законы регулируют работу с иностранными сотрудниками?', a: 'Основной документ — Федеральный закон №115-ФЗ «О правовом положении иностранных граждан в РФ». Всплывающие подсказки в системе содержат ссылки на конкретные статьи.' },
      { q: 'Что такое всплывающие подсказки?', a: 'Рядом с некоторыми документами отображается значок вопроса в кружке. При нажатии на него открывается разъяснение норм законодательства со ссылками на соответствующие статьи.' },
    ],
  },
]

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState('faq')
  const [openItems, setOpenItems] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (catId, itemIdx) => {
    const key = `${catId}-${itemIdx}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const currentCategory = faqCategories.find((c) => c.id === activeCategory)

  const filteredItems = searchQuery
    ? faqCategories.flatMap((cat) =>
        cat.items
          .filter(
            (item) =>
              item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.a.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item, idx) => ({ ...item, catId: cat.id, idx }))
      )
    : null

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Помощь</h2>
        <p className="text-slate-500 mt-1">Ответы на популярные вопросы и навигация по сайту</p>
      </div>

      {/* Поиск */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            placeholder="Поиск по вопросам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-slate-300"
          />
        </div>
      </div>

      {searchQuery ? (
        /* Результаты поиска */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Результаты поиска ({filteredItems.length})
          </h3>
          {filteredItems.length === 0 ? (
            <p className="text-slate-500 text-sm">Ничего не найдено. Попробуйте изменить запрос.</p>
          ) : (
            <div className="space-y-3">
              {filteredItems.map((item) => {
                const key = `${item.catId}-${item.idx}`
                return (
                  <div key={key} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.catId, item.idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                    >
                      <span className="font-medium text-slate-900">{item.q}</span>
                      <svg className={`w-5 h-5 text-slate-400 transition ${openItems[key] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems[key] && (
                      <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ) : (
        /* Категории */
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar категорий */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-3 flex flex-col gap-1">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left px-4 py-3 rounded-2xl transition text-sm ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Контент */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-5">
                {currentCategory?.label}
              </h3>
              <div className="space-y-3">
                {currentCategory?.items.map((item, idx) => {
                  const key = `${activeCategory}-${idx}`
                  return (
                    <div key={key} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(activeCategory, idx)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                      >
                        <span className="font-medium text-slate-900 text-sm">{item.q}</span>
                        <svg className={`w-5 h-5 text-slate-400 transition flex-shrink-0 ${openItems[key] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openItems[key] && (
                        <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
      )}
    </div>
  )
}
