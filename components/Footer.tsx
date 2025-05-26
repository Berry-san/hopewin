import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { SlSocialLinkedin } from 'react-icons/sl'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bg-primaryBackground relative">
      <div className="absolute bottom-0 right-0">
        <Image
          src={'/images/footerImage.png'}
          width={150}
          height={150}
          alt={'Programs Image'}
          className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 object-fit"
        />
      </div>

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
                <Link href={'/get-involved/donate'}>Donate</Link>
              </li>
              <li>
                <Link href={'/get-involved/partner'}>Become a partner</Link>
              </li>
              <li>
                <Link href={'/get-involved/volunteer'}>Volunteer with us</Link>
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
        &copy; {year} Hopewin. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
