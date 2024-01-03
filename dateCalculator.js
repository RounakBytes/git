export function dateDifference(date1, date2) {
    if(!date1 || !date2)
    return {};
    // Calculate the time difference in milliseconds
    const timeDifference = date2.getTime() - date1.getTime();

    // Calculate the number of milliseconds in a day, month, and year
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerMonth = millisecondsPerDay * 30.44; // Approximate value for a month
    const millisecondsPerYear = millisecondsPerDay * 365.25; // Approximate value for a year (considering leap years)

    // Calculate the difference in days, months, and years
    const daysDifference = Math.floor(timeDifference / millisecondsPerDay);
    const monthsDifference = Math.floor(timeDifference / millisecondsPerMonth);
    const yearsDifference = Math.floor(timeDifference / millisecondsPerYear);

    return { days: daysDifference, months: monthsDifference, years: yearsDifference };
}
