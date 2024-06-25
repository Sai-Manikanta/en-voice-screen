import { Fragment } from 'react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import buttonClickSound from "../sounds/button-click-sound.mpeg";

export default function SuccessDrawer({ isOpen, setIsOpen, nextSentenseNumber }) {
  const [playButtonClickSound] = useSound(buttonClickSound);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-end justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-full"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-full"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

              <IoIosCheckmarkCircle size="6rem" class="mx-auto text-green-500" />

              

                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900 text-center mb-8"
                >
                  Correct Answer
                </Dialog.Title>
                {/* <div className="mt-2">
                  <p className=" text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    you an email with all of the details of your order.
                  </p>
                </div> */}

                <div className="mt-4">
                  {/* <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Got it, thanks!
                  </button> */}

                  <Link onClick={playButtonClickSound} to={`/?sentense=${nextSentenseNumber}`} className="block text-center bg-green-500 outline-0 text-white px-4 py-3 w-full rounded font-bold border-b-4 border-green-600">
                    Next 
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
