import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const supabase = createClient(
  "https://dsllwyapdwaspzxosccb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzbGx3eWFwZHdhc3B6eG9zY2NiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTAwOTc1MSwiZXhwIjoyMDEwNTg1NzUxfQ.ijDRnGTsPdD43slreDGUqhtFGA2jPbs4PFlVX6ys-1w"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
