import React from 'react';
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, mainTheme } from './themes';
import { rootRouter } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={mainTheme}>
            <RouterProvider router={rootRouter}/>
        </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
