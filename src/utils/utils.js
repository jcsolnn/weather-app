//Formats float as int
export function formatFloatValue(value) {
  return Number.parseFloat(value).toFixed(0);
}

//Formats as Day, hh:mm AM||PM
export function formatCurrentDateTime(dt) {
  const options = {
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
  };
  //dt is in sec, convert to ms
  const date = new Date(dt * 1000);
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
