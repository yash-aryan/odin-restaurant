"use strict";
import { createHomepage } from "./createHome";
import "./style.css";

createHomepage();
let currentPage = "home";
const rootNode = document.querySelector("#content");
rootNode.addEventListener("click", changePage);

function changePage(e) {
	const node = e.target;
	if (!node.hasAttribute("data-page")) return;
	else if (isAlreadyOnSamePage()) return;

	switch (node.dataset.page) {
		case "home":
			createHomepage();
			currentPage = node.dataset.page;
		case "menu":
		case "contact":
	}

	function isAlreadyOnSamePage() {
		if (node.dataset.page === currentPage) return true;
		else return false;
	}
}
