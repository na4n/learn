// Arrays!
// contiguous (non-breaking) space of memory containing certain amount of bytes

const a = new ArrayBuffer(6)
const a8 = new Uint8Array(a)
a8[0] = 45
a8[2] = 42
const a16 = new Uint16Array(a)
a16[2] = 0x4545
// a8 and a16 are views, sets 8 * index and 16 * index of OG a array

console.log(a)

// inesertion is just overwriting, must be in bound of memory except C :)
// deletion is just inserting null

// access, insert, delete do not change w.r.t input so O(1)

/* -----------QA-------------- */

