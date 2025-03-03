import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./component/Sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="p-6" />
        <main className="w-full">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </SidebarProvider>
    </Router>
  );
}

export default App;