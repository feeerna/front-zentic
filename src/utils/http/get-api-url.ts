export const getApiUrl = () => {
    return import.meta.env.PROD ? import.meta.env.VITE_QA_API_URL : import.meta.env.VITE_NEST_API_URL;
}