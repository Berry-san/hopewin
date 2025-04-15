import Image from 'next/image'
import Header from './Header'
import { Button } from './ui/button'
import { Donate } from 'iconoir-react'
import Link from 'next/link'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <>
      <section id="hero" className="relative bg-white w-full ">
        <Header />
        <div className="flex items-center justify-center flex-col my-20 text-center space-y-6">
          <h2 className="text-3xl md:text-7xl font-extrabold max-w-4xl">
            Empowering <span className="text-primary">Women</span>, Uplifting{' '}
            <span className="text-secondary">Communities</span>
          </h2>
          <p className="text-xl max-w-3xl">
            Hope for Peace Women Initiative is dedicated to promoting the rights
            and well-being of women and children through education, empowerment,
            and advocacy. Join us in creating a future where every woman and
            child can thrive.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#FFE5F7] to-[#E4FBCC] py-10 px-10">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex flex-col space-y-2 text-center">
              <p className="text-lg md:text-2xl lg:text-8xl font-extrabold">
                1000+
              </p>
              <p className="text-xl">women & children beneficiaries </p>
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <p className="text-lg md:text-2xl lg:text-8xl font-extrabold">
                10+
              </p>
              <p className="text-xl">women & children beneficiaries </p>
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <p className="text-lg md:text-2xl lg:text-8xl font-extrabold">
                3+
              </p>
              <p className="text-xl">women & children beneficiaries </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-20 px-10">
        <div className="grid grid-cols-2">
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 text-center">
            <Image
              src={'/images/about_image.png'}
              width={450}
              height={450}
              alt={'About Image'}
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col text-center md:text-left space-y-8 py-10">
            <h3 className="text-5xl font-extrabold">
              <span className="text-secondary">About</span> Hopewin
            </h3>
            <p className="text-xl font-medium">
              Founded with a vision to empower women and protect children's
              rights, Hope for Peace Women Initiative has been a beacon of hope
              in Nigeria for over two years. We believe that by uplifting women
              and safeguarding children’s rights, we contribute to a more
              equitable and inclusive society
            </p>
            <div className="">
              <Button variant={'outline'} size={'xl'}>
                See More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-20 px-10 space-y-10">
        <h3 className="text-center text-5xl font-extrabold">
          <span className="text-primary">Get</span> Involved
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col justify-center space-y-4 col-span-3 lg:col-span-1">
            <div className="p-2 bg-primaryBackground text-primary rounded-md">
              <Donate className="w-12 h-12" />
            </div>
            <h4 className="text-3xl font-bold">Volunteer with us</h4>
            <p className="">
              Make a difference by volunteering in one of our programs. Whether
              you&atops;re interested in mentoring youth, helping with
              women&atops;s empowerment initiatives, or any project, we have a
              place for you.
            </p>
            <Button variant={'outline'} size={'xl'}>
              See More
            </Button>
          </div>
          <div className="flex flex-col justify-center space-y-4 col-span-3 lg:col-span-1">
            <div className="p-2 bg-primaryBackground text-primary rounded-md">
              <Donate className="w-12 h-12" />
            </div>
            <h4 className="text-3xl font-bold">Volunteer with us</h4>
            <p className="">
              Make a difference by volunteering in one of our programs. Whether
              you&atops;re interested in mentoring youth, helping with
              women&atops;s empowerment initiatives, or any project, we have a
              place for you.
            </p>
            <Button variant={'outline'} size={'xl'}>
              See More
            </Button>
          </div>
          <div className="flex flex-col justify-center space-y-4 col-span-3 lg:col-span-1">
            <div className="p-2 bg-primaryBackground text-primary rounded-md">
              <Donate className="w-12 h-12" />
            </div>
            <h4 className="text-3xl font-bold">Volunteer with us</h4>
            <p className="">
              Make a difference by volunteering in one of our programs. Whether
              you&atops;re interested in mentoring youth, helping with
              women&atops;s empowerment initiatives, or any project, we have a
              place for you.
            </p>
            <Button variant={'outline'} size={'xl'}>
              See More
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-primaryBackground py-20 px-10">
        <div className="max-w-6xl mx-auto space-y-10">
          <h3 className="text-center text-5xl font-extrabold">
            News & <span className="text-primary">Updates</span>
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[url('/images/newsBackground.png')] bg-cover bg-no-repeat bg-center w-full p-2 rounded-md col-span-3 lg:col-span-1">
              <div className="w-full h-40 bg-amber-300 rounded-lg"></div>
              <p className="text-center text-white bg-secondaryBackground rounded-md text-2xl font-semibold p-2 mt-4">
                Annual Women&apos;s Empowerment Conference
              </p>
            </div>
            <div className="bg-[url('/images/newsBackground.png')] bg-cover bg-no-repeat bg-center w-full p-2 rounded-md col-span-3 lg:col-span-1">
              <div className="w-full h-40 bg-amber-300 rounded-lg"></div>
              <p className="text-center text-white bg-secondaryBackground rounded-md text-2xl font-semibold p-2 mt-4">
                Annual Women&apos;s Empowerment Conference
              </p>
            </div>
            <div className="bg-[url('/images/newsBackground.png')] bg-cover bg-no-repeat bg-center w-full p-2 rounded-md col-span-3 lg:col-span-1">
              <div className="w-full h-40 bg-amber-300 rounded-lg"></div>
              <p className="text-center text-white bg-secondaryBackground rounded-md text-2xl font-semibold p-2 mt-4">
                Annual Women&apos;s Empowerment Conference
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <h3 className="text-5xl font-extrabold ">
              <span className="text-primary">Our Success</span> Stories
            </h3>
            <p className="text-2xl mt-2">
              Empowered Women, Thriving Communities
            </p>
          </div>

          <div className="space-y-20">
            <div className="grid grid-cols-2 place-content-center place-items-center">
              <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 text-center ">
                <Image
                  src={'/images/about_image.png'}
                  width={450}
                  height={450}
                  alt={'About Image'}
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col text-center md:text-left space-y-8 py-10">
                <h3 className="text-5xl font-extrabold">
                  Meet <span className="text-secondary">Sarah</span>
                </h3>
                <p className="text-xl font-medium">
                  A young mother who transformed her life through our vocational
                  training program, now running her own business.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 place-content-center place-items-center">
              <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 text-center ">
                <Image
                  src={'/images/about_image.png'}
                  width={450}
                  height={450}
                  alt={'About Image'}
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col text-center md:text-left space-y-8 py-10">
                <h3 className="text-5xl font-extrabold">
                  Meet <span className="text-secondary">Sarah</span>
                </h3>
                <p className="text-xl font-medium">
                  A young mother who transformed her life through our vocational
                  training program, now running her own business.
                </p>
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
      <Footer />
    </>
  )
}

export default LandingPage
