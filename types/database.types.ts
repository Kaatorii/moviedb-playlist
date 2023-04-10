export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]


// initiualize interface
export interface Database {
    public: {
        Tables: {
            watchlist: {
                Row: {
                    id: number
                    title: string | null
                    user: string
                    date_added: string | null
                    uniqueident: string
                }
                Insert: {
                    id?: number
                    title?: string
                    user: string
                    date_added?: string
                    uniqueident: string
                }
            }
        }
    }
}