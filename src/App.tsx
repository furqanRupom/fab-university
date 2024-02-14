import "./App.css";
import MainLayout from "./componets/layout/MainLayout";
import { ProtectedRoute } from "./private/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute role={undefined}>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
