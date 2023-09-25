// Create an array of event objects
const events = [
    {
      title: 'Birthday Party',
      date: new Date('2023-10-01'),
      location: 'Nairobi Kenya',
      attendees: new Set(['Alice', 'Bob', 'Charlie']),
    },
    {
      title: 'Conference',
      date: new Date('2023-09-30'),
      location: 'Conference Center',
      attendees: new Set(['David', 'Eve', 'Frank']),
    },
    {
      title: 'Team Meeting',
      date: new Date('2023-09-27'),
      location: 'Office',
      attendees: new Set(['Grace', 'Hank', 'Ivy']),
    },
  ];
  
  // Create a Map for event organizers
  const eventOrganizers = new Map();
  eventOrganizers.set('Birthday Party', 'John');
  eventOrganizers.set('Conference', 'Emily');
  eventOrganizers.set('Team Meeting', 'Michael');


  // Function to add a new attendee to an event
  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
    } else {
      console.log(`Event "${eventTitle}" not found.`);
    }
  }
  
  // Function to convert event array to JSON string with formatted date
  function eventsToJSON() {
    return JSON.stringify(events.map(event => ({
      ...event,
      formattedDate: `${event.date.getMonth() + 1}/${event.date.getDate()}/${event.date.getFullYear()}`,
    })));
  }
  
  // Display properties and values of the first event object
  const firstEvent = events[0];
  console.log('Properties of the first event:');
  console.log(Object.keys(firstEvent));
  console.log(Object.values(firstEvent));
  console.log(Object.entries(firstEvent));
  
  // Iterate over the events and log title and date
  console.log('Events happening in the next 7 days:');
  const currentDate = new Date();
  events
    .filter(event => event.date >= currentDate && event.date <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))
    .forEach(event => {
      const { title, date, location } = event;
      console.log(`Title: ${title}, Date: ${date.toDateString()}, Location: ${location}`);
    });
  
  // Add a new attendee to an event
  addAttendee('Birthday Party', 'Grace');
  
  // Convert events to JSON with formatted date
  const eventsJSON = eventsToJSON();
  console.log('Events as JSON with formatted date:');
  console.log(eventsJSON);
  