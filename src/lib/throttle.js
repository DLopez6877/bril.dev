// utils.js

/**
 * Throttle function to limit how often a callback function is called.
 * @param {Function} callback - The function to throttle.
 * @param {number} delay - The delay in milliseconds.
 * @return {Function} - The throttled function.
 */
export const throttle = (callback, delay) => {
    let lastTime = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            callback(...args);
            lastTime = now;
        }
    };
};
