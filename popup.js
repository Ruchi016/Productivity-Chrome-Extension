// Get the list of visited websites from storage
chrome.storage.local.get("websites", function(result) {
    // Sort the websites by visit count in descending order
    var sortedWebsites = result.websites.sort(function(a, b) {
      return b.visits - a.visits;
    });
    // Loop through the sorted websites and add them to the home page table
    for (var i = 0; i < sortedWebsites.length; i++) {
      var website = sortedWebsites[i];
      var row = document.createElement("tr");
      var urlCell = document.createElement("td");
      var visitsCell = document.createElement("td");
      urlCell.innerText = website.url;
      visitsCell.innerText = website.visits;
      row.appendChild(urlCell);
      row.appendChild(visitsCell);
      document.getElementById("websites").appendChild(row);
    }
  });