import { useState } from 'react'
import Navbar from '../components/navbar'


export default function HomePage() {

  return (
    <div className="w-full h-screen bg-gradient-to-r from-violet-950 to-gray-950">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6
              text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Some info goes here.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-yellow-250 sm:text-6xl">
              Content
            </h1>
            <p className="mt-6 text-lg leading-8 text-amber-50">
              Some paragraph goes here.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm
                font-semibold text-amber-50 shadow-sm hover:bg-indigo-700
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-indigo-700"
              >
                Get started
              </button>
              <a href="#" className="text-sm font-semibold leading-6 text-amber-650">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

