export class Matrix<T> extends Array<MatrixItem<T>> {
    static compare<T>(value: MatrixItem<T>, item: MatrixItem<T>): boolean {
        return value.every(
            (v, i) => JSON.stringify(v) === JSON.stringify(item[i])
        )
    }

    static compareMany<T>(
        value: MatrixItem<T>,
        ...items: MatrixType<T>
    ): boolean {
        return items.every(e =>
            value.every((v, i) => JSON.stringify(v) === JSON.stringify(e[i]))
        )
    }

    constructor(...arr: MatrixType<T>) {
        for (const item of arr) {
            if (!Array.isArray(item)) {
                throw new Error('Each item needs to be an array')
            }
        }

        super(...arr)
    }

    get matrix(): Array<MatrixItem<T>> {
        return Array(...this)
    }

    hasItem(predicate: MatrixItem<T> | HasItemCallback<T>): boolean {
        if (typeof predicate === 'function') {
            let i = 0

            for (const item of this) {
                if (predicate(item, i, this)) return true

                i++
            }

            return false
        }

        for (const item of predicate) {
            if (typeof item !== 'object' || typeof item !== 'function') {
                return this.some(e => {
                    if (e.length === predicate.length) {
                        return predicate.every(
                            (v, i) => JSON.stringify(v) === JSON.stringify(e[i])
                        )
                    } else return false
                })
            }
        }

        return false
    }
}
