let _lastSum;

/**
 * Returns the result of the last call to `sum`.
 *
 * @private
 *
 * @return {number} The result of the last call to sum.
 */
export function _getLastSum() {
	return _lastSum;
}

/**
 * A function that adds two parameters.
 *
 * @deprecated Use native addition instead.
 * @since v2
 *
 * @see addition
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
 *
 * @param {number} firstParam The first param to add.
 * @param {number} secondParam The second param to add.
 *
 *  @example
 *
 * ```js
 * const addResult = sum( 1, 3 );
 * console.log( addResult ); // will yield 4
 * ```
 *
 * @return {number} The result of adding the two params.
 */
export const sum = ( firstParam, secondParam ) => {
	return _lastSum = firstParam + secondParam;
};
