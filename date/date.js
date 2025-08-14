
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
    // console.log(date) // Sun Jul 13 2025 06:00:00 GMT+0600 (Bangladesh Standard Time)
}

{
    const date = new Date();
    // console.log(date)
}

// ISO Dates (Year and Month)
{
    const d = new Date("2025-03-05")
    // console.log(d)
    // ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

    const date = new Date("2025-07-14T15:27:00Z");
    // console.log(date)
}

{
    // JavaScript Long Dates.
    // Long dates are most often written with a "MMM DD YYYY" syntax like this:

    const date1 = new Date("Jan 25 2015");
    const date2 = new Date("25 Jan 2025");
    const date3 = new Date("January 25 2025");
    const date4 = new Date("JANUARY, 25, 2025")
   
}