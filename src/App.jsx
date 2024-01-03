import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootLayout from "./Pages/RootLayout"

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout />
    </QueryClientProvider>
  )
}

export default App
