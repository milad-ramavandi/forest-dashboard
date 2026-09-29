const api = async (url: string, option?: RequestInit) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_ENDPOINT_BASE_URL}${url}`,
      option
    )
    if (!res.ok) {
      const errorBody = await res.json().catch(() => null)
      throw new Error(
        `request failed to: ${errorBody.error ?? errorBody?.message ?? res.statusText}`
      )
    }
    return await res.json();
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : "Oops...something went wrong."
    )
  }
}

export default api
