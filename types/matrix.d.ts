type NormalizeMatrixItem<T> = [T] extends [unknown[]] ? T : T[]
type MatrixItem<T> = NormalizeMatrixItem<T>
type MatrixType<T> = Array<MatrixItem<T>>

type MatrixCallback<T, R> = (
    value: NormalizeMatrixItem<T>,
    index: number,
    obj: MatrixType<T>
) => R

type HasItemCallback<T> = MatrixCallback<T, boolean>
