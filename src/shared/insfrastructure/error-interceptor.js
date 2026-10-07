export function errorInterceptor(error) {
    console.error('Error técnico interceptado:', error.message);
    // Aquí se normalizan los errores HTTP antes de que lleguen a los stores
    return Promise.reject(new Error('Ha ocurrido un problema de conexión. Por favor, intenta más tarde.'));
}