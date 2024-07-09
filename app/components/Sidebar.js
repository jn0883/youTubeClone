import React from 'react'
import {
    MdHomeFilled,
    MdSlowMotionVideo,
    MdHistory,
    MdOutlineWatchLater,
    MdOutlineSubscriptions,
    MdOutlineVideoLibrary
} from "react-icons/md";

export default function Sidebar() {
    const mainlinks = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: "Home"
        },
        {
            icon: <MdSlowMotionVideo className='text-xl' />,
            name: "Shorts"
        },
        {
            icon: <MdOutlineSubscriptions className='text-xl' />,
            name: "Subscription"
        }
    ]

    const otherlinks = [
        {
            icon: <MdHistory className='text-xl' />,
            name: "History"
        },
        {
            icon: <MdOutlineWatchLater className='text-xl' />,
            name: "WatchLater"
        },
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: "VideoLibrary"
        }
    ]

    return (
        <div className='w-2/12 h-screen pr-5 pb-8 bg-[#212121] overflow-auto '>
            <ul className='flex flex-col border-b-2 border-gray-700'>
                {mainlinks.map(({ icon, name }) => {
                    return (
                        <li className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home"? "bg-slate-600" : " "}`} key={name}>
                            <a href="#" className='flex gap-5'>
                                {icon}
                                <span>{name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className='flex flex-col border-b-1 '>
                {otherlinks.map(({ icon, name }) => {
                    return (
                        <li className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home"? "bg-slate-600" : " "}`} key={name}>
                            <a href="#" className='flex gap-5'>
                                {icon}
                                <span>{name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
