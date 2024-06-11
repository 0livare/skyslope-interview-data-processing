import {expect, test} from 'bun:test'

import * as short from './data/short'
import * as long from './data/long'
import {chooseEventDates} from './index'

function runTest(data) {
  const actual = chooseEventDates(data.input)
  const expected = data.output

  const sortFn = (a, b) => a.name.localeCompare(b.name)
  expected.sort(sortFn)
  actual.sort(sortFn)
  expected.forEach((x) => x.attendees.sort())
  actual.forEach((x) => x.attendees.sort())

  expect(actual).toHaveLength(expected.length)
  expect(actual).toStrictEqual(expected)
}

test('short', () => runTest(short))
// test('long', () => runTest(long))
