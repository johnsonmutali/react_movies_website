import { useLoaderData } from "react-router-dom"

export default function useFetch(url) {

}

export const moviesLoader = async () => {
  const res = await fetch(apiURL)


  return res.json()
}