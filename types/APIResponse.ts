import { Movie } from "./Movie"

// initialize type
export type APIResponse = {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}