let friends = [
    " reid ", " caleb ", " chase ", " lee ", " Sergio "
];

function SING() {
    for (let i = 0; i < friends.length; i++) {
        let friend = document.createElement("div");
        friend.classList.add("friend");
        let H3 = document.createElement("h3");
        H3.textContent = friends[i];
        friend.appendChild(H3);
        document.body.appendChild(friend);

        for (let p = 99; p > 0; p--) {
            let singing = document.createElement("p");
            friend.appendChild(singing);

            if (p === 2) {
                singing.textContent = p + " lines of code in the file," + p + " lines of code;" + friends[i] + "strikes  clears it all out," + (p - 1) + " lines of code in the file"
            } else if (p === 1) {
                singing.textContent = p + " line of code in the file," + p + "line of code;" + friends[i] + "strikes it out, clears it all out," + (p - 1) + " no more lines!"
            } else {
                singing.textContent = p + " lines of code in the file," + p + "lines of code;" + friends[i] + "strikes one out clears it all out," + (p - 1) + "lines of code in the file!"


            }
        }
    }
}