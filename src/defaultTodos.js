import moment from "moment";

const defaultTodos = [
  {
    text: "Morning Run",
    completed: true,
    due: moment("2020-01-22T05:00:00Z")
  },
  {
    text: "Buy Pizza on the way to work",
    completed: false,
    due: moment("2020-01-05T22:00:00Z")
  },
  {
    text: "10AM Meeting",
    completed: false,
    due: moment("2020-01-17T08:00:00Z")
  },
  {
    text: "Work Lunch with the dudes",
    completed: false,
    due: moment("2020-01-17T08:00:00Z")
  }
];

export default defaultTodos;
