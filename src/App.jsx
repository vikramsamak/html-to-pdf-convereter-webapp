import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootLayout from "./Pages/RootLayout"
import { NextUIProvider } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

const queryClient = new QueryClient()
function App() {
  const navigate = useNavigate();
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={navigate}>
        <RootLayout />
      </NextUIProvider>
    </QueryClientProvider>
  )
}

export default App
