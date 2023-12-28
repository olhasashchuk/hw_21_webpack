export function getRandomImage(){
    const image = document.querySelector("img");
    for (let i = 1; i <= 9; i++) {
        let randomNum = Math.floor((Math.random() * `${i}`)+1);
        image.setAttribute("src", `images/${randomNum}.jpg`)
    }
}

