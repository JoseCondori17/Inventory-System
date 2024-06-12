import CalendarPage from "@/containers/calendar-page/calendar-page";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = ({}) => {    
  return (
    <main className="m-5 h-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-black font-bold">Calendar</h1>
      </div>
      <div className="flex-1 flex">
        <div className="flex w-3/4">
          <p>image</p>
        </div>
        <div className="flex flex-col w-1/4">
          <CalendarPage></CalendarPage>
        </div>
      </div>
    </main>
  )
}

export default Calendar;


