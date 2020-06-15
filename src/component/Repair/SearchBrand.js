import React from 'react';

function SearchBrand() {
	return (
		<div
            className="row no-gutters justify-content-start align-items-center selectOption mobileSelect"
          >
			<div className="col-12 col-md-6">
				<h2>Select Your Mobile Brand</h2>
			</div>
			<div className="col-12 col-md-6 text-right mobileLeft">
				<form action="#" className="searchBar">
					<input
						type="search"
						placeholder="Search Your Mobile Here"
						className="mt-0"
					/>
					<button type="submit">
						<img
							src="assets/images/icons/search.png"
							width="20"
							alt=""
						/>
					</button>
				</form>
			</div>
		</div>
	);
}

export default SearchBrand;
