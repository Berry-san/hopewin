'use client'

import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-10">
      <h2 className="text-primary text-5xl font-extrabold">Contact Us</h2>
      <h3 className="mt-8 text-primary text-2xl font-bold">
        We&apos;d Love to Hear from You
      </h3>
      <p className="mt-4">
        Whether you&apos;re interested in partnering, volunteering, donating, or
        simply learning more about our work, we&apos;re here to connect! Reach
        out to Hope for Peace Women Initiative to see how we can work together
        to create lasting change.
      </p>
      <p className="mt-4">
        <span className="text-primary font-bold">Office Hours: </span>Mon-Fri
        09:00 AM - 05:00PM
      </p>
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        <div className="flex flex-col space-y-2 col-span-4 lg:col-span-2">
          <h4 className="text-primary text-lg font-bold">EMAIL</h4>
          <p className="">Send an email</p>
          <ul className="list-disc list-inside">
            <li>
              Partnerships:{' '}
              <a
                href="mailto:partnerships@hopeforpeacewomen.org"
                className="text-primary"
              >
                partnerships@hopeforpeacewomen.org
              </a>
            </li>
            <li>
              Volunteering:{' '}
              <a
                href="mailto:volunteer@hopeforpeacewomen.org"
                className="text-primary"
              >
                volunteer@hopeforpeacewomen.org
              </a>
            </li>
            <li>
              Donations:{' '}
              <a
                href="mailto:donate@hopeforpeacewomen.org"
                className="text-primary"
              >
                donate@hopeforpeacewomen.org
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2 col-span-3 lg:col-span-1">
          <h4 className="text-primary text-lg font-bold">MESSAGE</h4>
          <p>Send us a message</p>
          <a href="#" className="text-primary">
            partnerships@hopeforpeacewomen.org
          </a>
        </div>
        <div className="flex flex-col space-y-2 col-span-3 lg:col-span-1">
          <h4 className="text-primary text-lg font-bold">INQUIRES</h4>
          <p>Shoot us an email</p>
          <a href="#" className="text-primary">
            info@hopeforpeacewomen.org
          </a>
        </div>
      </div>
      <div className="mt-10 bg-secondaryBackground p-10 lg:p-16 rounded-md grid grid-cols-2 gap-6">
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-primary text-2xl font-bold text-center lg:text-left">
            ADDRESS
          </h3>
          <p className="text-3xl lg:text-6xl mt-4 font-bold lg:font-extrabold text-white text-center lg:text-left">
            No. 10 Bashiru Owei Street, Ikeja, Lagos, Nigeria
          </p>
        </div>
        <Image
          src={'/images/location.png'}
          width={500}
          height={500}
          alt={'Location Image'}
          className="col-span-2 lg:col-span-1 mx-auto"
        />
      </div>
    </div>
  )
}

export default ContactUs
