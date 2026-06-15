import noprojects from "../assets/no-projects.png"

export default function NoProject(){
    return(<menu className="flex items-center justify-end gap-4 my-4">
        <img src={noprojects} alt="clip-board-logo" className="w-16 h-16 object-contain mx-auto" />
        <h2>No Project Selected</h2>
        <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create new project</button>
    </menu>
    )
}