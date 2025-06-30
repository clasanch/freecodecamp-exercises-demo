/**
 * Configuración global para Jest
 * Se ejecuta antes de cada archivo de prueba
 */

// Configuración de timeouts para pruebas (útil para algoritmos complejos)
// jest.setTimeout(10000); // Se configurará en individual tests si es necesario

// Helpers globales para pruebas
global.testUtils = {
  /**
   * Genera un array aleatorio para pruebas
   * @param {number} size - Tamaño del array
   * @param {number} max - Valor máximo
   * @returns {number[]}
   */
  generateRandomArray: (size = 10, max = 100) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
  },

  /**
   * Genera una cadena aleatoria para pruebas
   * @param {number} length - Longitud de la cadena
   * @returns {string}
   */
  generateRandomString: (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  },

  /**
   * Mide el tiempo de ejecución de una función
   * @param {Function} fn - Función a medir
   * @returns {Promise<{result: any, time: number}>}
   */
  measureExecutionTime: async fn => {
    const start = Date.now();
    const result = await fn();
    const end = Date.now();
    return {
      result,
      time: end - start,
    };
  },
};

// Configuración para snapshot testing
// expect.extend({ // Se configurará cuando sea necesario
/*
  toMatchPerformanceSnapshot(received, threshold = 100) {
    if (typeof received !== 'number') {
      return {
        message: () => 'Expected a number for performance testing',
        pass: false,
      };
    }

    const pass = received <= threshold;
    return {
      message: () =>
        pass
          ? `Expected ${received}ms to exceed ${threshold}ms`
          : `Expected ${received}ms to be less than or equal to ${threshold}ms`,
      pass,
    };
  },
*/
// });
