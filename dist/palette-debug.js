'use strict';

const palette = (colors, renderElement) => {
    let template = `
			<ul id="paletteUI">
				${colors
        .map(
            color =>
    `<li style="background: linear-gradient(${color}, ${color}) no-repeat 0 0"><input type="text" value="${color}" readonly></input></li>`
        )
        .join("")}
			</ul>`;

    renderElement.innerHTML = template;
    function removeCopyClass() {
        Array.from(document.querySelectorAll("#paletteUI li")).forEach(item => {
            item.classList.remove("copy");
    });
    }
    if (template) {
        Array.from(document.querySelectorAll("#paletteUI li")).forEach(item => {
            item.addEventListener("click", event => {
            let $item = event.target;
        let copyElement = $item.querySelector("input");
        //copyElement.select();
        removeCopyClass();
        try {
            document.execCommand("copy");
            $item.classList.add("copy");
        } catch (err) {
            console.log("Unable to copy", err);
        }
    });
    });
    }
};