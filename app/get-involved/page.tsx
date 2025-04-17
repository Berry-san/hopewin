import Donate from '@/components/Donate'
import Volunteer from '@/components/Volunteer'
import Partner from '@/components/Partner'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const GetInvolved = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-10">
      {/* <Volunteer /> */}
      {/* <Partner /> */}
      <Tabs defaultValue="volunteer" className="">
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
      </Tabs>
    </div>
  )
}

export default GetInvolved
