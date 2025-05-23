import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { SlSocialLinkedin } from 'react-icons/sl'

const Footer = () => {
  return (
    <div className="bg-primaryBackground">
      <div className="max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row justify-between">
        <div className="mr-20 mb-6 flex flex-col space-y-4">
          <Image
            src={'/images/logo.png'}
            width={100}
            height={100}
            alt={'Hopewin Logo'}
          />
          <div className="md:flex space-x-4 hidden">
            <Link href={'/'}>
              <FaFacebookF className="text-primary w-6 h-6" />
            </Link>
            <Link href={'/'}>
              <IoLogoInstagram className="text-primary w-6 h-6" />
            </Link>
            <Link href={'/'}>
              <FaXTwitter className="text-primary w-6 h-6" />
            </Link>
            <Link href={'/'}>
              <SlSocialLinkedin className="text-primary w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-20">
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base">Home</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={'/'}>About Us</Link>
              </li>
              <li>
                <Link href={'/about-us'}>Our Programs</Link>
              </li>
              <li>
                <Link href={'/contact-us'}>Our Reach</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-base">Get Involved</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={'/'}>Donate</Link>
              </li>
              <li>
                <Link href={'/about-us'}>Become a partner</Link>
              </li>
              <li>
                <Link href={'/contact-us'}>Volunteer with us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-base">Events</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={'/'}>Blog Posts</Link>
              </li>
              <li>
                <Link href={'/about-us'}>Latest News</Link>
              </li>
              <li>
                <Link href={'/contact-us'}>Success Stories</Link>
              </li>
              <li>
                <Link href={'/contact-us'}>Upcoming Events</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-base">Contact Us</h4>
            <ul className="mt-4 space-y-2">
              <li>+234 08037169732</li>
              <li>info@hopeforpeacewomen.org</li>
              <li>No. 10 Bashiru Owei Street, Ikeja, Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden space-x-6 flex items-center justify-center">
        <Link href={'/'}>
          <FaFacebookF className="text-primary w-6 h-6" />
        </Link>
        <Link href={'/'}>
          <IoLogoInstagram className="text-primary w-6 h-6 font-bold" />
        </Link>
        <Link href={'/'}>
          <FaXTwitter className="text-primary w-6 h-6" />
        </Link>
        <Link href={'/'}>
          <SlSocialLinkedin className="text-primary w-6 h-6 font-bold" />
        </Link>
      </div>
      <p className="text-center text-base my-6">
        &copy; 2025 Hopewin. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
