let SHEET_ID = '1Xl7ZLHSuT2TCzEmQ1kKcOL2AhZ9nPI5xtvJu7-jxBPk'
let SHEET_TITLE = 'Projects';
let SHEET_RANGE ='A2:C100';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    
    let length = data.table.rows.length;
    let listing = document.getElementById('listing');
    let publication = document.getElementById('publication');
    console.log(data.table.rows.length)

    // let dt_title = document.getElementById('dt_title');
    // let dt_description = document.getElementById('dt_description');
    // let dt_image = document.getElementById('dt_image');
    let elem2 = document.getElementById('list_publi');
    elem2.innerHTML = data.table.rows[0].c[0].v;


    // dt_title.innerHTML = data.table.rows[0].c[0].v
    // dt_description.innerHTML = data.table.rows[0].c[1].v
    // dt_image.src = data.table.rows[0].c[2].v

    for(let i = 1; i<length; i++){
                // Assuming you have a reference to your NewBox div
        var NewBox = document.createElement('li');
        NewBox.id = "elem" + i;
        NewBox.className = "list_publi";
        elem2.append(NewBox);

        // // Create an h6 element
        // var li = document.createElement('li');
        // li.className ="list_publi"

        // Set the content for the h2 element (you can replace "Your Heading" with the actual heading text)
        NewBox.innerHTML = data.table.rows[i].c[0].v;

        // Append the h2 element to the NewBox div
        // NewBox.appendChild(publication);
    }
});