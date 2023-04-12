// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const fetchMultipleApis = async (apiUrls) => {
  const startTimeAll = performance.now();
  const allResponses = await Promise.any(apiUrls.map(url => fetch(url)));
  const endTimeAll = performance.now();

  const startTimeAny = performance.now();
  const anyResponse = await Promise.any(apiUrls.map(url => fetch(url)));
  const endTimeAny = performance.now();

  const allTime = endTimeAll - startTimeAll;
  const anyTime = endTimeAny - startTimeAny;
  document.getElementById("output-all").innerHTML = allTime;
  document.getElementById("output-any").innerHTML = anyTime;
	//alert(allTime);
	//alert(anyTime);
};
fetchMultipleApis(apiUrls);