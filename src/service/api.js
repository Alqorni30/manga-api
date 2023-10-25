

export const getApiManga = async (resource, query) => {
    const res = await fetch(`${'https://api.jikan.moe/v4'}/${resource}?${query}`)
    const manga = await res.json()
    return manga
}