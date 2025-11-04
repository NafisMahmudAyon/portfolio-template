import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined")
}

const uri = process.env.MONGODB_URI
let cachedClient: MongoClient | null = null

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }

  const client = new MongoClient(uri)
  await client.connect()
  cachedClient = client
  return client
}

export async function getDatabase() {
  const client = await connectToDatabase()
  return client.db(process.env.MONGODB_DB_NAME || "portfolio")
}

export async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close()
    cachedClient = null
  }
}
