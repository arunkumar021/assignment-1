async function loadInToTable(url , table) {
    //let data;
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");

  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
//    data.forEach((e)=> {
//       console.log("array elements",e);
//    })

//   const res = Object.keys(data[0]); // Tight-coupled
//   console.log(res);

  
  //clear table
   tableHead.innerHTML = "<tr></tr>";
   tableBody.innerHTML = "";

   //populate
    var tArr = [];
    var res = [];
    data.forEach((e)=> {
      tArr = Object.keys(e);
      tArr.forEach((ele)=>{
          if(res.includes(ele) != true) {
               res.push(ele);
          };
      });
    });
    console.log(res);
    

   for(const headerText of res) {
       const headerElement = document.createElement("th");
       
       headerElement.textContent = headerText;
       tableHead.querySelector("tr").appendChild(headerElement);
   };

    //populating the rows

    for(let i = 0 ; i<data.length ; i++) {
        //console.log(data[i]);
        const rowElement = document.createElement("tr");
        let eleValues = Object.values(data[i]);
        //console.log(eleValues);
        for(ele of eleValues) {
            const cellElement = document.createElement("td");
            cellElement.textContent = ele;
            rowElement.appendChild(cellElement);
        };
        tableBody.appendChild(rowElement);
    };
};

loadInToTable("./data.json" , document.querySelector("table")); 