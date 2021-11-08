import { testProp, fc } from 'ava-fast-check'

import { vuerouterMiddleware } from '../../src/index'

testProp.skip(
    'TODO: property-test vuerouter-middleware',
    [
        // arbitraries
        fc.nat(),
    ],
    (
        t,
        // test arguments
        natural,
    ) => {
        // ava test here
    },
    {
        verbose: true,
    },
)
