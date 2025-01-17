declare module 'my-lib' {
	/** A vector with two components */
	export interface Vector2 {
		/** The x component */
		x: number;
		/** The y component */
		y: number;
	}
	/**
	 * Add two vectors
	 * */
	export function add(a: Vector2, b: Vector2): Vector2;
}

declare module 'my-lib/subpackage' {
	/**
	 * Multiply two vectors
	 * */
	export function multiply(a: import('my-lib').Vector2, b: import('my-lib').Vector2): import('my-lib').Vector2;
}

//# sourceMappingURL=index.d.ts.map