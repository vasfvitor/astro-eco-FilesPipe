/**
 * @module By
 *
 */
export default ((async (...[Files, Paths, Results]: Parameters<Type>) => {
	for (const [Input, Output] of Paths) {
		for (const Result of await (await import("fast-glob")).default(Files, {
			cwd: Input ?? (await import("process")).cwd(),
			onlyFiles: true,
		})) {
			Results.set(`${Output}${Result}`, `${Input}${Result}`);
		}
	}

	return Results;
}) satisfies Type as Type);

import type Type from "../Interface/By.js";
