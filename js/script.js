const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const cardMaker = (member) => {
  let memberCard = `<div id="card-box" class="col-12 col-md-6 col-lg-4">
          <div class="box">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src="./${member.img}" class="img-fluid h-100" alt="...">
                </div>
                <div class="col-8">
                  <div class="card-body bg-black text-white h-100">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.role}</p>
                    <a href="mailto:">${member.email}/a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
    return memberCard
}
const cardList = document.getElementById(`card-list`)
for(let i = 0; i < teamMembers.length; i++){
  let card = cardMaker(teamMembers[i])
  cardList.innerHTML += card;
}