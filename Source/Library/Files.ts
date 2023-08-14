import type { Pattern } from "fast-glob";
import type { Execution, Option, Path, Plan } from "../Option/Index.js";
import Default from "../Option/Index.js";
import By from "./Files/By.js";
import In from "./Files/In.js";
import Not from "./Files/Not.js";
import Pipe from "./Files/Pipe.js";

export default class Files {
	Pipe = async (Execution: Execution = Default.Pipe) =>
		await Pipe(this.Plan, Execution);

	Not = async (File: Option["Exclude"]) => {
		this.Plan.Results = await Not(File, this.Plan.Results);

		return this;
	};

	By = async (File: Pattern | Pattern[] = "**/*") => {
		this.Plan.Results = await By(File, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	In = async (Path: Path = "./") => {
		const Paths = await In(Path, this.Plan.Paths);

		if (Paths instanceof Map) {
			for (const [Input, Output] of Paths) {
				this.Plan.Paths.set(Input, Output);
			}
		}

		return this;
	};

	Plan: Plan = {
		Files: 0,
		Debug: 2,
		Info: {},
		Paths: new Map(),
		Results: new Map(),
		On: {
			Buffer: "",
			After: 0,
			Before: 0,
			Input: "",
			Output: "",
		},
	};

	constructor(Debug: Plan["Debug"] = 2) {
		this.Plan.Debug = Debug;
	}
}
