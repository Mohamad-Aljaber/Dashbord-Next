import React, { useState } from "react";
import { EventApi, EventClickArg, EventContentArg, formatDate } from "@fullcalendar/core";
// import FullCalendar, { EventClickArg, EventContentArg, EventApi } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../../lib/event-utils";
import {
  Stack,
  Box,
  Checkbox,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
} from "@mui/material";

interface SidebarProps {
  currentEvents: EventApi[];
}

interface SidebarEventProps {
  event: EventApi;
}

const CalendarApp: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [newEventTitle, setNewEventTitle] = useState<string>("");
  const [selectedEventInfo, setSelectedEventInfo] = useState<any | null>(null);

  const handleDateSelect = (selectInfo: any) => {
    setSelectedEventInfo(selectInfo);
    setDialogOpen(true);
  };

  const handleAddEvent = () => {
    if (newEventTitle.trim() && selectedEventInfo) {
      const calendarApi = selectedEventInfo.view.calendar;
      calendarApi.unselect(); // Clear selection
      calendarApi.addEvent({
        id: createEventId(),
        title: newEventTitle,
        start: selectedEventInfo.startStr,
        end: selectedEventInfo.endStr,
        allDay: selectedEventInfo.allDay,
      });
      setNewEventTitle("");
      setDialogOpen(false);
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'?`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  return (
    <Box
      className="demo-app"
      sx={{ height: "80vh", fontSize: "14px" }}
    >
      <Stack direction="row">
        <Sidebar currentEvents={currentEvents} />
        <Box
          flex={1}
          sx={{
            border: "1px solid #ccc",
            borderRadius: 2,
            p: 2,
          }}
        >
          <FullCalendar
            height={"80vh"}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            initialEvents={INITIAL_EVENTS}
            select={handleDateSelect}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
          />
        </Box>
      </Stack>

      <Dialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            width: "500px",
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Event Title"
            fullWidth
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleAddEvent}
            variant="contained"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentEvents }) => (
  <Paper
    sx={{
      lineHeight: "1.5",
      width: "300px",
      p: 2,
      mx: 2,
      borderRadius: 2,
    }}
  >
    <Typography
      sx={{ textAlign: "center" }}
      variant="h6"
    >
      All Events ({currentEvents.length})
    </Typography>
    <ul>
      {currentEvents.map((event) => (
        <SidebarEvent
          key={event.id}
          event={event}
        />
      ))}
    </ul>
  </Paper>
);

const SidebarEvent: React.FC<SidebarEventProps> = ({ event }) => (
  <li>
    <Typography variant="body2">
      <b>
        {formatDate(event.start || new Date(), {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      : {event.title}
    </Typography>
  </li>
);

const renderEventContent = (eventInfo: EventContentArg) => (
  <Box>
    <Typography
      variant="body2"
      component="b"
    >
      {eventInfo.timeText}
    </Typography>
    <Typography
      variant="body2"
      component="i"
    >
      {eventInfo.event.title}
    </Typography>
  </Box>
);

export default CalendarApp;
