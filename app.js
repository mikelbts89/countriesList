async function getCountries() {
    let countriesData = await fetch("https://restcountries.eu/rest/v2/all");
    let countriesContent = await countriesData.json();
    console.log(countriesContent);

    drawCard(countriesContent)

    $("#reset").on("click", () => {
        $("#productsContainer").empty();
    })
}
$("#searchOperation").on("click", getCountries);

async function searchCountry() {
    let countriesData = await fetch("https://restcountries.eu/rest/v2/all");
    let countriesContent = await countriesData.json();
    let searchValue = $("#searchCountry").val();
    let key;
    let list = $('#productsContainer');
    for (key in countriesContent) {
        if (countriesContent[key].name.toLowerCase() === searchValue.toLowerCase()) {
            let cardCountry = $("<div></div>");
            cardCountry.addClass("card");
            let imgCountry = $("<IMG/>", {
                src: countriesContent[key].flag,
                class: "card-img-top",
            });
            let paragName = $("<p></p>")
            let paragPopulation = $("<p></p>")
            paragName.text(`Country : ${countriesContent[key].name}`);
            paragPopulation.text(`Populatin : ${countriesContent[key].population}`)
            list.append(cardCountry);
            cardCountry.append(imgCountry);
            cardCountry.append(paragName);
            cardCountry.append(paragPopulation)
        }
    }
    $("#searchCountry").val("");
}

$("#getCountry").on("click", searchCountry);


function drawCard(countriesContent) {
    let list = $('#productsContainer');
    let key;
    for (key in countriesContent) {
        let cardCountry = $("<div></div>");
        cardCountry.addClass("card");
        let imgCountry = $("<IMG/>", {
            src: countriesContent[key].flag,
            class: "card-img-top",
        });
        let paragName = $("<p></p>")
        let paragPopulation = $("<p></p>")
        paragName.text(`Country : ${countriesContent[key].name}`);
        paragPopulation.text(`Populatin : ${countriesContent[key].population}`)
        list.append(cardCountry);
        cardCountry.append(imgCountry);
        cardCountry.append(paragName);
        cardCountry.append(paragPopulation)



    }
}