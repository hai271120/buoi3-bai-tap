
class cardd extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.classroom = this.getAttribute("classroom")
        this.name = this.getAttribute("name");
        this.age = this.getAttribute("age");
        this.hometown = this.getAttribute("hometown");
        const {classroom,name,age,hometown}= this

        this.shadow.innerHTML = `
        ${stylee}
        <div class ="mina">
        <div class = "classroom">  Class:${this.classroom}</div>
        <div class = "name"> Name:${this.name}</div>
        <div class = "age">Age:${this.age}</div>
        <div class = "hometown">Hometown:${this.hometown}</div>
        </div>
        `
    }
}
window.customElements.define("card-container",cardd);
const stylee=`
    <style>
    .mina{
        padding:15px;
        border: 2px #rgb(100, 11, 11) solid;
        font-family:cursive, Helvetica, sans-serif;
    }
    .name{
        color:blue;
        font-size: 24px;
        font-weight: 30px;
    }
    .classroom{
        color:red;
        font-size: 24px;
        font-weight: 30px;
    }
    .hometown{
        color: rgb(69, 6, 94);
        font-size: 24px;
        font-weight: 30px;
    }
    .age{
        color:pink;
        font-size: 24px;
        font-weight:30px;
    }
    .img{
        width: 250px;
    }
    </style>
`
