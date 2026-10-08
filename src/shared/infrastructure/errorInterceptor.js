/**
 * Axios interceptor for centralized error handling.
 *
 * @remarks
 * Simplifies error messages from the server and provides fallback messages for
 * network errors.
 */
export const errorInterceptor = {
    /**
     * Handles successful responses.
     * @param {import('axios').AxiosResponse} response
     * @returns {import('axios').AxiosResponse}
     */
    onResponse: (response) => response,

    /**
     * Handles error responses.
     * @param {import('axios').AxiosError} error
     * @returns {Promise<never>}
     */
    onError: (error) => {
        let message;

        if (error.response) {
            console.error("Data:", error.response.data);
            console.error("Status:", error.response.status);
            message = error.response.data["message"] || `Error ${error.response.status}: ${error.response.statusText}`
        } else if (error.request) {
            console.error("Request:", error.request);
            message = "No response received from the server. Please check your internet connection."
        } else {
            console.error("Error Message:", error.message);
            message = error.message
        }

        return Promise.reject(message)
    }
};