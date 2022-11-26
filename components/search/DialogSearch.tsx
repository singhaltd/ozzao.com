import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function SearchDialog() {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen scrollable container */}
            <div className="fixed inset-0 overflow-y-auto">
                {/* Container to center the panel */}
                <div className="flex min-h-full items-center justify-center">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel className="mx-auto max-w-md rounded bg-white p-5">
                        <Dialog.Title>
                            <div>
                                <input type="text" className='w-full py-2 border px-5' placeholder='search' />
                            </div>
                        </Dialog.Title>
                        <div className='py-2'>
                            <div className='flex justify-between'>
                                <div>recent search</div>
                                <button type='button'>clear all</button>
                            </div>
                            <ul>
                                <li>bag women</li>
                                <li>bag men</li>
                            </ul>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}