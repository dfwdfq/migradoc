// src/pages/DocumentsPage.jsx
export default function DocumentsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Документы</h2>
      <p className="text-slate-500 mt-2">
        Хранилище документов компании — акты, договоры, справки, шаблоны
      </p>

      <div className="mt-8 border-2 border-dashed border-slate-300 rounded-3xl p-8 text-center hover:border-slate-400 transition cursor-pointer bg-slate-50/50">
        <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-slate-700 font-medium">Загрузить документ</p>
        <p className="text-sm text-slate-500 mt-1">Поддерживаются PDF, Word, Excel до 20 MB</p>
        <button className="mt-4 px-5 py-2.5 rounded-2xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
          Выбрать файл
        </button>
      </div>
    </div>
  )
}
