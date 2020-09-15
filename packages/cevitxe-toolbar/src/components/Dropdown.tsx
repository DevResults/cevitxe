﻿/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Transition } from '@tailwindui/react'
import React, { FunctionComponent, useState } from 'react'
import { Button } from './Button'

export const Dropdown: FunctionComponent<any> = ({ children, buttonText, disabled, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setTimeout(() => setIsOpen(!isOpen))
  const close = () => setTimeout(() => setIsOpen(false))

  return (
    <React.Fragment>
      <div className="relative text-left z-0" {...props}>
        <div className="">
          <Button onFocus={toggle}>{buttonText}</Button>
        </div>
        {/* Background overlay */}
        <div
          onClick={close}
          className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-dropdown-backdrop`}
        >
          <div className="absolute inset-0"></div>
        </div>

        <div className="absolute z-dropdown">
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-y-75 -translate-y-10"
            enterTo="transform opacity-100 scale-y-100 translate-y-0"
            leave="transition ease-in duration-100 "
            leaveFrom="transform opacity-100 scale-y-100 translate-y-0"
            leaveTo="transform opacity-0 scale-y-75 -translate-y-5"
          >
            {ref => (
              <div
                ref={ref}
                className="absolute mt-2 w-56 border-gray-400 rounded-md shadow-lg "
                css={{ transformOrigin: 'top left' }}
              >
                <div className="rounded-md bg-white shadow-xs">
                  <div
                    className="py-1 divide-y divide-gray-400 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {children}
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </React.Fragment>
  )
}
