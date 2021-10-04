// create search functions for full document 
$(document).ready(function() {
    displaySearchHistory();

    // search button on click event
    $('#search-button').on('click', function(event) {
        let searchEvent = $('#search-field').val();
        runSearch(searchEvent);
    });

    // stat search should be the function for the stats lookup. 
    const runSearch = (searchEvent) => {
        statSearch(searchEvent);
    };
});