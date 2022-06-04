const KEY = '518bd7494c164d8ba2340944220406';

const fetchData = async (cidade) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cidade}&aqi=no`;
  const fetchResponce = await fetch(url);
  const data = await fetchResponce.json();

  return data;
};

export default fetchData;
