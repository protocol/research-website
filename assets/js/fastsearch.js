var fuse; // holds our search engine
var searchVisible = false;
var firstRun = true; // allow us to delay loading json data unless search activated
var list = document.getElementById('searchResults'); // targets the <ul>
var first = null; // first child of search list
var last = null; // last child of search list
var maininput = document.getElementById('searchInput'); // input box for search
var searchpane = document.getElementById('off-canvas-search'); // search pane
var resultsAvailable = false; // Did we get any search results?

// ==========================================
// The main keyboard event listener running the show
//
document.addEventListener('keydown', function(event) {
  // Allow ESC (27) to close search box
  if (event.keyCode == 27) {
    hideOffCanvasSearch();
  }
});


// ==========================================
// execute search as each character is typed
//
maininput.onkeyup = function(e) {
  executeSearch(this.value);
}

// ==========================================
// Show search pane
//
function showOffCanvasSearch() {
  if(firstRun) {
    loadSearch(); // loads our json data and builds fuse.js search index
    firstRun = false; // let's never do this again
  }

  // Toggle visibility of search box
  if (!searchVisible) {
    document.body.classList.toggle('off-canvas-search-open');
    maininput.focus();
    searchVisible = true;
  }
}

// ==========================================
// Hide  search pane
//
function hideOffCanvasSearch() {
  if (searchVisible) {
    document.body.classList.toggle('off-canvas-search-open');
    searchVisible = false;
  }
}


// ==========================================
// Fetch some json without jquery
//
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
          if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}


// ==========================================
// load our search index, only executed once
// on first call of search box (CMD-/)
//
function loadSearch() {
  fetchJSONFile('/index.json', function(data){

    var options = { // fuse.js options; check fuse.js website for details
      shouldSort: true,
      location: 0,
      distance: 100,
      threshold: 0.6,
      minMatchCharLength: 3,
      keys: [
        {name:'title', weight:1},
        {name:'summary', weight:0.6},
        {name:'authors', weight:0.5},
        {name:'content', weight:0.2},
        {name:'tags', weight:0.5},
        {name:'categories', weight:0.5}
        ]
    };
    fuse = new Fuse(data, options); // build the index from the json file
  });
}


// ==========================================
// using the index we loaded on CMD-/, run
// a search query (for "term") every time a letter is typed
// in the search box
//
function executeSearch(term) {
  let results = fuse.search(term); // the actual query being run using fuse.js
  let searchitems = ''; // our results bucket

  if (term.length < 3)
    return;

  if (results.length === 0) { // no results based on what was typed into the input box
    resultsAvailable = false;
    searchitems = '';
  } else { // build our html
    for (let item in results.slice(0,5)) { // only show first 5 results
      searchitems = searchitems +
      `<div class="py-4">
          <p class="text-sm text-gray-700 mb-2">
            <span>${results[item].item.date}</span>
            <span class="text-blue-200">/</span>

            <span>${results[item].item.type}</span>
          </p>

          <h1 class="text-blue text-bigger leading-tight hover:underline mb-2"><a href="${results[item].item.relpermalink}">${results[item].item.title}</a></h1>

          <div class="multiline-ellipsis-3 md:multiline-ellipsis-3">${results[item].item.summary}</div>
        </div>`
    }
    resultsAvailable = true;
  }

  document.getElementById("searchResults").innerHTML = searchitems;
  if (results.length > 0) {
    first = list.firstChild.firstElementChild; // first result container — used for checking against keyboard up/down location
    last = list.lastChild.firstElementChild; // last result container — used for checking against keyboard up/down location
  }
}
