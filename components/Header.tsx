'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import path from 'path'

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [showStickyHeader, setShowStickyHeader] = useState(false)

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Programs', path: '/programs' },
    { label: 'Get Involved', path: '/get-involved/volunteer' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero')
      if (!hero) return

      const heroRect = hero.getBoundingClientRect()
      const heroHalfHeight = hero.offsetHeight / 2

      setShowStickyHeader(heroRect.bottom < heroHalfHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isActive = (itemPath: string) => {
    if (itemPath === '/') return pathname === '/' // exact match for home
    return pathname.startsWith(itemPath) // match nested paths
  }

  console.log(isActive(pathname))

  return (
    <>
      <header className="fixed bg-white top-0 z-40 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4 w-full">
          {/* Logo */}
          <Link className="flex-shrink-0" href={'/'}>
            <Image
              src={'/images/logo.png'}
              width={40}
              height={40}
              alt="Ethica"
              style={{ width: 'auto' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`px-4 py-2 rounded-full transition ${
                  isActive(item.path) ? 'text-primary' : 'text-black'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/get-involved/volunteer">
              <Button variant="outline" className="">
                Become a Partner
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button className=" text-white">Contact Us</Button>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col px-4 md:px-10 py-4 space-y-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link className="flex-shrink-0" href={'/'}>
                <Image
                  src={'/images/logo.png'}
                  width={40}
                  height={40}
                  alt="Hopewin"
                  style={{ width: 'auto' }}
                />
              </Link>

              {/* Hamburger Icon */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-black p-1"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            <nav className="flex flex-col space-y-2 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md transition ${
                    isActive(item.path) ? 'text-primary' : 'text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3">
              <Link
                href="/get-involved/volunteer"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" size={'xl'} className="w-full">
                  Become a Partner
                </Button>
              </Link>
              <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Header After Scrolling */}
      {/* {showStickyHeader && (
        <div className="fixed top-0 left-0 w-full mt-2 hidden lg:block z-40 transition-all duration-300 px-4 md:px-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 rounded-full bg-white">
            <Link href={'/'}>
              <Image
                src={'/images/logo.png'}
                width={40}
                height={40}
                alt="Ethica"
                style={{ width: 'auto' }}
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-3 py-1 rounded-md font-medium text-base transition ${
                    pathname === item.path && 'text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex space-x-3">
              <Link href="/get-involved">
                <Button variant="outline" className=" text-primary">
                  Become a partner
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button className="bg-primary text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </>
  )
}

export default Header
