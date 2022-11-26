import { Popover } from '@headlessui/react'

export default function PupoverUser() {
 
    return (
        <Popover className="relative ">
            <Popover.Button className="bg-slate-200 flex px-3 py-2 rounded-3xl">
            SHOW
            </Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    )
}
