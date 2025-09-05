import React from 'react'
import { Link } from 'react-router-dom'
import ProjectDropdown from './ProjectDropdown.jsx'

const Navbar = () => {
  return (
    <>
  {/* Include this script tag or install `@tailwindplus/elements` via npm: */}
  {/*  */}
  <nav className="relative bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <button
            type="button"
            command="--toggle"
            commandfor="mobile-menu"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6 in-aria-expanded:hidden"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6 not-in-aria-expanded:hidden"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <h1 className='text-white'>E Commerce</h1>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
              <Link
              to={"/home"}
                
                aria-current="page"
                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              >
               Home
              </Link>
              <Link
              to={"/about"}
                
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
               About
              </Link>
              <Link
                to={"/product"}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Product
              </Link>
              <ProjectDropdown/>
              <Link
                to="/contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
          {/* Profile dropdown */}
         
        </div>
      </div>
    </div>
    <el-disclosure id="mobile-menu" hidden="" className="block sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
        <Link
          to="/home"
          aria-current="page"
          className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
        >
         Home
        </Link>
        <Link
          to="/about"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          About
        </Link>
        <Link
          to="/product"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Product
        </Link>
        <Link
          to="/project"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Project
        </Link>
        <Link
          to="/contact"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </el-disclosure>
  </nav>
</>

  )
}

export default Navbar
