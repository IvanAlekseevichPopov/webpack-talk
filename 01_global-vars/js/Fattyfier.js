/**
 * Fattyfier.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Apr 2015
 */

function Fattyfier(id) {
    this.element = document.getElementById(id);
}

Fattyfier.prototype.fat = function () {
    this.element.style.fontWeight = "bold";
}
