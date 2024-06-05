import { Arrow } from "../components"

export const Contact = () => {
  return (
    <div className="min-h-[90vh] flex items-center" id="contact">
      <div className="flex justify-between w-full flex-col lg:flex-row gap-10 lg:gap-0">
        <h4 className="text-[20px] lg:text-[24px] text-wrap flex-1">
          Contact me with the form here or @
          <a href="mailto:dev.harish3124@gmail.com" className="ml-2 text-[20px] lg:text-[24px] underline">dev.harish3124@gmail.com</a>
        </h4>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col items-start text-2xl flex-1"
        >
          <input
            name="name"
            placeholder="Your name ?"
            className="form-element w-full glass py-5"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email ?"
            className="form-element w-full glass py-5"
            required
          />
          <textarea
            name="message"
            placeholder="What can I do for you ?"
            className="form-element min-h-72 glass"
            required
          />
          <button type="submit" className="mt-10 border-secondary border-[2px] p-3 px-5 rounded-md flex items-center gap-1">
            Send
            <Arrow />
          </button>
        </form>
      </div>
    </div>
  )
}

