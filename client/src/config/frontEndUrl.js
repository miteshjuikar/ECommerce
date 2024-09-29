const config = {
    development: {
        frontendURL: "http://localhost:5000",
    },
    production: {
        frontendURL: "https://eshop-backend-xt0q.onrender.com",
    }
};

// Determine the current environment
 const currentEnv = process.env.NODE_ENV || 'development';

console.log(`Node Env: ${process.env.NODE_ENV} and currentEnv variable: ${currentEnv}`);
// Export the configuration for the current environment
export default config[currentEnv];
