let a = [60, 40, 55, 75, 64, 100];
function alternatingSums(a) {
    let team1  = 0;
    let team2 = 0;
    let returnArray = [];
    for (let i in a) {
        if(i % 2 == 0) {
            team1 += a[i];
        } else {
            team2 += a[i];
        }
    }
    returnArray.push(team1, team2);
    return returnArray;
}
console.log(alternatingSums(a));