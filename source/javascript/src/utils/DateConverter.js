/**
 * Data massaging layer to help with convering
 * UNIX timestamps to relevant formats.
 * @author Thanh Tong <ttong@ucsd.edu>, Noah Teshima <nteshima@ucsd.edu>, Zhiyuan Zhang <zhz018@ucsd.edu>
 */
class DateConverter extends Date {
  /**
     * Constructor to create a DateConverter object
     * relative to the given timestamp
     * @param {Number} timestamp Number containing the UNIX timestamp for
     * formatting
     */
  constructor (timestamp = Date.now()) {
    super(timestamp)
  }

  /**
     * Getter for the UNIX timestamp used for formatting in given timezone.
     * @returns {Number} Number containing the UNIX timestamp used for
     * formatting
     */
  get timestamp () {
    return this.getTime() - (this.getTimezoneOffset() * 60 * 1000)
  }

  /**
     * Setter for the UNIX timestamp to use for formatting
     * @param {Number} timestamp Number containing the UNIX timestamp for
     * formatting
     */
  set timestamp (timestamp) {
    this.setTime(timestamp)
  }

  /**
     * Converts a UNIX timestamp to the number of days since
     * January 1, 1970 in local time.
     * @param {timestamp} Number containing the UNIX timestamp
     * in local time
     * @returns {Number} Number of days since January 1, 1970 given
     * by the UNIX timestamp
     */
  getDaysFromTimeStamp (timestamp = this.timestamp) {
    // Number of days since January 1, 1970
    const days = Math.floor(timestamp / (24 * 60 * 60 * 1000))
    return days
  }

  /**
   * Determines whether the given UNIX timestamp meets the following criteria:
   * 1. The day of the week corresponding to this timestamp is at or before
   * the day of the week for the timestamp inside this DateConverter object
   * 2. The date of the corresponding timestamp is within seven days of the
   * timestamp inside this dateconverter object.
   *
   * @param {Number} timestamp UNIX timestamp for comparison
   * @returns {Boolean} Whether the given UNIX timestamp is within the same week
   * as the current date.
   *
   **/
  timestampsInSameWeek (timestamp) {
    // compare to this._timestamp
    // get the days correspond to _timestamp
    const that = this
    const timestampDateConverter = new DateConverter(timestamp)
    const timestampBeginningOfWeek = new DateConverter(this.getBeginningOfWeek())
    if (Math.abs(timestampDateConverter.getDaysFromTimeStamp(timestamp) - timestampBeginningOfWeek.getDaysFromTimeStamp()) < 7) {
      // if (((that.getDay() + 6) % 7) - ((timestampDateConverter.getDay() + 6) % 7) >= 0) {
      return true
      // }
    }
    return false
  }

  /**
   * Determines whether the given UNIX timestamp meets the following criteria:
   * 1. The date of the corresponding timestamp is in the same week as the
   * curren timestamp.
   *
   * @param {Number} timestamp UNIX timestamp for comparison
   * @returns {Boolean} Whether the given UNIX timestamp is within the same week
   * as the current date.
   *
   **/
  oldTimestampInSameWeek (timestamp) {
    // compare to this._timestamp
    // get the days correspond to _timestamp

    const dateToCompare = new DateConverter(timestamp)
    const lowerBound = this.getDaysFromTimeStamp() - ((this.getDay() + 6) % 7)
    const upperBound = lowerBound + 6

    return (lowerBound <= dateToCompare.getDaysFromTimeStamp() && dateToCompare.getDaysFromTimeStamp() <= upperBound)
  }

  /**
   * Get a UNIX timestamp for Monday of the current week.
   * Note that this UNIX timestamp is unique up to the number
   * of days since 12:00AM January 1, 1970 GMT.
   * @returns {Number} UNIX timestamp representing the date for
   * Monday of the current week
   */
  getBeginningOfWeek () {
    const dayOfWeek = (this.getDay() + 6) % 7
    const offsetMillis = (dayOfWeek * 24 * 60 * 60 * 1000)
    const stamp = this.getTime() - offsetMillis
    return stamp
  }

  /**
     * Checks if the given UNIX timestamp is correct up to the
     * number of days.
     * @param {Number} timestamp UNIX timestamp (in GMT time) to
     * check for equality to the number of days
     */
  equals (timestamp) {
    const dateConverter = new DateConverter(timestamp)
    return (this.getDaysFromTimeStamp() === dateConverter.getDaysFromTimeStamp())
  }
}

export { DateConverter }
