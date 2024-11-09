export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    paginationDefaultLimit: process.env.PAGINATION_DEFAULT_LIMIT || 7,
})