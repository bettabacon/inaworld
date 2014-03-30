var ONE_SECOND = 1;
var ONE_MINUTE = 60 * ONE_SECOND;
var FIVE_MINUTES = 5 * ONE_MINUTE;
var FIFTEEN_MINUTES = 15 * ONE_MINUTE;
var ONE_HOUR = 60 * ONE_MINUTE;
var ONE_DAY = 24 * ONE_HOUR;
var ONE_WEEK = 7 * ONE_DAY;

module.exports = function(DEBUG) {
  return {
    ONE_SECOND: ONE_SECOND,
    ONE_MINUTE: ONE_MINUTE,
    FIVE_MINUTES: FIVE_MINUTES,
    FIFTEEN_MINUTES: FIFTEEN_MINUTES,
    ONE_HOUR: ONE_HOUR,
    ONE_DAY: ONE_DAY,
    ONE_WEEK: ONE_WEEK,
    PASSPHRASE_TTL: DEBUG ? ONE_MINUTE : FIFTEEN_MINUTES,
    ROOM_TTL: DEBUG ? FIVE_MINUTES : ONE_DAY,
    WRITER_TTL: DEBUG ? FIVE_MINUTES : ONE_DAY,
    STORY_TTL: DEBUG ? FIVE_MINUTES : ONE_WEEK,
    LONG_POLL_TIMEOUT: (DEBUG ? 2 * ONE_SECOND : 20 * ONE_SECOND) * 1000,
    APP_ID: '1415436845376960',
    BASE_URL: 'https://inaworld.herokuapp.com',
    PUNCTUATION: ['.', ',', '?']
  }
}