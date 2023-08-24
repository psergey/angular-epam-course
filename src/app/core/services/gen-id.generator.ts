function* generator() {
    let num: number = 0;
    while(true) {
        yield num++;
    }
}

export const genId = generator();