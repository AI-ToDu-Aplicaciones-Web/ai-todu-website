
export const errorInterceptor = {
    onResponse: (response) => response,

    onError: (error) => {
        let message;

        if (error.response) {
            // El servidor respondió con un estado de error
            console.error("Data:", error.response.data);
            message = error.response.data.message || `Error ${error.response.status}`;
        } else if (error.request) {
            // La petición se envió pero no hubo respuesta[cite: 26]
            console.error("Request:", error.request);
            message = "No response received from the server.";
        } else {
            // La petición nunca llegó a enviarse[cite: 26]
            console.error("Error Message:", error.message);
            message = error.message;
        }

        // Cada rama produce un mensaje destinado a una persona, no un stack trace[cite: 26]
        return Promise.reject(message);
    }
};
