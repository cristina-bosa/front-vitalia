import { CalendarDaysIcon, FolderOpenIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-auto h-full" aria-label="Sidenav">
      <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <ul className="space-y-2">
          <li>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" href="#">
              <Squares2X2Icon className="size-7" />
            </a>
          </li>
          <li>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" href="#">
              <CalendarDaysIcon className="size-7" />
            </a>
          </li>
          <li>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" href="#">
              <FolderOpenIcon className="size-7" />
            </a>
          </li>
          <li>
            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" href="#">
              <UserIcon className="size-7" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar