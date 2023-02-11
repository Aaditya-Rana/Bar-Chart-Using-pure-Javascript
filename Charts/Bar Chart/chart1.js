class Chart {
    constructor(type, obj) {
        this.type = type;
        this.obj = obj;
    }
    plot() {
        let target=document.getElementsByClassName("bar-chart1")[0];
        let height=target.offsetHeight;
        let max=0;

        for(let ele=0; ele<this.obj['x'].length;ele++){
            let no=this.obj['y'][ele];
            if(max<no){
                max=no;
            }
        }
        let newHeight=0;
        if(height>max){
            newHeight=height-20;
            let height_increase= ((newHeight)/max);
            newHeight=height_increase;
        }else{

        }
        for(let ele=0; ele<this.obj['x'].length;ele++){
            let newele = document.createElement("div");
            newele.setAttribute("class", `bar`);
            newele.classList.add(`bar${ele+1}`);
            target.appendChild(newele);
            let tar=document.getElementsByClassName(`bar${ele+1}`)[0];
            tar.style.height=`${(newHeight)*this.obj['y'][ele]}px`;
        }
    }
}
let charts = new Chart('bar', {
    x: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    y: [3, 2, 1, 7, 8, 3, 6, 2.5, 3.10, 4, 1, 1.4, 5.5, 6.6, 2.5, 3.10, 4, 1, 1.4, 5.5, 6.6]
})
charts.plot();