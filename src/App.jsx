import { createSignal, onMount } from "solid-js";

import Button from "@suid/material/Button";
import Select from "@suid/material/Select";
import MenuItem from "@suid/material/MenuItem";
import FormControl from "@suid/material/FormControl";
import InputLabel from "@suid/material/InputLabel";

export default function App() {
	let [value, setValue] = createSignal(10);
	let [options, setOptions] = createSignal([99, 10, 44]);

	onMount(() => {
		setTimeout(() => {
			setOptions([10, 20, 30]);
		}, 3000);
	});

	return (
		<FormControl fullWidth>
			<InputLabel>Age</InputLabel>
			<Select
				id="demo-simple-select"
				value={value()}
				label="Age"
				onChange={(e) => setValue(e.target.value)}
			>
				<For each={options()}>{(option) =>
					<MenuItem value={option}>{option}</MenuItem>
				}</For>
			</Select>
		</FormControl>
	);
}
