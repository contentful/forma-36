export type ISO8601Timestamp = string
export type UNIXEpochMillis = number
/**
 * CoercibleDate is a date represented as a JS Date object or something that can be coerced to a
 * JS Date object.
 *
 * @example new Date()
 * @example '2020-08-12T01:23:45.000Z'
 * @example 1597195425000
 **/
export type CoercibleDate = Date | ISO8601Timestamp | UNIXEpochMillis
