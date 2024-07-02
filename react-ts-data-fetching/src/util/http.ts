// funckja pomocnicza
export async function get(url: string){
 const response = await fetch(url)
 if(!response.ok){
  throw new Error("Failed to fetch data")
 }
 const data = await response.json() as unknown; // nie wiem jaka bedzie data
 return data
}