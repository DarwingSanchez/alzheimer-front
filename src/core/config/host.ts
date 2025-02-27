const environment = import.meta.env

export const backConfig = {
  host: environment.VITE_HOST,
  apiKey: environment.VITE_API_KEY
}