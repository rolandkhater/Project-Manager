import NewTask from "./NewTask.jsx"

export default function Tasks({ tasks, onAdd, onDelete, onToggleDone }) {

    const colorStyles = {
        'low': 'bg-green-50 text-green-700 border-green-200 px-3 py-1 rounded-full text-sm font-medium',
        'medium': 'bg-yellow-50 text-yellow-700 border-yellow-200 px-3 py-1 rounded-full text-sm font-medium',
        'high': 'bg-red-50 text-red-700 border-red-200 px-3 py-1 rounded-full text-sm font-medium',
    };

    return (
        <section className="w-full max-w-xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

            <NewTask onAdd={onAdd} />

            {tasks.length === 0 && (
                <p className="text-stone-600 my-4">This project does not have any tasks yet.</p>
            )}

            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100 divide-y divide-stone-200">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-center py-3 first:pt-0 last:pb-0">
                            <div className="flex items-center gap-3">
                                {/* Done/Undone Button Trigger */}
                                <button
                                    onClick={() => onToggleDone(task.id)}
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${task.isCompleted ? 'bg-stone-700 border-stone-700 text-white' : 'border-stone-400 hover:border-stone-600'
                                        }`}
                                >
                                    {task.isCompleted && <span className="text-xs">✓</span>}
                                </button>

                                {/* Text styling with conditional color mappings and text strike-through */}
                                <span className={`transition-all duration-200 ${task.isCompleted ? 'line-through text-stone-400 opacity-60' : colorStyles[task.importance] || colorStyles['low']
                                    }`}>
                                    {task.text}
                                </span>
                            </div>

                            <button
                                className="text-stone-500 hover:text-red-500 font-medium text-sm transition-colors ml-4"
                                onClick={() => onDelete(task.id)}
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
