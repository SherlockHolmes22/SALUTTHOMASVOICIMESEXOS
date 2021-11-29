class Range {
    #from;
    #to;

    constructor(from, to) {
        this.#from = from;
        this.#to = to;
    }

    includes(x) { return this.#from <= x && x <= this.#to; }

    toString() { return "(" + this.#from + "..." + this.#to + ")"}

    static parse(s) { return new Range(s.slice(1, 5), s.slice(8, 10)); }

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern;
}

(new Span(2, 4)).toString(); // => "(2...6)"
(new Span(12, -8)).toString(); // => "(4...12)"