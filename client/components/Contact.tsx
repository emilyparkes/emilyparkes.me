
function Contact () {

  return (
    <>
    
<div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto">
    <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Contact
        </h1>
        <p className="text-gray-400 dark:text-gray-400">
          Send me a message to say hey and chat or ask for my resume. 
        </p>
        <p>Fill in your info below and I&apos;ll get back to you as soon as I can! </p>
      </div>
      <div className="m-7">
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <input type="hidden" name="access_key" value="1ffb06e5-281f-4db3-88b0-ffedbae7666b" />
          <input type="hidden" name="subject" value="New Submissionfrom emilyparkes.me via [Web3Forms]" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <input type="checkbox" name="botcheck" id="" className="hidden"/>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Jane Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" placeholder="janedoe@mail.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

            <textarea id="message" name="message" placeholder="Message" className="height:200px" required/>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact
