export const baseUrl = import.meta.env.BASE_URL

export const publicResource = (res = "") => `${baseUrl}recipes/${res}`
