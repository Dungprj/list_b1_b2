Apidb = 'http://localhost:3000/student'

let getElement_search_btn = document.querySelector("#search_btn")

let getElement_input = document.querySelector("#input_main")


function start(){
    getstudent(Search_student)




}


function getstudent(callback){
    fetch(Apidb)
    .then(function(response){
        return response.json()
    })
    .then(callback);
}


function renderstudents(data1){
    var liststudents = document.querySelector("#student");
    var htmls = 
    data1.map(function(student){
        return `<li class="std">
        <h2>Số thứ tự :${student.id}</h2>
        <h3>Mã sinh viên  :${student.msv}</h3>
        <h3>Họ :${student.ho}</h3>
        <h3>Tên :${student.ten}</h3>
        <h3>Ngày sinh :${student.ngay_sinh}</h3>
        <h3>Lớp :${student.lop}</h3>
        </li>`
    })

    liststudents.innerHTML = htmls.join('');


}



getElement_search_btn.addEventListener("click",start)



function Search_student(data){
    


    data_inp = getElement_input.value

    

    let result_search = data.filter(obj=>{
        return obj.msv == data_inp
        
    
    })

    if (result_search){
        renderstudents(result_search)

    }else(
        alert('Số báo danh không tồn tại')
        
    )


    


    

}






// start()


