import Image from 'next/image'

const programs = [
  {
    id: 1,
    title: 'Health Outreach',
    description:
      'Our Health Outreach program offers free medical checkups and provides essential medications to underserved communities. We are dedicated to improving access to healthcare for women and children.',
  },
  {
    id: 2,
    title: 'Women Empowerment',
    description:
      'Through educational workshops, vocational training, and business mentoring, we provide women with the tools they need to gain financial independence and self-confidence.',
  },
  {
    id: 3,
    title: 'Child Protection & Advocacy',
    description:
      'We are committed to safeguarding the rights of vulnerable children, especially those exposed to abuse, neglect, and lack of access to education. Our child advocacy programs offer legal support, educational opportunities, and mental health services.',
  },
  {
    id: 4,
    title: 'Youth Mentorship',
    description:
      'We provide guidance and mentorship to young people, helping them develop leadership skills and navigate life&atops;s challenges. We connect youth with opportunities for education, employment, and community involvement.',
  },
  {
    id: 5,
    title: 'Back to School',
    description:
      'As part of our commitment to education, we run a Back to School Program where we distribute school bags and stationery to students in public schools, ensuring that every child has the tools they need to succeed.',
  },
  {
    id: 6,
    title: 'Environmental Protection',
    description:
      'Our environmental sustainability projects aim to raise awareness about the importance of preserving our natural resources. We engage communities in clean-up drives, tree-planting campaigns, and sustainable development practices.',
  },
  {
    id: 7,
    title: 'Research and Advocacy',
    description:
      "Our NGO conducts research on social issues affecting women and children, gathering data to inform policies and advocacy campaigns. We also campaign for awareness on critical issues such as women's rights, gender equality, and mental health.",
  },
]

const Programs = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-8">
      {/* <div className="bg-secondaryBackground p-4 md:p-10  lg:p-20 grid grid-cols-3 gap-10 mb-10 rounded-2xl place-items-center place-content-center">
        <div className="col-span-3 lg:col-span-2 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
            Our Programs
          </h2>
          <p className="text-2xl mt-4">
            We organised varieties of programs, centred around promoting the
            rights and well-being of women and children through outreaches.
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
      </div> */}
      <div className="bg-[url('/images/mobile-bg.png')] md:bg-[url('/images/aboutUs-background.png')] bg-no-repeat bg-contain bg-center p-4 md:px-10 lg:px-20 grid grid-cols-3 md:gap-10 mb-6 md:mb-10 rounded-2xl place-items-center place-content-center">
        <div className="col-span-3 md:col-span-2 text-white">
          <h2 className="text-lg md:text-4xl lg:text-6xl font-extrabold mt-4">
            Our Programs
          </h2>
          <p className="text-base md:text-xl lg:text-3xl mt-4">
            We organised varieties of programs, centred around promoting the
            rights and well-being of women and children through outreaches.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <Image
            src={'/images/dart.png'}
            width={150}
            height={150}
            alt={'Programs Image'}
            className="w-44 h-44 sm:w-36 sm:h-36 md:h-64 md:w-56 lg:w-96 lg:h-96 object-fit"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <h3 className="font-bold text-3xl md:text-5xl text-center mb-10">
          Our programs include the following
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`bg-primaryBackground flex flex-col lg:flex-row border p-6 rounded-lg ${
                program.id === 7 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col order-2 lg:order-1">
                <div className="flex mb-4 items-center font-semibold text-2xl">
                  <span className="text-2xl font-bold mr-6 py-2 px-4.5 bg-[#FFC7EA] rounded-full">
                    {program.id}
                  </span>
                  {program.title}
                </div>
                <p className="text-base text-gray-700 font-semibold leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Programs
