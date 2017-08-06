'use strict';

const palette = (colors, renderElement) => {
    let template = `
		<ul id="paletteUI">
			${colors.map(color =>
                `<li style="background: linear-gradient(${color}, ${color}) no-repeat 0 0"><input type="text" value="${color}" readonly></input></li>`).join("")}
    	</ul>
    `;
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
                copyElement.select();
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


const style = "#paletteUI{margin:0;padding:0;font-size:12px;width:100%;display:flex;flex-wrap:wrap;justify-content:center;list-style:none}#paletteUI li{font-family:'Arial', 'sans-serif';cursor:pointer;margin:10px;position:relative;background-size:100% 75% !important;width:140px;height:120px;padding:5px;box-sizing:border-box;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.1);transition:all .15s ease-in-out}#paletteUI li:hover{box-shadow:0 2px 20px rgba(0,0,0,0.15)}#paletteUI li input{position:absolute;bottom:5%;white-space:nowrap;overflow:hidden;display:block;width:90%;text-overflow:ellipsis;color:#666;border:none;pointer-events:none;background:transparent}#paletteUI li input::selection{background:transparent}#paletteUI li:after{display:flex;align-items:center;justify-content:center;height:80%;opacity:0;content:'Copied!';letter-spacing:1px;text-align:center;color:#fff;font-size:8px;text-transform:uppercase;text-shadow:0 1px rgba(0,0,0,0.2)}#paletteUI li.copy:after{animation:copy 1.6s ease-in-out both}@keyframes copy{0%{opacity:0;transform:translateY(10px)}15%,80%{transform:translateY(0);opacity:1}100%{opacity:0;transform:translateY(-10px)}}";

(function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
})(style);
