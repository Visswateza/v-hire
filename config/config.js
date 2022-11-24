const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "E4ds36eSFVS!@3rdfw6fs65DGrt45",
  mongoUri: process.env.MONGODB_URI || "mongodb+srv://prani:4269@autho.0mjhsba.mongodb.net/?retryWrites=true&w=majority"
}

export default config
