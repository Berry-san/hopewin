'use client'

import Donate from '@/components/Donate'
import Volunteer from '@/components/Volunteer'
import Partner from '@/components/Partner'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

const GetInvolved = () => {
  const [tab, setTab] = useState('volunteer')

  return (
    <div className="max-w-6xl mx-auto py-10 px-10 overflow-x-hidden">
      <div
        className="bg-secondaryBackground p-4 md:p-10  lg:p-20 grid grid-cols-3 gap-10 mb-10 rounded-2xl place-items-center place-content-center"
        // style={{ clipPath: 'polygon(0% 0%, 100% 0%, 95% 90%, 2.5% 100%)' }}
      >
        <div className="col-span-3 lg:col-span-2 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
            Get Involved
          </h2>
          <p className="text-2xl mt-4">
            Founded with a vision to empower women and protect children's
            rights, Hope for Peace Women Initiative has been a beacon of hope in
            Nigeria for over two years.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Image
            src={'/images/pie-chart.png'}
            width={500}
            height={500}
            alt={'Programs Image'}
            className="w-full max-w-[300px] mx-auto lg:max-w-full"
          />
        </div>
      </div>
      {/* <Tabs defaultValue="volunteer" className="">
        <TabsList className="flex justify-center mb-6">
          <TabsTrigger value="volunteer">Volunteer with Us</TabsTrigger>
          <TabsTrigger value="partner">Partner with Us</TabsTrigger>
          <TabsTrigger value="donate">Donate to our cause</TabsTrigger>
        </TabsList>
        <TabsContent value="volunteer">
          <Volunteer />
        </TabsContent>
        <TabsContent value="partner">
          <Partner />
        </TabsContent>
        <TabsContent value="donate">
          <Donate />
        </TabsContent>
      </Tabs> */}
      {/* Tabs Wrapper */}
      <Tabs value={tab} onValueChange={setTab}>
        {/* DESKTOP TABS */}
        <TabsList className="hidden md:flex justify-center mb-6">
          <TabsTrigger value="volunteer">Volunteer with Us</TabsTrigger>
          <TabsTrigger value="partner">Partner with Us</TabsTrigger>
          <TabsTrigger value="donate">Donate to our Cause</TabsTrigger>
        </TabsList>

        {/* MOBILE RADIO SWITCH */}
        <div className="relative flex flex-col items-start gap-8 mb-10 md:hidden">
          {[
            { value: 'volunteer', label: 'Volunteer with Us' },
            { value: 'partner', label: 'Partner with Us' },
            { value: 'donate', label: 'Donate to our Cause' },
          ].map((item, index, arr) => {
            const isSelected = tab === item.value
            const lineColor = isSelected ? 'bg-primary' : 'bg-primary/50'
            const dotColor = isSelected ? 'text-primary' : 'text-primary/50'

            return (
              <div key={item.value} className="relative">
                {/* Line below radio */}
                {index < arr.length - 1 && (
                  <div
                    className={`absolute left-[0.57rem] top-5 h-[2.5rem] w-px ${lineColor}`}
                  />
                )}

                {/* Radio and label */}
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="tab"
                    value={item.value}
                    checked={isSelected}
                    onChange={() => setTab(item.value)}
                    className={`accent-primary h-5 border border-primary w-5 ${dotColor}`}
                  />
                  <span
                    className={`${
                      isSelected ? 'text-primary' : 'text-primary/50'
                    } text-sm font-medium`}
                  >
                    {item.label}
                  </span>
                </label>
              </div>
            )
          })}
        </div>

        {/* Content */}
        <TabsContent value="volunteer">
          <Volunteer />
        </TabsContent>
        <TabsContent value="partner" className="overflow-hidden">
          <Partner />
        </TabsContent>
        <TabsContent value="donate">
          <Donate />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default GetInvolved
