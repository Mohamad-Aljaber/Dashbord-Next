import React, { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
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

const CalendarApp = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedEventInfo, setSelectedEventInfo] = useState(null);

  const handleDateSelect = selectInfo => {
    setSelectedEventInfo(selectInfo);
    setDialogOpen(true);
  };

  const handleAddEvent = () => {
    if (newEventTitle.trim()) {
      const calendarApi = selectedEventInfo.view.calendar;
      calendarApi.unselect();
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

  const handleEventClick = clickInfo => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'?`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = events => {
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
        <DialogTitle>Add New Event </DialogTitle>
        <DialogContent>
          <TextField
            label="Event Title"
            fullWidth
            value={newEventTitle}
            onChange={e => setNewEventTitle(e.target.value)}
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

const Sidebar = ({ currentEvents }) => (
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
      {currentEvents.map(event => (
        <SidebarEvent
          key={event.id}
          event={event}
        />
      ))}
    </ul>
  </Paper>
);

const SidebarEvent = ({ event }) => (
  <li>
    <Typography variant="body2">
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      : {event.title}
    </Typography>
  </li>
);

function renderEventContent(eventInfo) {
  return (
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
}

export default CalendarApp;
