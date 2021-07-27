function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('VisitorCount');
const url = 'https://h2r98egvbi.execute-api.us-east-2.amazonaws.com/Prod/VisitorCount/';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let vc = createNode('VisitorCount');
    append(ul, vc);
  })
})
.catch(function(error) {
  console.log(error);
});
