export const Contact = () => {
  return (
    <section id="contact" className="py-10 ">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="mb-6 text-base font-thin text-gray-600 dark:text-gray-300">
              I'm always open to discussing new opportunities,
              interesting projects, or just chatting about technology
              and development.
            </p>
          </div>
          {/* Availability Status */}

          {/* Contact Form */}
          {/* <div className="p-8 bg-white border border-gray-200 shadow-xl dark:bg-gray-800 rounded-2xl dark:border-gray-700">
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Send me a message
            </h3>

            {submitStatus === 'success' && (
              <div className="p-4 mb-6 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-800">
                <p className="text-green-800 dark:text-green-300">
                  ✅ Message sent successfully! I'll get back to you
                  soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 mb-6 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                <p className="text-red-800 dark:text-red-300">
                  ❌ Something went wrong. Please try again or email
                  me directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg resize-none dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 
                         ${
                           isSubmitting
                             ? 'bg-gray-400 cursor-not-allowed'
                             : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                         } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                I respect your privacy. Your information will only be
                used to respond to your message.
              </p>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};
