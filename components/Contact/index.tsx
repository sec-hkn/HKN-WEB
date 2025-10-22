"use client";
import NewsLatterBox from "./NewsLatterBox";
import emailjs from "emailjs-com";
const Contact = () => {
  return (
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                  className="shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Wanna Tell Something ? ...
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our team will get back to you ASAP via email.
                </p>
                <form id={"contact-form"}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                            id={"name-input"}
                            type="text"
                            placeholder="Enter your name"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                            id={"name-input"}
                            type="email"
                            placeholder="Enter your email"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                            id={"message-input"}
                            name="message"
                            rows={5}
                            placeholder="Enter your Message"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button onClick={(e) => {
                        e.preventDefault();
                        // emailjs.send('service_8w8z5xg', 'template_1j7h6qo', {
                        //   to: 'ms.shiva2019@gmail.com',
                        //   name: 'Shiva',
                        //   message: `Message from ${document.getElementById('name-input')?.innerHTML}
                        // with email ${document.getElementById('email-input')?.innerHTML}
                        // is ${document.getElementById('message-input')?.innerHTML}}`,
                        //
                        // }).then(r => {
                        //   console.log(r.text)
                        // });
                        document.getElementById('message-sent-label')?.classList.remove('hidden');
                      }}
                              className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                        Submit
                      </button>
                      <div id={'message-sent-label'} className={"text-emerald-500 hidden text-xl"}>
                        Your message has been sent!
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
