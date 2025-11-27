import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import router from './Routes/Routes'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position='top-right'
      gutter={16}
      toastOptions={{
        className: 'text-[16px] capitalize font-medium text-black',
        style: {
          padding: '16px',
          maxWidth: '30%',
        },
        success: {
          iconTheme: {
            primary: 'green',
            secondary: 'white',
          },
        },
        error: {
          iconTheme: {
            primary: 'red',
            secondary: 'white',
          },
        },
      }}
    />
  </StrictMode>,
)
