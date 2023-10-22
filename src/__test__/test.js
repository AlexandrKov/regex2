import phonTransformer from "../js/phonTransformer";

test("", () => {
    const tel = "+7 960 000 00 00";
    expect(phonTransformer(tel)).toBe(+79600000000)
})
test("", () => {
    const tel = "8 (927) 000-00-00";
    expect(phonTransformer(tel)).toBe(+79270000000)
})
test("", () => {
    const tel = "+86 000 000 0000";
    expect(phonTransformer(tel)).toBe(+860000000000)
})