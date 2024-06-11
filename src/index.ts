import type {AttendingState, Partner, YearMonthDay} from './types'
import {objectKeys} from './utils'
import {input} from './data/data-long'

// const attendingStates = chooseEventDates(input)
// console.log(attendingStates)

export function chooseEventDates(input: Partner[]): AttendingState[] {
  const partnersByState = input.reduce(
    (accum, partner) => {
      const state = partner.state
      if (accum[state]) {
        accum[state].push(partner)
      } else {
        accum[state] = [partner]
      }
      return accum
    },
    {} as Record<string, Partner[]>,
  )

  const attendingStates: AttendingState[] = []

  for (const state in partnersByState) {
    const partnersInCountry = partnersByState[state]
    const partnersByAvailableDate = getAvailableTwoDayPeriods(partnersInCountry)

    const chosenDate = chooseBestDate(partnersByAvailableDate)
    const attendeesOnChosenDate = partnersByAvailableDate[chosenDate] ?? []

    attendingStates.push({
      attendeeCount: attendeesOnChosenDate.length,
      attendees: attendeesOnChosenDate.map((partner) => partner.email),
      name: state,
      startDate: chosenDate,
    })
  }

  return attendingStates
}

//
// Helper functions
//

function getAvailableTwoDayPeriods(partners: Partner[]) {
  return partners.reduce(
    (accum, partner) => {
      const availableTwoDayPeriods = partner.availableDates.filter((date) =>
        partner.availableDates.includes(getNextDay(date)),
      )

      availableTwoDayPeriods.forEach((date) => {
        if (accum[date]) {
          accum[date].push(partner)
        } else {
          accum[date] = [partner]
        }
      })
      return accum
    },
    {} as Record<YearMonthDay, Partner[]>,
  )
}

function getNextDay(date: string) {
  const dateObj = new Date(date)
  dateObj.setDate(dateObj.getDate() + 1)
  const isoDateTime = dateObj.toISOString()
  return isoDateTime.substring(0, 10) as YearMonthDay
}

function chooseBestDate(
  partnersByAvailableDate: Record<YearMonthDay, unknown[]>,
) {
  const availableDates = objectKeys(partnersByAvailableDate)
  const attendeeCountForDates = availableDates.map(
    (date) => partnersByAvailableDate[date].length,
  )
  const maxAttendeeCount = Math.max(...attendeeCountForDates)
  const maxAttendeeCountDates = availableDates.filter(
    (date, index) => attendeeCountForDates[index] === maxAttendeeCount,
  )
  const chosenDate = maxAttendeeCountDates.sort()[0] ?? null
  return chosenDate
}
