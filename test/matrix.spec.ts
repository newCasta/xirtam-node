import { Matrix } from '../src/index.js'
import { describe, it, expect } from 'vitest'

describe('Matrix class', () => {
    const matrix1 = new Matrix([1], [2], [3])
    const arr1 = [1, 3]
    const arr2 = [1, 3]
    const arr3 = [1, 3]

    it('has item', () => {
        const result = matrix1.hasItem([1])

        expect(result).toBe(true)
    })

    it('compare two arrays', () => {
        const result = Matrix.compare(arr1, arr2)

        expect(result).toBe(true)
    })

    it('compare many arrays', () => {
        const result = Matrix.compareMany(arr1, arr2, arr3)

        expect(result).toBe(true)
    })

    it('matrix property returns an array', () => {
        const arr = [[1], [2], [3]]
        const result = JSON.stringify(matrix1.matrix) === JSON.stringify(arr)

        expect(result).toBe(true)
    })

    it('matrix property returns array with object Date', () => {
        const matrix = new Matrix([new Date()], [new Date()], [new Date()])
        const array = [[new Date()], [new Date()], [new Date()]]
        const result = JSON.stringify(matrix.matrix) === JSON.stringify(array)

        expect(result).toBe(true)
    })
})
