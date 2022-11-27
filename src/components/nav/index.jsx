import { Bell } from '../svgs/bell'
import { Home } from '../svgs/home'
import { Analysis } from '../svgs/analysis'
import { Settings } from '../svgs/settings'
import { User } from '../svgs/user'
import { Logout } from '../svgs/logout'

function Nav() {
    const icons = [
        [
            <Home />,
            "Home"
        ],
        [
            <Analysis />,
            "Analysis"
        ],
        [
            <User />,
            "User"
        ],
        [
            <Settings />,
            "Settings"
        ],
    ]

    return (
        <div className="bg-purple text-white [box-shadow: 0px 0px 10px 0px black] flex justify-between rounded-t-3xl sg:rounded-t-none sg:py-10 sg:flex-col">
            <ul className='flex justify-around px-5 py-3 w-full sg:h-1/2 sg:flex-col '>
                {
                    icons.map((icon, i) => (
                        <li
                            key={i}
                            className="flex justify-start items-center cursor-pointer"
                        >
                            {
                                icon[0]
                            }
                            <span className='hidden font-semibold px-3 sg:block'>
                                {
                                    icon[1]
                                }
                            </span>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden w-full px-5 cursor-pointer sg:flex'>
                <Logout />
                <span className='px-3 font-semibold'>Logout</span>
            </div>
        </div>
    )
}

export { Nav }