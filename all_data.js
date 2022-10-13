    

    
    //method to get all data
    function allData(){
    
        table.innerHTML = ``
        //get data from localstorage and store to contaclist array
        //we must to use JSON.parse, because data as string, we need convert to array
        contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    
        //looping data and show data in table
        contactList.forEach(function (value, i){
           
            var table = document.getElementById('table')
    
            table.innerHTML += `
                <tr>
                    <td>${value.id}</td>
                    <td>${value.judul}</td>
                    <td>${value.author}</td>
                    <td>${value.year}</td>
                    <td>${value.isComplited}</td>
                    <td>
                        <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                            sudah di baca
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                            Hapus
                        </button>
                    </td>
                </tr>`
        })
    }