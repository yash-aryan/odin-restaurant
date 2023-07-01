"use strict";
import { createHomepage } from "./createHome";
import { createMenupage } from "./createMenu";
import { createContactpage } from "./createContact";
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
			break;
		case "menu":
			createMenupage();
			break;
		case "contact":
			createContactpage();
			break;
	}
	currentPage = node.dataset.page;

	function isAlreadyOnSamePage() {
		if (node.dataset.page === currentPage) return true;
		else return false;
	}
}
