console.log("Cricket Task Done")

// ==============================================================================
// ==============================================================================
// ==============================================================================
// team_count = document.getElementById("tem_count").value;

function renderTeam() {
    let team_count = document.getElementById("tem_count").value;
    let add_tag = document.getElementById("main_div");
    if (team_count == 1 || team_count == 0) {
        alert("Please Enter Value 2 Or More Then 1");
    }
    else {
        for (let i = 0; i <= team_count * 3; i++) {
            if (i === 0) {
                let div = document.createElement("div");
                let h2 = document.createElement("h2");
                add_tag.appendChild(div);
                let div_main = add_tag.appendChild(div);
                div_main.appendChild(h2).innerText = "Player Name";
                div_main.setAttribute("id", "player");
            }
            else {
                players = document.getElementById("player")
                let para = document.createElement("p");
                para = players.appendChild(para);
                para.setAttribute("draggable", true);
                para.innerText = "Player " + i;
                para.setAttribute("class", "ply_name");
            }
        }

        for (let i = 1; i <= team_count; i++) {
            let h2 = document.createElement("h2");
            let div = document.createElement("div");
            add_tag.appendChild(div);
            let div_main = add_tag.appendChild(div);
            div_main.appendChild(h2).innerText = "Team " + i;
            div_main.setAttribute("class", "team_box");
        }


        // ******************** Drag And Drop ********************

        let play = document.querySelectorAll(".ply_name");
        let m_box = document.querySelectorAll(".team_box");
        let drag_ply = null

        play.forEach((play) => {
            play.addEventListener("dragstart", dragStart);
            play.addEventListener("dragend", dragEnd);
        });
        function dragStart() {
            drag_ply = this
            // console.log("dragStart")
        }
        function dragEnd() {
            drag_ply = null
            // console.log("dragEnd")
        }

        m_box.forEach((play_main) => {
            play_main.addEventListener("dragover", dragOver);
            play_main.addEventListener("dragenter", dragEnter);
            play_main.addEventListener("dragleave", dragLeave);
            play_main.addEventListener("drop", dragDrop);
        });

        function dragOver(e) {
            e.preventDefault()
            // console.log("dragOver")
        }

        function dragEnter(e) {
            this.style.backgroundColor = "rgb(26 62 49)";
            e.preventDefault()
            // console.log("dragEnter")
        }

        function dragLeave(e) {
            this.style.border = "none"
            // console.log("dragLeave")
            e.preventDefault()
        }

        function dragDrop(e) {
            this.style.border = "none"
            this.appendChild(drag_ply)
            // console.log("dragDrop")
        }
    }
}

// ==============================================================
// ==============================================================
// ==============================================================

function playerValidation() {
    var teamTags = document.querySelectorAll('#main_div div');
    var taglen = teamTags.length;
    var sub_array = [];
    for (v = 1; v <= taglen; v++) {
        var teamvald2 = document.body.getElementsByTagName('div')[v];
        var teamvald = teamvald2.getElementsByTagName("p");
        sub_array.push(teamvald.length)
    }
    var sub_array2 = sub_array.slice(1);
    function AllTheSame(sub_array2) {
        var first = sub_array2[0];
        return sub_array2.every(function (element) {
            return element === first;
        });
    }

    var kkk = AllTheSame(sub_array2);
    var pTags = document.querySelectorAll('#player p');
    if (pTags.length > 0) {
        alert("Please Divide All Player")
    }
    else {
        if (kkk === true) {
            var ran = document.getElementById("rendered_team");
            var ran_main_div = document.getElementById("main_div");
            ran.innerHTML = ran_main_div.innerHTML
            ran.removeChild(ran.children[0]);
            // ran_main_div.innerHTML = ""
        }
        else {
            alert("Please Eqaul divide")
        }
    }
}

function clearAll() {
    var add_tag = document.getElementById("rendered_team"); // main_div
    add_tag.innerHTML = ""
}
