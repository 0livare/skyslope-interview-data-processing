import type {AttendingState, Partner, YearMonthDay} from './types'
import {input} from './data/short'

/*
 * SkySlope partners with real estate professionals in many states across the US.
 *
 * You’re in charge of writing the logic to send invitations to a two-day event
 * in each state for SkySlope’s partners in those states. We need to find the dates
 * that will work best based on survey results that partners have sent in and
 * determine how many people can attend.
 *
 * You’re provided with `input`; a list of partners, their states, and which dates
 * they’re available.
 *
 * Your goal is to, for each state that has partners, find the starting date of
 * the two day period where the most partners can make it for both days in a row.
 * If there are multiple dates with the same number of partners, pick the earlier
 * date. If there are no two days in a row when any partners can make it, return
 * null.
 */

// const attendingStates = chooseEventDates(input)
// console.log(attendingStates)

export function chooseEventDates(input: Partner[]): AttendingState[] {
  return []
}
