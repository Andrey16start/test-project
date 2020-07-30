// get date by timezone offset
// or get date by utcDate with localTimezoneOffset
export default (timezoneOffset = 0, utcDate) => { // timezoneOffset in minutes
  // localTimezoneOffset convert to hours
  const localTimezoneOffset = new Date().getTimezoneOffset() * -60000;

  let UTCDate = new Date() - localTimezoneOffset;

  if (utcDate) {
    // if date like "2020-04-08 09:57:05" its already UTC date
    if (typeof utcDate === 'string' || utcDate instanceof String) {
      UTCDate = new Date(utcDate);
    }
    // if date in timestamp we need to calc with our localTimezoneOffset
    else {
      UTCDate = new Date(utcDate) - localTimezoneOffset;
    }
  }

  return new Date(UTCDate - timezoneOffset * -60000);
}
