export const Contact = () => {
  return (
    <div className="min-h-[90vh] flex items-center">
      <div className="flex justify-between w-full flex-col lg:flex-row gap-10 lg:gap-0">
        <p className="text-[24px] text-wrap flex-1">
          Contact me with the form here or @
          <a href="mailto:dev.harish3124@gmail.com" className="ml-2 text-[24px] underline">dev.harish3124@gmail.com</a>
        </p>
        <form className="flex flex-col gap-5 items-start text-2xl flex-1">
          <div className="w-full">
            <h3>Your name ?</h3>
            <input name="name" className="form-element" required />
          </div>
          <div className="w-full">
            <h3>Your email ?</h3>
            <input name="email" type="email" className="form-element" required />
          </div>
          <div className="w-full">
            <h3>What can I do for you ?</h3>
            <textarea name="message" className="form-element min-h-72" required />
          </div>
          <button type="submit" className="underline mt-10"><h3>Hire Me</h3></button>
        </form>
      </div>
    </div>
  )
}

