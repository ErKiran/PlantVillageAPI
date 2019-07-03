const assert = require('assert');
async function getFoo() {
    const va = setTimeout(() => { return 'foo' }, 1000);
    console.log(va)
    return va;
}

async function getBar() {
    return 'bar';
}

describe('Foos and Bars', () => {
    it('#returns foos and bars', async () => {
        var foo = await getFoo()
        assert.equal(foo, 'foo');

        var bar = await getBar()
        assert.equal(bar, 'bar');
    })
})