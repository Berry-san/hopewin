'use client'

import Image from 'next/image'
import Header from './Header'
import { Button } from './ui/button'
import { Donate } from 'iconoir-react'
import GiveMoney from './svgs/GiveMoney'
import Handshake from './svgs/Handshake'
import Link from 'next/link'
import Footer from './Footer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useRouter } from 'next/navigation'

const eventItems = [
  {
    title: "Annual Women's Empowerment Conference",
    background: '/images/conference.png',
  },
  {
    title: 'Child Protection Awareness Workshop',
    background: '/images/workshop.png',
  },
  {
    title: 'Back to School Program',
    background: '/images/school.png',
  },
]

const LandingPage = () => {
  const router = useRouter()
  return (
    <>
      <section id="hero" className="relative bg-white w-full ">
        <div className="flex items-center justify-center flex-col my-20 text-center space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-7xl font-extrabold max-w-4xl">
            Empowering <span className="text-primary">Women</span>,{' '}
            <span className="text-secondary">Uplifting</span> Communities
          </h2>
          <p className="text-xl max-w-3xl">
            Hope for Peace Women Initiative is dedicated to promoting the rights
            and well-being of women and children through education, empowerment,
            and advocacy. Join us in creating a future where every woman and
            child can thrive.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link href="/get-ivolved/donate">
              <Button size={'xl'} className="">
                Donate to our cause
              </Button>
            </Link>
            <Link href="/get-involved/partner">
              <Button size={'xl'} variant="outline">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#FFE5F7] to-[#E4FBCC] py-10 px-10">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
            <div className="flex flex-col space-y-2 text-center">
              <p className="text-3xl md:text-5xl lg:text-8xl font-extrabold">
                1000+
              </p>
              <p className="text-xl">Women & children beneficiaries </p>
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
      </section>
      <section className="bg-white/10 backdrop-blur-2xl">
        <div className="py-20 px-10 bg-gradient-to-r from-[#FCCEEE] to-[#E4FBCC] ">
          <div className="grid grid-cols-2 max-w-7xl mx-auto ">
            <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 text-center order-2 lg:order-1">
              <Image
                src={'/images/about-section-image.png'}
                width={450}
                height={450}
                alt={'About Image'}
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col text-center md:text-left space-y-8 py-10 order-1 lg:order-2">
              <h3 className="text-5xl font-extrabold">
                <span className="text-secondary">About</span> Hopewin
              </h3>
              <p className="text-xl font-medium">
                Founded with a vision to empower women and protect children's
                rights, Hope for Peace Women Initiative has been a beacon of
                hope in Nigeria for over two years. We believe that by uplifting
                women and safeguarding children&atops;s rights, we contribute to
                a more equitable and inclusive society
              </p>
              <div className="">
                <Button variant={'outline'} size={'xl'} className="w-1/3">
                  See More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 bg-white/20"></div>
      </section>
      <section className="py-10 px-10 space-y-10 bg-primaryBackground min-h-screen flex flex-col items-center justify-center">
        <h3 className="text-5xl font-extrabold">
          Our <span className="text-primary">Programs</span>
        </h3>
        <div className="grid grid-cols-4 grid-rows-9 gap-4 md:grid-cols-6 md:grid-rows-6 w-full max-w-7xl mx-auto h-full">
          {/* Element 1 */}
          <div className="row-span-4 col-span-2 md:row-span-4 md:col-span-2 bg-[url(/images/grid-1.png)] bg-cover bg-no-repeat bg-center p-4 rounded-[1rem] md:rounded-[3rem] shadow flex items-end justify-center">
            <p className="text-white text-base text-center md:text-2xl lg:text-3xl font-bold">
              Women <span className="text-[#23DB76]">Empowerment</span>
            </p>
          </div>

          {/* Element 2 */}
          <div className="row-span-2 col-span-2 md:row-span-3 md:col-span-2 bg-[url(/images/grid-2.png)] bg-cover bg-no-repeat bg-center p-4 rounded-[1rem] md:rounded-[3rem] shadow flex items-end justify-center">
            <p className="text-white text-base text-center md:text-2xl lg:text-3xl font-bold">
              Youth <span className="text-primary">Mentorship</span>
            </p>
          </div>

          {/* Element 3 */}
          <div className="row-span-3 col-span-2 md:row-span-2 md:col-span-2 bg-[url(/images/grid-3.png)] bg-cover bg-no-repeat bg-center p-4 rounded-[1rem] md:rounded-[3rem] shadow flex items-end justify-center">
            <p className="text-white text-base text-center md:text-2xl lg:text-3xl font-bold mt-10">
              Environmental <span className="text-[#23DB76]">Protection</span>
            </p>
          </div>

          {/* Element 4 */}
          <div className="row-span-2 col-span-2 md:row-span-4 md:col-span-2 bg-[url(/images/grid-6.png)] bg-cover bg-no-repeat bg-center p-4 rounded-[1rem] md:rounded-[3rem] shadow flex items-end justify-center">
            <p className="text-white text-base text-center md:text-2xl lg:text-3xl font-bold mt-10">
              Child{' '}
              <span className="text-primary">
                protection <span className="text-white">&</span> Advocacy
              </span>
            </p>
          </div>

          {/* Element 5 */}
          <div className="row-span-4 col-span-2 md:row-span-3 md:col-span-2 bg-[url(/images/grid-5.png)] bg-cover bg-no-repeat bg-center p-4 rounded-[1rem] md:rounded-[3rem] shadow flex items-end justify-center">
            <p className="text-white text-sm md:text-2xl lg:text-3xl font-bold max-w-[15rem] text-center">
              <span className="text-[#23DB76]">Back to School</span> Progam
            </p>
          </div>

          {/* Element 6 */}
          <div className="row-span-3 col-span-2 md:row-span-2 md:col-span-2 bg-[url(/images/grid-4.png)] bg-cover bg-no-repeat bg-center px-4 py-6 rounded-[1rem] md:rounded-[3rem] shadow flex items-end justify-center">
            <p className="text-white text-base text-center md:text-2xl lg:text-3xl font-bold">
              <span className="text-primary">Research</span> & Advocacy
            </p>
          </div>
        </div>
        <Button
          variant={'outline'}
          size={'xl'}
          className="bg-transparent lg:w-1/3"
        >
          See all
        </Button>
      </section>
      <section className="max-w-7xl mx-auto py-20 px-10 space-y-10">
        <h3 className="text-center text-5xl font-extrabold">
          <span className="text-primary">Get</span> Involved
        </h3>
        {/* <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col justify-center space-y-4 col-span-3 lg:col-span-1">
            <div className="w-fit p-2 bg-primaryBackground text-primary rounded-md">
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
            <div className="w-fit p-2 bg-primaryBackground text-primary rounded-md">
              <Donate className="w-12 h-12" />
            </div>
            <h4 className="text-3xl font-bold">Become a partner</h4>
            <p className="">
              We welcome partnerships with organizations, businesses, and
              individuals who share our vision. By working together, we can
              extend our impact and reach more communities.
            </p>
            <Button variant={'outline'} size={'xl'}>
              See More
            </Button>
          </div>
          <div className="flex flex-col justify-center space-y-4 col-span-3 lg:col-span-1">
            <div className=" w-fit p-2 bg-primaryBackground text-primary rounded-md">
              <Donate className="w-12 h-12" />
            </div>
            <h4 className="text-3xl font-bold">Donate</h4>
            <p className="">
              Your donations go directly to funding our programs, from providing
              education to vulnerable children to supporting women in their
              journey toward independence. Every contribution makes a
              difference.
            </p>
            <Button variant={'outline'} size={'xl'}>
              See More
            </Button>
          </div>
        </div> */}
        <div className="grid grid-cols-3 gap-12">
          {[
            {
              title: 'Volunteer with us',
              icon: <Donate className="w-12 h-12" />,
              path: '/get-involved/volunteer',
              description:
                "Make a difference by volunteering in one of our programs. Whether you're interested in mentoring youth, helping with women's empowerment initiatives, or any project, we have a place for you.",
            },
            {
              title: 'Become a partner',
              icon: <Handshake className="w-12 h-12" />,
              path: '/get-involved/partner',
              description:
                'We welcome partnerships with organizations, businesses, and individuals who share our vision. By working together, we can extend our impact and reach more communities.',
            },
            {
              title: 'Donate',
              icon: <GiveMoney className="w-12 h-12" />,
              path: '/get-involved/donate',
              description:
                'Your donations go directly to funding our programs, from providing education to vulnerable children to supporting women in their journey toward independence. Every contribution makes a difference.',
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col col-span-3 lg:col-span-1">
              {/* Icon always at top */}
              <div className="w-fit p-2 bg-primaryBackground text-primary rounded-md mb-4">
                {item.icon}
              </div>

              {/* Growable content section */}
              <div className="flex-grow space-y-4">
                <h4 className="text-3xl font-bold">{item.title}</h4>
                <p className="text-base">{item.description}</p>
              </div>

              {/* Button always at bottom */}
              <div className="pt-4 mt-6">
                <Button
                  variant={'outline'}
                  size={'xl'}
                  className="w-full cursor-pointer"
                  onClick={() => router.push(item.path)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primaryBackground py-20 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="lg:px-20">
            <h3 className="text-center text-5xl font-extrabold">
              News & <span className="text-primary">Updates</span>
            </h3>
            <div className="flex items-center md:justify-between py-10">
              {/* <h4 className="text-3xl text-center text-secondaryBackground md:text-left w-full font-bold max-w-[15rem] mx-auto md:mx-0">
                Our Upcoming <span className="text-primary">Events</span>
              </h4> */}
              <h4
                className="text-3xl text-center md:text-left w-full font-bold max-w-[15rem] mx-auto md:mx-0
             bg-gradient-to-b from-[#000000] to-[#EA188E] bg-clip-text text-transparent leading-tight"
              >
                Our Upcoming
                <br />
                Events
              </h4>
              <div className="max-w-md hidden md:block">
                <p className="mb-4">
                  Stay updated on our latest events, community outreach, and
                  stories of impact. We share updates on ongoing projects, and
                  opinion pieces on trending social issues affecting women and
                  children.
                </p>
                <Button>See Blog</Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex">
            <svg
              className="w-full h-20 -m-6"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              {/* Start Dot */}
              <circle cx="0.5" cy="2" r="0.35" fill="#F371BD" />

              {/* Dashed Line */}
              <line
                x1="1"
                y1="2"
                x2="98"
                y2="2"
                stroke="#F371BD"
                strokeWidth="0.1"
                strokeDasharray="1 0.5"
              />

              {/* End Dot */}
              <circle cx="99" cy="2" r="0.35" fill="#F371BD" />
            </svg>
          </div>

          <Carousel className="w-full lg:px-20">
            <CarouselContent className="-ml-2">
              {eventItems.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-cover bg-[url('/images/newsBackground.png')] bg-no-repeat bg-center w-full p-2 rounded-md">
                    <Image
                      src={event.background}
                      width={300}
                      height={300}
                      alt={'Conference Image'}
                      className="w-full aspect-[4/3] rounded-lg"
                    />
                    <p className="text-center text-white bg-secondaryBackground rounded-md text-2xl font-semibold p-2 mt-2 min-h-[7.5rem] md:min-h-[5.5rem]">
                      {event.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          <div className="max-w-md block md:hidden items-center text-center">
            <p className="mb-4">
              Stay updated on our latest events, community outreach, and stories
              of impact. We share updates on ongoing projects, and opinion
              pieces on trending social issues affecting women and children.
            </p>
            <Button>See More</Button>
          </div>
        </div>
      </section>
      <section className="py-20 px-10 bg-gradient-to-r from-[#FCCEEE] to-[#E4FBCC]">
        <div className="max-w-7xl mx-auto space-y-10">
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
              <div className="col-span-2 md:col-span-1 flex flex-col text-center md:text-left space-y-8 py-10">
                <h3 className="text-5xl font-extrabold">
                  Meet <span className="text-secondary">Sarah</span>
                </h3>
                <p className="text-xl font-medium">
                  A young mother who transformed her life through our vocational
                  training program, now running her own business.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 text-center ">
                <Image
                  src={'/images/sarah.png'}
                  width={450}
                  height={450}
                  alt={'About Image'}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 place-content-center place-items-center">
              <div className="col-span-2 md:col-span-1 flex flex-col text-center md:text-left space-y-8 py-10 order-1 md:order-2">
                <h3 className="text-5xl font-extrabold">
                  Hope Restored for{' '}
                  <span className="text-secondary">Ameenah</span>
                </h3>
                <p className="text-xl font-medium">
                  A child once at risk of dropping out of school is now
                  excelling in his studies thanks to our child protection
                  initiative.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col space-y-2 text-center order-2 md:order-1">
                <Image
                  src={'/images/ameenah.png'}
                  width={450}
                  height={450}
                  alt={'About Image'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondaryBackground py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6 text-white flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl md:text-4xl font-bold">Reach Out to Us</h3>
          <p className="text-xl md:text-3xl max-w-4xl">
            For any information, enquiries, sponsorship or partnerships, Kindly
            reach out to us today.
          </p>
          <Link href={'/contact-us'}>
            <Button size={'xl'}>Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default LandingPage
