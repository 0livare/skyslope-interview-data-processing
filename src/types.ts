export type YearMonthDay =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`

export interface Partner {
  firstName: string
  lastName: string
  email: string
  state: string
  availableDates: YearMonthDay[]
}

export interface AttendingState {
  attendeeCount: number
  attendees: string[]
  name: string
  startDate: YearMonthDay | null
}
