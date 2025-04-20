import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="pt-10">
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-secondaryBackground p-4 md:p-10  lg:p-20 grid grid-cols-3 gap-10 mb-10 rounded-2xl place-items-center place-content-center">
          <div className="col-span-3 lg:col-span-2 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
              About Us{' '}
            </h2>
            <p className="text-2xl mt-4">
              Hope for Peace Women Initiative has been a beacon of hope in
              Nigeria for over two years. We believe that by uplifting women and
              safeguarding children&atops;s rights, we contribute to a more
              equitable and inclusive society.
            </p>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <Image
              src={'/images/pie-chart.png'}
              width={500}
              height={500}
              alt={'Programs Image'}
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-primaryBackground rounded-[2rem] lg:rounded-[3.5rem] text-white p-6 md:p-12 lg:p-20 mb-12">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 md:col-span-2 flex flex-col space-y-2 text-center">
              <Image
                src={'/images/about-image.png'}
                width={500}
                height={500}
                className="w-full bg-contain h-full"
                alt={'Programs Image'}
              />
            </div>
            <div className="col-span-3 md:col-span-1 flex flex-col space-y-2 p-4 bg-[#FFC7EA] rounded-[1.5rem]">
              <div className="">
                <h3 className="text-3xl font-bold text-primaryBackground py-2 w-fit px-1 rounded-xl bg-secondaryBackground">
                  Our Core Values
                </h3>
              </div>
              <ul className="list-disc list-inside text-left text-secondaryBackground">
                <li>Integrity</li>
                <li>Empowerment</li>
                <li>Inclusion</li>
                <li>Collaboration</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 gap-4">
            <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 p-4 bg-secondaryBackground rounded-[1.5rem]">
              <h3 className="text-3xl font-bold text-secondaryBackground py-2 w-fit px-1 rounded-xl bg-primaryBackground">
                Our Vision
              </h3>
              <p className="text-white">
                To create a just, inclusive, and empowered society where women,
                children, and marginalized groups thrive socially, economically,
                and intellectually, leading to sustainable development and equal
                opportunities for all.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 p-4 bg-secondaryBackground rounded-[1.5rem]">
              <h3 className="text-3xl font-bold text-secondaryBackground py-2 w-fit px-1 rounded-xl bg-primaryBackground">
                Our Mission
              </h3>
              <p className="text-white">
                Our mission is to safeguard the rights and well-being of women
                and children by providing social, educational, and economic
                empowerment programs. We aim to foster moral values, raise
                awareness on critical issues, mentor the youth, and advocate for
                sustainable development practices, ensuring that every
                individual, regardless of background, can reach their full
                potential.
              </p>
            </div>
          </div>
          <div className="bg-[#FFC7EA] text-secondaryBackground mt-10 rounded-[2rem] px-10 py-10">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
              <div className="flex flex-col space-y-2 text-center">
                <p className="text-3xl md:text-5xl lg:text-8xl font-extrabold">
                  1000+
                </p>
                <p className="text-xl">women & children beneficiaries </p>
              </div>
              <div className="flex flex-col space-y-2 text-center">
                <p className="text-3xl md:text-5xl lg:text-8xl font-extrabold">
                  10+
                </p>
                <p className="text-xl">Community Programs</p>
              </div>
              <div className="flex flex-col space-y-2 text-center">
                <p className="text-3xl md:text-5xl lg:text-8xl font-extrabold">
                  3+
                </p>
                <p className="text-xl">Years of advocacy work </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondaryBackground py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6 text-white flex flex-col items-center justify-center text-center">
          <h3 className="text-4xl font-bold">Reach Out to Us</h3>
          <p className="text-3xl max-w-4xl">
            For any information, enquiries, sponsorship or partnerships, Kindly
            reach out to us today.
          </p>
          <Link href={'/contact-us'}>
            <Button size={'xl'}>Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
