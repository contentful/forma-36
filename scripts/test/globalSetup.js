module.exports = () => {
  // Explicitly set this to something other than UTC to ensure we are respecting timezones
  process.env.TZ = 'America/Los_Angeles';
};
