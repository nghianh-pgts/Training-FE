const fetchAPI = async () => {
  try {
    let posts = await fetch("https://jsonplaceholder.typicode.com/todos/2");

    let data = await posts.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayData = async () => {
  var post = await fetchAPI();

  var page = document.querySelector(".api-data");

  page.innerHTML = `
        <table style="border: 1px solid black">
            <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.userId}</td>
            </tr>
        </table>
    `;
};

displayData();
