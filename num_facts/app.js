
// Objective 1

// Favorite number is 4:
let num = 4
let url = 'http://numbersapi.com'

async function favNum() {
    try {
    let res = await axios.get(`${url}/${num}/trivia?json`)
        // console.log("Objective 1:", res.data.text)
        let data = res.data.text
        $(".one").append(`<ul>${data}</ul>`)
    } catch (e) {
        console.log("Rejected:", e)
    }
}

favNum()

// Objective 2

let nums = [1, 2, 3, 4]
let promises = []

async function fourNums() {
    try {
        for (let i = 0; i < nums.length; i++) {
            promises.push(axios.get(`${url}/${nums[i]}/trivia?json`));
        }
        let res = await Promise.all(promises)
        // console.log("Objective 2:", res[0].data.text)
        for (let i = 0; i < res.length; i++){
            $(".two").append(`<ul>${res[i].data.text}</ul`)
        }
    } catch (e) {
        console.log("Rejected:", e)
    }

}

fourNums()

// Objective 3

let facts = []

async function fourFacts() {
    try {
        for (let i = 0; i < 4; i++){
            facts.push(axios.get(`${url}/${num}/trivia?json`)
            )
        }
        let res = await Promise.all(facts)
        // console.log("Objective 3:", res[0].data.text)
        for (let i = 0; i < res.length; i++){
            $(".three").append(`<ul>${res[i].data.text}</ul>`)
        }
    } catch (e) {
        console.log("Rejected:", e)
    }
}

fourFacts()
