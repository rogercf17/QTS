import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let bonito = 'paulo'
let feios = ['Mario', 'Jenifer', 'Melissa', 'Angelo']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(bonito, "paulo"); 
    assertStringIncludes(bonito, "lo");    
})

Deno.test("Testando array  dos feios (API)", ()=> {
    assertArrayIncludes(feios, 
        ["Mario", "Melissa", "Jenifer"],
        "Tá errado");
})