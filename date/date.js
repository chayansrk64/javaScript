
/**
 * JavaScript Date Formats:
 * JavaScript Date Input
 * 
 *  # There are generally 3 types of JavaScript Date input formats:
 * type 1: ISO Date : "2015-03-25" (The International Standard) ("year-month-day")
 * type 2: Short Date : "03/25/2015" ("month/day/year")
 * type 3: Long Date : "Mar 25 2015" or "25 Mar 2015"
 * 
 * 
 * 
 */
 
// JavaScript Date Output
// Independent of input format, javaScript will (by default) output dates in full text string format:
const date = new Date();
// console.log(date) // Wed Aug 13 2025 00:54:55 GMT+0600 (Bangladesh Standard Time)

// JavaScript ISO Dates
// ISO 8601 is the international standard for the representation of dates and times.
// The ISO 8601 syntax (YYYY-MM-DD) is also the preffered JavaScript date format:

{
    const date = new Date("2025-07-13");
    console.log(date) // Sun Jul 13 2025 06:00:00 GMT+0600 (Bangladesh Standard Time)
}