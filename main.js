HandlebarsIntl.registerWith(Handlebars);

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})
$("#results").on("click", "#clear-search", function () {
    $("#addr-input").val('')
    $("#min-p-input").val('')
    $("#max-p-input").val('')
    $("#min-r-input").val('')
    $("#max-r-input").val('')
    $("#immed-y").val('')
    renderApts(apartments)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments)
    const source = $('#apartment-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ apartments: apartments });
    $('#results').append(newHTML);
}


renderApts(apartments) //renders apartments when page loads