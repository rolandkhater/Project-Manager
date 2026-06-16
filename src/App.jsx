import NoProject from "./Components/NoProjects";
import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import { useState } from "react";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId:undefined,
    projects:[]
  });

  function handleStartAddProject(){
    setProjectsState(prev =>{
      return{...prev,
      selectedProjectId:null,
      
  }})
  }

  function handleCancel(){
    setProjectsState(
      prev =>{
        return{
          ...prev,
          selectedProjectId: undefined,
        }
      }
    )
  }

  
    function handleAddProject({projectData}){
        setProjectsState(prev =>{
          const newProject = {
            ...projectData,
            id: Math.random()
          };
          return{
            ...prev,
            projects: [...prev.projects, newProject]
          }
        })
    }

    console.log(projectsState);

  let content;

  if(projectsState.selectedProjectId === undefined){
    content =<NoProject onStartAddProject={handleStartAddProject}/>
  }else if(projectsState.selectedProjectId === null){
      
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
