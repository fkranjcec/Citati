const quotes = [
    "Ostvari svoj potencijal!", "Nema problema koji ne možete riješiti!", "Svaki dan je nova prilika za uspjeh!", "Nikada nemojte odustati od svojih snova!", "Istinski znak inteligencije nije znanje nego mašta!", "Što ne boli nije život. Što ne prolazi nije sreća.", "Izgovorena se riječ ne može povratiti.", "Život nije samo imati dobre karte, već i dobro odigrati čak i kad su loše."
];

$(function() {
    const quote = $("#quote");
    const generateBtn = $("#generate");

    generateBtn.on(
        {
            click: () => {
                const randomIndex = Math.floor(Math.random() * quotes.length);

                quote.fadeOut(1000, () => {
                    quote.text(quotes[randomIndex]);
                }).fadeIn();
            }
        }
    )
})