export interface postProps {
  id: string;
  title: string;
  description: string;
  text: string;
  created_at: string;
  update_at?: string;
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: postProps;
        Insert: postProps;
        Update: postProps;
      };
    };
  };
}
