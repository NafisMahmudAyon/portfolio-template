import { getDatabase } from "@/components/db"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!email || !message) {
      return NextResponse.json({ message: "Email and message are required" }, { status: 400 })
    }

    const db = await getDatabase()
    const collection = db.collection("contact_forms")

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: "Message saved successfully", id: result.insertedId }, { status: 200 })
  } catch (error) {
    console.error("Error saving contact form:", error)
    return NextResponse.json({ message: "An error occurred while saving your message" }, { status: 500 })
  }
}
