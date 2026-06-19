import NoProject from "./Components/NoProjects";
import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import { useState, useEffect } from "react";
import SelectedProject from "./Components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState(() => {
    const savedState = localStorage.getItem("projectsState");

    return savedState
      ? JSON.parse(savedState)
      : {
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
      };
  });

  useEffect(() => {
    localStorage.setItem(
      "projectsState",
      JSON.stringify(projectsState)
    );
  }, [projectsState]);


  function handleDeleteTask(id) {
    setProjectsState(
      prev => {
        return {
          ...prev,
          tasks: prev.tasks.filter((task) => task.id !== id),
        }
      }
    )
  }

  function handleAddTask(text, importance) {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
        importance: importance,
        isCompleted: false,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      }
    })
  }

  function handleToggleTaskDone(taskId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.map((task) =>
          task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,

      }
    })
  }

  function handleCancel() {
    setProjectsState(
      prev => {
        return {
          ...prev,
          selectedProjectId: undefined,
        }
      }
    )
  }

  function handleSelectedProject(id) {
    setProjectsState(
      prev => {
        return {
          ...prev,
          selectedProjectId: id,
        }
      }
    )
  }


  function handleAddProject(projectData) {
    setProjectsState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState(
      prev => {
        return {
          ...prev,
          selectedProjectId: undefined,
          projects: prev.projects.filter((project) => project.id !== prev.selectedProjectId),
        }
      }
    )
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject
    tasks={projectsState.tasks}
    onDeleteTask={handleDeleteTask}
    project={selectedProject}
    onAddTask={handleAddTask}
    onDelete={handleDeleteProject}
    onToggleTask={handleToggleTaskDone} />;


  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  }
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar selectedProjectId={projectsState.selectedProjectId} onSelectProject={handleSelectedProject} onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
