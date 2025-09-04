/**
 * @type {string} - The base url of the application, useful when creating absolute paths to resources.
 */
export const baseUrl = import.meta.env.BASE_URL

/**
 * Creates a url to a public resource.
 * @param {string} res The resource name (e.g. "chilli.jpg")
 * @returns {string} The full url to the resource.
 */
export const publicResource = (res = "") => `${baseUrl}/${res}`
