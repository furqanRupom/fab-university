import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { Provider } from 'react-redux'
import { persister, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {Toaster} from "sonner"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster position="top-center" />
    </Provider>
  </React.StrictMode>
);
