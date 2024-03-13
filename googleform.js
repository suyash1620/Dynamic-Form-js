var selectValue;
let count = 0;
function addToForm() {
    selectValue = document.querySelector("#select-menu").value;
    selectValue = selectValue[0].toUpperCase() + selectValue.substring(1, selectValue.length);
    let dForm = document.querySelector("#dynamic-form");
    count += 1;
    console.log(selectValue);
    if (document.getElementById("addValue")) {
        document.getElementById("addValue").parentNode.parentNode.parentNode.remove();
        if (selectValue == "-- Select --") {
            alert("Please Select a Option FIrst");
        }
        else {
            let div = document.createElement("div");
            div.setAttribute("class", "row d-flex");
            div.setAttribute("id", "inp" + count);
            div.setAttribute("style", "padding:20px 40px");
            dForm.appendChild(div);
            if (selectValue == "Text" || selectValue == "Email" || selectValue == "Number") {
                let div1 = document.createElement("div");
                div1.setAttribute("class", "col-5");
                div.appendChild(div1);
                let label = document.createElement("input");
                label.setAttribute("type", "text");
                label.setAttribute("class", "form-control d-inline-block");
                label.setAttribute("onmouseout", "setLabelName(this)");
                label.setAttribute("placeholder", "Enter a Label Name");
                div1.appendChild(label);
                let div2 = document.createElement("div");
                div2.setAttribute("class", "col-7 d-flex align-items-center");
                div.appendChild(div2);
                let input = document.createElement("input");
                input.setAttribute("type", selectValue.toLowerCase());
                input.setAttribute("class", "form-control d-inline-block");
                label.setAttribute("for", selectValue);
                input.setAttribute("disabled", "true");
                div2.appendChild(input);
                let i = document.createElement("i");
                i.setAttribute("class", "fa fa-times-circle");
                i.setAttribute("title", "Cancel");
                i.setAttribute("onclick", "return this.parentNode.parentNode.remove()");
                div2.appendChild(i);

            } else if (selectValue == "Select" || selectValue == "Checkbox" || selectValue == "Radio") {
                let div1 = document.createElement("div");
                div1.setAttribute("class", "col-5");
                div.appendChild(div1);
                let label = document.createElement("input");
                label.setAttribute("type", "text");
                label.setAttribute("class", "form-control d-inline-block");
                label.setAttribute("onmouseout", "setLabelName(this)");
                label.setAttribute("placeholder", "Enter a Label Name");
                div1.appendChild(label);
                let div2 = document.createElement("div");
                div2.setAttribute("class", "col-6");
                div.appendChild(div2);
                let mainDiv = document.createElement("div");
                mainDiv.setAttribute("class", "col-1");
                div.appendChild(mainDiv);
                let i = document.createElement("i");
                i.setAttribute("class", "fa fa-times-circle");
                i.setAttribute("title", "Cancel");
                i.setAttribute("onclick", "return this.parentNode.parentNode.remove()");
                mainDiv.appendChild(i);
                let row = document.createElement("div");
                row.setAttribute("class", "row d-flex flex-column");
                row.setAttribute("id", "parent-row" + count);
                div2.appendChild(row);
                let col = document.createElement("div");
                col.setAttribute("class", "col-12");
                row.appendChild(col);
                let row1 = document.createElement("div");
                row1.setAttribute("class", "row");
                col.appendChild(row1);
                let div3 = document.createElement("div");
                div3.setAttribute("class", "col-8");
                row1.appendChild(div3);
                let div4 = document.createElement("div");
                div4.setAttribute("class", "col-4 d-flex align-items-center");
                row1.appendChild(div4);
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("id", "option");
                input.setAttribute("placeholder", "Enter Value");
                input.setAttribute("class", "form-control d-inline-block");
                div3.appendChild(input);
                let button = document.createElement("input");
                button.setAttribute("type", "button");
                button.setAttribute("class", "add");
                button.setAttribute("id", "addValue");
                button.setAttribute("onclick", "setOptionValue()");
                button.value = "ADD " + " +";
                div4.appendChild(button);

            }
            else {
                let button = document.createElement("div");
                button.className = "btn-cancel";
                dForm.appendChild(button);
                let input = document.createElement("input");
                input.setAttribute("type", "button");
                input.setAttribute("id", "submitted");
                input.setAttribute("value", "Submit");
                input.setAttribute("onclick", "formCreate()");
                button.appendChild(input);
                let icon = document.createElement("i");
                icon.setAttribute("class", "fa fa-times-circle");
                icon.setAttribute("title", "Cancel");
                icon.setAttribute("onclick", "return this.parentNode.remove()");
                button.appendChild(icon);
            }
            document.querySelector("#select-menu").selectedIndex = 0;
        }
    }
    else {
        if (selectValue == "-- Select --") {
            alert("Please Select a Option FIrst");
        }
        else {
            let div = document.createElement("div");
            div.setAttribute("class", "row d-flex");
            div.setAttribute("id", "inp" + count);
            div.setAttribute("style", "padding:20px 40px");
            dForm.appendChild(div);
            if (selectValue == "Text" || selectValue == "Email" || selectValue == "Number") {
                let div1 = document.createElement("div");
                div1.setAttribute("class", "col-5");
                div.appendChild(div1);
                let label = document.createElement("input");
                label.setAttribute("type", "text");
                label.setAttribute("class", "form-control d-inline-block");
                label.setAttribute("onmouseout", "setLabelName(this)");
                label.setAttribute("placeholder", "Enter a Label Name");
                div1.appendChild(label);
                let div2 = document.createElement("div");
                div2.setAttribute("class", "col-7 d-flex align-items-center");
                div.appendChild(div2);
                let input = document.createElement("input");
                input.setAttribute("type", selectValue.toLowerCase());
                input.setAttribute("class", "form-control d-inline-block");
                label.setAttribute("for", selectValue);
                input.setAttribute("disabled", "true");
                div2.appendChild(input);
                let i = document.createElement("i");
                i.setAttribute("class", "fa fa-times-circle");
                i.setAttribute("title", "Cancel");
                i.setAttribute("onclick", "return this.parentNode.parentNode.remove()");
                div2.appendChild(i);

            } else if (selectValue == "Select" || selectValue == "Checkbox" || selectValue == "Radio") {
                let div1 = document.createElement("div");
                div1.setAttribute("class", "col-5");
                div.appendChild(div1);
                let label = document.createElement("input");
                label.setAttribute("type", "text");
                label.setAttribute("class", "form-control d-inline-block");
                label.setAttribute("onmouseout", "setLabelName(this)");
                label.setAttribute("placeholder", "Enter a Label Name");
                div1.appendChild(label);
                let div2 = document.createElement("div");
                div2.setAttribute("class", "col-6");
                div.appendChild(div2);
                let mainDiv = document.createElement("div");
                mainDiv.setAttribute("class", "col-1");
                div.appendChild(mainDiv);
                let icon = document.createElement("i");
                icon.setAttribute("class", "fa fa-times-circle");
                icon.setAttribute("title", "Cancel");
                icon.setAttribute("onclick", "return this.parentNode.parentNode.remove()");
                mainDiv.appendChild(icon);
                let row = document.createElement("div");
                row.setAttribute("class", "row d-flex flex-column");
                row.setAttribute("id", "parent-row" + count);
                div2.appendChild(row);
                let col = document.createElement("div");
                col.setAttribute("class", "col-12");
                row.appendChild(col);
                let row1 = document.createElement("div");
                row1.setAttribute("class", "row");
                col.appendChild(row1);
                let div3 = document.createElement("div");
                div3.setAttribute("class", "col-8");
                row1.appendChild(div3);
                let div4 = document.createElement("div");
                div4.setAttribute("class", "col-4 d-flex align-items-center");
                row1.appendChild(div4);
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("id", "option");
                input.setAttribute("placeholder", "Enter Value");
                input.setAttribute("class", "form-control d-inline-block");
                div3.appendChild(input);
                let button = document.createElement("input");
                button.setAttribute("type", "button");
                button.setAttribute("class", "add");
                button.setAttribute("id", "addValue");
                button.setAttribute("onclick", "setOptionValue()");
                button.value = "ADD " + " +";
                div4.appendChild(button);
            }
            else {
                let button = document.createElement("div");
                button.className = "btn-cancel";
                dForm.appendChild(button);
                let input = document.createElement("input");
                input.setAttribute("type", "button");
                input.setAttribute("id", "submitted");
                input.setAttribute("value", "Submit");
                input.setAttribute("onclick", "formCreate()");
                button.appendChild(input);
                let icon = document.createElement("i");
                icon.setAttribute("class", "fa fa-times-circle");
                icon.setAttribute("title", "Cancel");
                icon.setAttribute("onclick", "return this.parentNode.remove()");
                button.appendChild(icon);
            }
            document.querySelector("#select-menu").selectedIndex = 0;
        }
    }
}

function setLabelName(e) {
    var lvalue = e.value;
    var label = e.value.toLowerCase();
    let labelParent = e.parentNode;


    if (lvalue != "" && (selectValue == "Text" || selectValue == "Number" || selectValue == "Email")) {
        let newNode = document.createElement("label");
        lvalue = lvalue[0].toUpperCase() + lvalue.substring(1, lvalue.length).toLowerCase();
        newNode.innerHTML = lvalue + " " + ": " + "-";
        newNode.setAttribute("for", e.getAttribute("for"));
        newNode.setAttribute("id", selectValue + count);
        labelParent.removeChild(labelParent.children[0]);
        labelParent.appendChild(newNode);
        labelParent.children[0].setAttribute("for", label);
        labelParent.nextSibling.children[0].setAttribute("placeholder", "Enter Your" + " " + lvalue);
        labelParent.nextSibling.children[0].setAttribute("id", label);
    }
    else if (lvalue != "" && (selectValue == "Select" || selectValue == "Checkbox" || selectValue == "Radio")) {
        let newNode = document.createElement("label");
        lvalue = lvalue[0].toUpperCase() + lvalue.substring(1, lvalue.length).toLowerCase();
        newNode.innerHTML = lvalue + " " + ": " + "-";
        newNode.setAttribute("for", e.getAttribute("for"));
        newNode.setAttribute("id", selectValue + count);
        labelParent.removeChild(labelParent.children[0]);
        labelParent.appendChild(newNode);
        labelParent.children[0].setAttribute("for", label);
        labelParent.nextSibling.children[0].setAttribute("placeholder", "Enter Your" + " " + lvalue);
    }
    else {
        alert("Enter Label Name");
    }

}

function setOptionValue() {
    let btnId = document.querySelector("#addValue");
    let parentRow = document.getElementById("parent-row" + count);
    let optionValue = document.querySelector("#option").value.toLowerCase();
    console.log(optionValue);
    if (parentRow.parentNode.previousSibling.children[0].innerHTML != "") {
        if (selectValue == "Select") {
            let selectId = document.getElementById("select" + count);
            if (optionValue != "") {
                btnId.parentNode.parentNode.parentNode.remove();
                if (!parentRow.hasChildNodes()) {
                    let select = document.createElement("select");
                    select.setAttribute("class", "form-select d-inline-block");
                    select.setAttribute("style", "width:100%");
                    select.setAttribute("id", "select" + count);
                    parentRow.appendChild(select);
                    let option = document.createElement("option");
                    option.text = optionValue[0].toUpperCase() + optionValue.substring(1, optionValue.length).toLowerCase();
                    option.setAttribute("value", optionValue);
                    select.add(option);
                    let col = document.createElement("div");
                    col.setAttribute("class", "col-12 mt-3");
                    parentRow.parentNode.appendChild(col);
                    let row1 = document.createElement("div");
                    row1.setAttribute("class", "row");
                    col.appendChild(row1);
                    let div3 = document.createElement("div");
                    div3.setAttribute("class", "col-8");
                    row1.appendChild(div3);
                    let div4 = document.createElement("div");
                    div4.setAttribute("class", "col-4");
                    row1.appendChild(div4);
                    let input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("id", "option");
                    input.setAttribute("placeholder", "Enter Value");
                    input.setAttribute("class", "form-control d-inline-block");
                    div3.appendChild(input);
                    let button = document.createElement("input");
                    button.setAttribute("type", "button");
                    button.setAttribute("class", "add");
                    button.setAttribute("id", "addValue");
                    button.setAttribute("onclick", "setOptionValue()");
                    button.value = "ADD " + " +";
                    div4.appendChild(button);
                }
                else {
                    let opt = document.createElement("option");
                    opt.innerHTML = optionValue[0].toUpperCase() + optionValue.substring(1, optionValue.length).toLowerCase();
                    opt.setAttribute("value", optionValue);
                    selectId.appendChild(opt);
                    let col = document.createElement("div");
                    col.setAttribute("class", "col-12 mt-3");
                    parentRow.parentNode.appendChild(col);
                    let row1 = document.createElement("div");
                    row1.setAttribute("class", "row");
                    col.appendChild(row1);
                    let div3 = document.createElement("div");
                    div3.setAttribute("class", "col-8");
                    row1.appendChild(div3);
                    let div4 = document.createElement("div");
                    div4.setAttribute("class", "col-4");
                    row1.appendChild(div4);
                    let input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("id", "option");
                    input.setAttribute("placeholder", "Enter Value");
                    input.setAttribute("class", "form-control d-inline-block");
                    div3.appendChild(input);
                    let button = document.createElement("input");
                    button.setAttribute("type", "button");
                    button.setAttribute("class", "add");
                    button.setAttribute("id", "addValue");
                    button.setAttribute("onclick", "setOptionValue()");
                    button.value = "ADD " + " +";
                    div4.appendChild(button);
                }
            }
            else {
                alert("Enter Option Value First");
            }
        }
        else if (selectValue == "Radio") {
            if (optionValue != "") {
                let labelId = document.getElementById("" + selectValue + count).getAttribute("for");
                btnId.parentElement.parentElement.parentElement.remove();
                let div = document.createElement('div');
                div.setAttribute("class", "radio-btn d-inline-block");
                parentRow.appendChild(div);
                let radio = document.createElement("input");
                radio.setAttribute("type", "radio");
                radio.setAttribute("name", labelId);
                radio.setAttribute("id", labelId);
                radio.setAttribute("value", optionValue);
                div.appendChild(radio);
                let textNode = document.createTextNode(optionValue);
                div.appendChild(textNode);
                let col = document.createElement("div");
                col.setAttribute("class", "col-12 mt-3");
                parentRow.parentNode.appendChild(col);
                let row1 = document.createElement("div");
                row1.setAttribute("class", "row");
                col.appendChild(row1);
                let div3 = document.createElement("div");
                div3.setAttribute("class", "col-8");
                row1.appendChild(div3);
                let div4 = document.createElement("div");
                div4.setAttribute("class", "col-4");
                row1.appendChild(div4);
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("id", "option");
                input.setAttribute("placeholder", "Enter Value");
                input.setAttribute("class", "form-control d-inline-block");
                div3.appendChild(input);
                let button = document.createElement("input");
                button.setAttribute("type", "button");
                button.setAttribute("class", "add");
                button.setAttribute("id", "addValue");
                button.setAttribute("onclick", "setOptionValue()");
                button.value = "ADD " + " +";
                div4.appendChild(button);
            }
            else {
                alert("Enter Option Value First");
            }
        }
        else {
            if (optionValue != "") {
                let labelId = document.getElementById(selectValue + count).getAttribute("for");
                btnId.parentElement.parentElement.parentElement.remove();
                let div = document.createElement('div');
                div.setAttribute("class", "checkbox-btn");
                parentRow.appendChild(div);
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("name", optionValue + count);
                checkbox.setAttribute("id", labelId);
                checkbox.setAttribute("value", optionValue);
                div.appendChild(checkbox);
                let textNode = document.createTextNode(optionValue);
                div.appendChild(textNode);
                let col = document.createElement("div");
                col.setAttribute("class", "col-12 mt-3");
                parentRow.parentNode.appendChild(col);
                let row1 = document.createElement("div");
                row1.setAttribute("class", "row");
                col.appendChild(row1);
                let div3 = document.createElement("div");
                div3.setAttribute("class", "col-8");
                row1.appendChild(div3);
                let div4 = document.createElement("div");
                div4.setAttribute("class", "col-4");
                row1.appendChild(div4);
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("id", "option");
                input.setAttribute("placeholder", "Enter Value");
                input.setAttribute("class", "form-control d-inline-block");
                div3.appendChild(input);
                let button = document.createElement("input");
                button.setAttribute("type", "button");
                button.setAttribute("class", "add");
                button.setAttribute("id", "addValue");
                button.setAttribute("onclick", "setOptionValue()");
                button.value = "ADD " + " +";
                div4.appendChild(button);
            }
            else {
                alert("Enter Option Value First");
            }
        }
    }
    else {
        alert("First fill the Label");
    }
}

function formCreate() {
    if (confirm("Is Your Form Completed?")) {
        sessionStorage.setItem("formData", document.getElementById("dynamic-form").innerHTML);
        document.getElementById("submitted").setAttribute("disabled", true);
        window.location = 'googleForms.html';
    }
}

