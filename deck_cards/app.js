// Objective 1

let url = 'https://deckofcardsapi.com/api/deck'

async function newDraw() {
    try {
        let res = await axios.get(`${url}/new/draw/`)
        // console.log("Objective 1", res)
        let { suit, value } = res.data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
    } catch (e) {
        console.log("Rejected:", e)
    }
}

newDraw()

// Objective 2

async function twoCards() {
    try {
        let res1 = await axios.get(`${url}/new/draw/`)
        var { suit, value } = res1.data.cards[0];

        let deckId = res1.data.deck_id

        let res2 = await axios.get(`${url}/${deckId}/draw/`)
        var { suit, value } = res2.data.cards[0];

        console.log("First Card:", `${value.toLowerCase()} of ${suit.toLowerCase()}`)
        console.log("Second Card:", `${value.toLowerCase()} of ${suit.toLowerCase()}`)
        
    } catch (e) {
        console.log("Rejected:", e)
    }
}

twoCards()

// Objective 3

async function drawCards() {
    let $button = $('.button')
    let $table = $('.table')
    $button.show();
    try {
        let res = await axios.get(`${url}/new/shuffle/`)
        let deckId = res.data.deck_id;   

        $button.on('click', async function() {
            let res = await axios.get(`${url}/${deckId}/draw/`)
            cardImg = res.data.cards[0].image;

            $table.append(`<img src=${cardImg}>`);
            if (res.data.remaining === 0) $button.remove();
        })

    } catch (e) {
        console.log("Rejected:", e)
    }
}

drawCards()
