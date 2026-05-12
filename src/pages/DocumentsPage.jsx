// src/pages/DocumentsPage.jsx
const docs = [
  { name: 'Договор аренды 2026.pdf', type: 'Договор', date: '03.02.2026', size: '2.1 MB' },
  { name: 'Устав ООО РРМ.docx', type: 'Учредительные', date: '12.01.2026', size: '0.8 MB' },
]

export default function DocumentsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold text-[#1F1F1F]">Документы</h2>
      <div className="bg-white border border-migra-border rounded-[2px] p-5">
        <div className="border border-dashed border-migra-border rounded-[2px] p-6 text-center mb-5">
          <p className="text-sm font-medium">Перетащите файлы или нажмите для выбора</p>
          <p className="text-xs text-gray-500">PDF, Word, Excel до 20 MB</p>
          <button className="mt-3 h-[38px] px-6 bg-migra-secondary text-white rounded-[2px] text-sm">Загрузить</button>
        </div>
        <div className="space-y-2">
          {docs.map((doc, i) => (
            <div key={i} className="flex justify-between items-center border-b border-[#ECECEC] py-2">
              <div>
                <p className="text-sm font-medium">{doc.name}</p>
                <p className="text-xs text-gray-500">{doc.type} · {doc.date} · {doc.size}</p>
              </div>
              <button className="text-xs text-migra-secondary hover:underline">Скачать</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}