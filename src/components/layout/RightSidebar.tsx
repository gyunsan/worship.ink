// new fucntional component RightSidebar

export default function RightSidebar({children }: { children: React.ReactNode}) {

  return (
    <div>
        <aside className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto bg-white shadow-md px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {children}
        </aside>
    </div>
  )}



  