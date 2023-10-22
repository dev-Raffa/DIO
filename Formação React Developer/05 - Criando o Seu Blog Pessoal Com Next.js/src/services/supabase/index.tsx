import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";
import "dotenv/config";

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  //@ts-ignore
  process.env.URL,
  process.env.KEY,
);
