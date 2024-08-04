import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import "./locale/i18n.ts";
import { CustomThemeProvider } from "./modules/shared/lib/theme/provider.tsx";
import { LoadingThin } from "./modules/shared/components/atoms/loading/index.tsx";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
      <ToastContainer />
      <CustomThemeProvider>
        <Suspense fallback={<LoadingThin />}>
          <RouterProvider router={router} />
        </Suspense>
      </CustomThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
