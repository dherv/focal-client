export const fetchFocuses = () => {
  return fetch("/focuses").then(response => {
    if (response.ok) return response.json()
    return response
  })
}