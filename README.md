# SkySlope Data Processing Interview Question

## Setup

You'll need to have `bun` installed:

```bash
npm install -g bun
```

Then you can either:

- run `bun go` to execute the `src/index.ts` file directly
- or `bun test` to run the tests.

---

Open `src/index.ts` to get started!

## Prompt

SkySlope partners with real estate professionals in many states across the US.

You’re in charge of writing the logic to send invitations to a two-day event in each state for SkySlope’s partners in those states. We need to find the dates that will work best based on survey results that partners have sent in and determine how many people can attend.

You’re provided with a list of partners, their states, and which dates they’re available.

Your goal is to, for each state that has partners, find the starting date of the two day period where the most partners can make it for both days in a row. If there are multiple dates with the same number of partners, pick the earlier date. If there are no two days in a row when any partners can make it, return null.

### Example

Here is some sample data with 10 partners:

```json
[
  {
    "firstName": "Dion",
    "lastName": "Lagos",
    "email": "dionmatthew@skyslopepartners.com",
    "state": "California",
    "availableDates": ["2024-05-03", "2024-05-06"]
  },
  {
    "firstName": "Zach",
    "lastName": "Olivare",
    "email": "olivare@skyslopepartners.com",
    "state": "Wisconsin",
    "availableDates": ["2024-04-27", "2024-04-29", "2024-04-30"]
  },
  {
    "firstName": "Stevie",
    "lastName": "Sullivan",
    "email": "bozo@skyslopepartners.com",
    "state": "Colorado",
    "availableDates": ["2024-04-29", "2024-04-30", "2024-05-01"]
  },
  {
    "firstName": "Joe",
    "lastName": "Bailey",
    "email": "joebailey@skyslopepartners.com",
    "state": "Colorado",
    "availableDates": ["2024-04-28", "2024-04-29", "2024-05-01", "2024-05-04"]
  },
  {
    "firstName": "Nick",
    "lastName": "Rudeacov",
    "email": "nrudeacov@skyslopepartners.com",
    "state": "Colorado",
    "availableDates": ["2024-04-28", "2024-04-29", "2024-05-02", "2024-05-04"]
  },
  {
    "firstName": "Ryan",
    "lastName": "Taylor",
    "email": "rt@skyslopepartners.com",
    "state": "Colorado",
    "availableDates": ["2024-04-29", "2024-04-30", "2024-05-02", "2024-05-03"]
  },
  {
    "firstName": "Michell",
    "lastName": "Rios",
    "email": "mrios@skyslopepartners.com",
    "state": "Colorado",
    "availableDates": ["2024-04-30", "2024-05-01"]
  },
  {
    "firstName": "Tim",
    "lastName": "Gibson",
    "email": "tgibson@skyslopepartners.com",
    "state": "Colorado",
    "availableDates": ["2024-04-28", "2024-04-29", "2024-05-01", "2024-05-03"]
  },
  {
    "firstName": "Wilber",
    "lastName": "Zartman",
    "email": "wzartman@skyslopepartners.com",
    "state": "Colorado",
    "availableDates": ["2024-04-29", "2024-04-30", "2024-05-02", "2024-05-03"]
  },
  {
    "firstName": "Eugena",
    "lastName": "Auther",
    "email": "eauther@skyslopepartners.com",
    "state": "California",
    "availableDates": ["2024-05-04", "2024-05-09"]
  }
]
```

For the list of partners above, the correct output would look like this:

```json
[
  {
    "attendeeCount": 1,
    "attendees": ["olivare@skyslopepartners.com"],
    "name": "Wisconsin",
    "startDate": "2024-04-29"
  },
  {
    "attendeeCount": 0,
    "attendees": [],
    "name": "California",
    "startDate": null
  },
  {
    "attendeeCount": 3,
    "attendees": [
      "tgibson@skyslopepartners.com",
      "nrudeacov@skyslopepartners.com",
      "joebailey@skyslopepartners.com"
    ],
    "name": "Colorado",
    "startDate": "2024-04-28"
  }
]
```
