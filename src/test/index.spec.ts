import { Matrix } from '../index.js'
import { describe, expect, it } from 'vitest'

describe('Matrix class', () => {
    it('Matrix has item', () => {
        const matrix = new Matrix([1], [2], [3])
        const bool = matrix.hasItem([1])

        expect(bool).toBe(true)
    })
})
