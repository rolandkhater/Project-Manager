import NoProject from "./Components/NoProjects";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <SideBar />
      <NoProject />
    </main>
  );
}

export default App;
