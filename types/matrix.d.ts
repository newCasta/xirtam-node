export type NormalizeMatrixItem<T> = [T] extends [unknown[]] ? T : T[]
export type MatrixItem<T> = NormalizeMatrixItem<T>
export type MatrixType<T> = Array<MatrixItem<T>>

export type MatrixCallback<T, R> = (
    value: NormalizeMatrixItem<T>,
    index: number,
    obj: MatrixType<T>
) => R

export type HasItemCallback<T> = MatrixCallback<T, boolean>
