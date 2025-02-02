import React from 'react'

export default function Contact() {

  return (
    <div className=' bg-black text-white py-16'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
      <div>
        <h3 className='text-3xl font-bold  bg-clip-text   text-green-400 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development prjectgs or partnership opportunities.</p>
        <div className="flex items-center mt-8 space-x-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            ></path>
          </svg>
          <span>Beirut, Lebanon</span>
        </div>
        <div className="flex items-center mt-2 space-x-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            ></path>
          </svg>
          <a href="mailto:mhamadalkak220@gmail.com">  mhamadalkak220@gmail.com</a>
        </div>
        <div className="flex items-center mt-2 space-x-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            ></path>
          </svg>
          <a href="tel:11111111111">+96176153852</a>
        </div>
      </div>
      <div>
        <form>
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            name="botcheck"
          />
          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className="w-full px-4 py-3 border-2 placeholder:text-white  rounded-md outline-none   border-gray-300 focus:border-green-400 bg-transparent  "
              name="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              autoComplete="false"
              className="w-full px-4 py-3 border-2 placeholder:text-white  rounded-md outline-none    border-gray-300 focus:border-green-400 bg-transparent "
              name="email"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-8 border-2 placeholder:text-white  rounded-md outline-none   border-gray-300 focus:border-green-400 bg-transparent"
              name="message"
            ></textarea>
          </div>
          <button className="relative inline-block px-6 py-3 text-lg font-medium tracking-wide text-white bg-transparent border-2 border-green-400 rounded-lg shadow-inner transition-all duration-500 hover:text-white hover:shadow-[inset_0_-100px_0_0] hover:shadow-green-700 active:scale-90">
           send me
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
