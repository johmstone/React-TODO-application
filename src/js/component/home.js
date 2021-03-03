import React, { useState } from "react";

const arraytodos = ["Make the deb", "Wash my hands"];

//create your first component
export function Home() {
	const [inputValue, SetInputValue] = useState("");
	const [list, setList] = useState(arraytodos);

	//const [arrayList, Add]
	const Addtodo = e => {
		//SetInputValue(src);
		if (e.key === "Enter") {
			const newList = list.concat(inputValue);
			setList(newList);
			SetInputValue("");
		}
	};

	function RemoveTodo(e) {
		const newList = list.filter(item => item !== e);
		setList(newList);
	}

	const List = () => {
		if (list.length > 0) {
			return (
				<div>
					<ul className="list-group">
						{list.map(item => (
							<li
								className="list-group-item d-flex justify-content-between align-items-center"
								key={item}>
								{item}
								<button
									onClick={() => RemoveTodo(item)}
									className="btn btn-link">
									<i className="fas fa-times"></i>
								</button>
							</li>
						))}
					</ul>
					<span className="float-left text-muted mt-2">
						{list.length} item left
					</span>
				</div>
			);
		} else {
			return (
				<div>
					<p>No tasks, add a task</p>
				</div>
			);
		}
	};

	return (
		<div className="text-center mt-5 justify-content-center">
			<h1>Todos!</h1>
			<div className="card cardtodos mx-auto">
				<div className="card-body">
					<div className="input-group mb-3 input-group-lg">
						<input
							type="text"
							className="form-control"
							placeholder="What needs to be done?"
							value={inputValue}
							onChange={e => SetInputValue(e.target.value)}
							onKeyUp={Addtodo}
						/>
					</div>
					<List />
				</div>
			</div>
		</div>
	);
}
