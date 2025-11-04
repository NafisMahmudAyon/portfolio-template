"use client"
import DOMPurify from "dompurify"
import type React from "react"
import { type FormEvent, useState } from "react"

interface ContactFormProps {
  handleToastAndClose: (type: "success" | "error", message: string) => void
}

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC<ContactFormProps> = ({ handleToastAndClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState<boolean>(false)

  const sanitizeData = (data: FormData): FormData => {
    return {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      message: DOMPurify.sanitize(data.message),
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.email || !formData.message) {
      handleToastAndClose("error", "Email and Message fields are required.")
      return
    }

    setLoading(true)

    const sanitizedData = sanitizeData(formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: sanitizedData.name,
          email: sanitizedData.email,
          message: sanitizedData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        handleToastAndClose("error", result.message || "An error occurred. Please try again.")
      } else {
        handleToastAndClose("success", "Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      handleToastAndClose("error", "An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex max-w-[800px] grid-cols-2 flex-col gap-4 rounded-lg py-2 px-4 md:!grid md:px-8"
      >
        <div className="form-row col-start-1 col-end-2">
          <div className="input-data">
            <input
              type="text"
              name="name"
              className="text-headingText dark:text-headingDarkText"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <div className="underline"></div>
            <label htmlFor="">Name</label>
          </div>
        </div>
        <div className="form-row col-start-1 col-end-2">
          <div className="input-data">
            <input
              type="email"
              name="email"
              className="text-headingText dark:text-headingDarkText"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <div className="underline"></div>
            <label htmlFor="">Email</label>
          </div>
        </div>
        <div className="form-row col-start-2 col-end-3 row-start-1 row-end-3">
          <div className="input-data textarea">
            <textarea
              name="message"
              className="text-headingText dark:text-headingDarkText"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
          </div>
        </div>

        <button
          className="cursor-design col-start-1 col-end-3 mt-10 flex flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor/10 px-8 py-2 text-center text-headingText backdrop-blur-xl dark:text-headingDarkText"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </>
  )
}

export default ContactForm
