import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const UserCalendar = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState(null);

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!


  const { isLoading } = useSessionContext();
  const [selectedEvent, setSelectedEvent] = useState(null);
  var obj = null;
  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const response = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    obj = response;
    const { error } = response;
    console.log(response);
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: new Date(start).toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
      end: {
        dateTime: new Date(end).toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
      location: "Online",

    };
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        alert("Event created, check your Google Calendar!");
      });
    
  }

  async function getCalendarEvents() {
    console.log("Getting calendar events");
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + session.provider_token, // Access token for google
        },
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const listItem = data.items.map((item) => {
          return {
            title: item.summary,
            start: new Date(item.start.dateTime),
            end: new Date(item.end.dateTime),
            location: item.location,
            description: item.description,
            allDay: false,
          };
        });
        console.log(listItem);
        setEvents(listItem);
        localStorage.setItem("events", JSON.stringify(listItem));
      });
  }

  const EventDetails = ({ event }) => {
    return (
      <div className="w-auto absolute px-6 py-3 rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 text-white">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <div className="whitespace-nowrap">
          <span className="text-lg font-semibold">
          Start Time:
          </span>
          {" "}
          <span>
            {moment(event.start).format("LLL")}
          </span>
        </div>
        <p><span className="text-lg font-semibold">
          End Time:
          </span>
          {" "} 
          <span>
            {moment(event.end).format("LLL")}
          </span>
          </p>
        <p><span className="text-lg font-semibold">
          Location:
          </span>
          {" "} {event.location ?? "Dwarka District Court"}</p>
        {/* add event description here */}
        <p>
          <span className="text-lg font-semibold">
          Description:
          </span>
          {" "} {event.description}

        </p>

        {/* Add other event details here */}
      </div>
    );
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[80%] h-[80%]"
      >
        {session ? (
          <div className="flex flex-col items-center gap-5">
            <h1>Hi, {session.user.email}</h1>
            <h2>Here is your calendar</h2>
            <button className="px-3 py-2 bg-slate-100 border-1 rounded-md" onClick={() => getCalendarEvents()}>Get Events</button>
            <button className="px-3 py-2 bg-slate-100 border-1 rounded-md" onClick={() => signOut()}>Sign out</button>
            {events ? (
              <div className="relative flex justify-center" >
                <Calendar
                  localizer={localizer}
                  defaultDate={new Date()}
                  defaultView="month"
                  events={events}
                  style={{ height: "90vh", width: "80%" }}
                  onSelectEvent={handleSelectEvent}
                />
                  {selectedEvent && <EventDetails event={selectedEvent} />}
              </div>
            ) : (
              <></>
            )}
            {/* <p className="text-xl my-2 text-underline">Start of your event</p>
            <input
              type="date-time"
              onChange={(e) => setStart(e.target.value)}
              value={start}
            />
            <p className="text-xl my-2 text-underline">End of your event</p>
            <input
              type="date-time"
              onChange={(e) => setEnd(e.target.value)}
              value={end}
            />
            <p className="text-xl my-2 text-underline">Event name</p>
            <input
              type="text"
              onChange={(e) => setEventName(e.target.value)}
              value={eventName}
            />
            <p className="text-xl my-2 text-underline">Event description</p>
            <input
              type="text"
              onChange={(e) => setEventDescription(e.target.value)}
              value={eventDescription}
            />
            <button className="px-3 py-2 bg-slate-100 border-1 rounded-md" onClick={() => createCalendarEvent()}>Create Event</button>
            <button className="px-3 py-2 bg-slate-100 border-1 rounded-md" onClick={() => signOut()}>Sign out</button> */}
          </div>
        ) : (
          <div>
            <h1  className="text-2xl my-2 text-underline">Hi, guest</h1>
            <button className="px-3 py-2 bg-slate-100 border-1 rounded-md" onClick={() => googleSignIn()}>Sign in with Google</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserCalendar;
