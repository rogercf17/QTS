let paulo = 'bonito'
let yuji = 'legal'

Deno.test("Teste do Paulo (NO API)", () => {
    if (paulo != "bonito") {
        throw new Error(`${paulo} não é bonito`);
    }
})

Deno.test("Não pode ser bonito (NO API)", () => {
    if (yuji == 'bonito') {
        throw new Error(`${paulo} é o paulo`);
    }
})