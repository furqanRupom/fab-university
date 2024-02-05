import "./App.css";
import MainLayout from "./componets/layout/MainLayout";
import { ProtectedRoute } from "./private/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
