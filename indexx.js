const cookPancakes = (n, m = 2) => {
    if(n === 1) {
        return n + n
    }
    return (n + n) / m
}

cookPancakes(1)