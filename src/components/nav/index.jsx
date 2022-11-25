import { Bell } from '../svgs/bell'
import { Home } from '../svgs/home'
import { Analysis } from '../svgs/analysis'
import { Settings } from '../svgs/settings'
import { User } from '../svgs/user'
import { Logout } from '../svgs/logout'

function Nav() {
    return (
        <div className="bg-cyan-900 flex justify-between rounded-t-3xl sg:rounded-t-none sg:py-10 sg:flex-col">
            <div className='flex justify-around px-5 py-3 w-full sg:h-1/2 sg:flex-col '>
                <Home />
                <Analysis />
                <User />
                <Settings />
                {/* <Bell /> */}
            </div>
            <div className='hidden w-full px-5 sg:flex justify-center '>
                <Logout />
            </div>
        </div>
    )
}

export { Nav }