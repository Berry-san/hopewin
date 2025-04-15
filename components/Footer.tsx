import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-primaryBackground">
      <div className="max-w-6xl mx-auto px-10 py-20 flex flex-col lg:flex-row justify-between">
        <div className="">
          <Image
            src={'/images/logo.png'}
            width={100}
            height={100}
            alt={'Hopewin Logo'}
          />
        </div>

        <div className="grid grid-cols-4 gap-10 lg:ml-20">
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base">Home</h4>
            <ul className="mt-4 spce-y-2">
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
            <h4 className="font-bold text-base">Home</h4>
            <ul className="mt-4 spce-y-2">
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
            <ul className="mt-4 spce-y-2">
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
            <h4 className="font-bold text-base">Home</h4>
            <ul className="mt-4 spce-y-2">
              <li>+234 08037169732</li>
              <li>info@hopeforpeacewomen.org</li>
              <li>No. 10 Bashiru Owei Street, Ikeja, Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
