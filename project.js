let projects = [];

function addProject(){

    let projectName = document.getElementById("input-name").value;
    let startDate = document.getElementById("input-start-date").value;
    let endDate = document.getElementById("input-end-date").value;
    let projectDesc = document.getElementById("input-desc").value;
    let checkboxes = document.querySelectorAll('input[name="techno"]:checked');
    let image = document.getElementById("input-project-image").files[0];

    image = URL.createObjectURL(image);

    var techno = "";
    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            techno = techno + checkboxes[i].value +" ";
        }
    }


    let project = {
    projectName: projectName,
    startDate: startDate,
    endDate: endDate,
    image: image,
    description: projectDesc,
    tech: techno,
  };

  projects.push(project);

  renderProject();

}

function renderProject() {
  let projectList = document.getElementById("project-list");

  projectList.innerHTML = "";

  projects.forEach((data) => {
    projectList.innerHTML += `<div class="grid-item" id="grid-item">
    <div>
    <a href="detail-project.html" target="_blank" style="text-decoration: none; color: black"><img src="${data.image}" alt="">
    <div class="title">
        <h2>${data.projectName}</a></h2>
        <p>durasi : 3 bulan</p>
    </div>
    <p>${data.description}</p>
    <div class="tech-icon">
    ${data.tech}
    </div>
    <div class="button-group">
        <button type="button" onclick="">edit</button>
        <button type="button" onclick="">delete</button>
    </div>
  </div>`;
  });
}