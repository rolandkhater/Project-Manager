import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');
    const [importance, setImportance] = useState('low');

    function handleClassSelection(event) {
        setImportance(event.target.value);
    }

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') return;

        // Sends structural payload parameters up
        onAdd(enteredTask, importance);

        // Structural Resets
        setEnteredTask('');
        setImportance('low');
    }

    return (
        <div className="flex items-center gap-4 my-4">
            <input
                type="text"
                className="w-64 px-3 py-1.5 rounded bg-stone-200 text-stone-800 outline-none focus:bg-stone-300 transition-colors"
                onChange={handleChange}
                value={enteredTask}
                placeholder="Add a new item..."
            />

            <select
                className="px-2 py-1.5 rounded bg-stone-200 text-stone-700 outline-none cursor-pointer focus:bg-stone-300 transition-colors font-medium text-sm"
                value={importance}
                onChange={handleClassSelection}
            >
                <option value="low">🟢 Green (Low)</option>
                <option value="medium">🟡 Yellow (Medium)</option>
                <option value="high">🔴 Red (High)</option>
            </select>

            <button
                className="px-4 py-1.5 bg-stone-700 text-stone-100 rounded hover:bg-stone-800 hover:text-stone-50 transition-colors font-medium text-sm"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}