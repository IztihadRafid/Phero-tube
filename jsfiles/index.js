const handleCategory = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    
    //console.log(category);

    const tabContainer = document.getElementById('tab-container')
    data.data.forEach((category,index)=>{
        //console.log(category);
         const div =  document.createElement('div')
         div.innerHTML = `
         <div grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 w-96">
            <button onclick="handleCategoryIDEmpty('${category.category_id }',${index})" class="btn btn-error text-white m-1">${category.category}</button>
            

         </div>`
         ;tabContainer.appendChild(div)
        
    })
    
}

    const handleCategoryIDEmpty =(category_id,index)=>{
        if(index ===3){
            const cardContainer = document.getElementById('card-Container')
            const div= document.createElement('div')
            cardContainer.innerHTML=`
            
            <div class="flex flex-col items-center ml-72">
            <img src="/image/icon.png" />
            <h1 class="text-3xl text-center font-extrabold">Oops Sorry!<br>There no Content!!</h1>
            </div>
           
           
            
           
            `;
           
            cardContainer.appendChild(div)
            
        }

        else {
            const cardContainer = document.getElementById('card-Container')

            cardContainer.innerHTML=''
            handleCategoryID(category_id);
          }
    }


const handleCategoryID= async(category_id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
    const data =  await response.json()
    console.log(data.data);
    const cardContainer = document.getElementById('card-Container')
    data.data.forEach((category_info)=>{
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="card w-96 h-96 bg-gray-100 shadow-xl">
        <figure>
            <img src="${category_info?.thumbnail}" alt="cards" />
        </figure>
        <div class="card-body">
           <div class="flex justify-between">
                <img class="w-16 rounded-full" src="${category_info.authors[0]?.profile_picture}" alt="">
                <h2 class="card-title">${category_info?.title}</h2>
           </div>
         <div class="flex justify-between">
            <p>${category_info.authors[0]?.profile_name}</p>
            <img class="w-5" src="${category_info.authors[0].verified?'https://icons8.com/icon/98A4yZTt9abw/verified-badge' : ""}" alt="">
         </div>
          <div class="">
            <p><span>${category_info.others?.views ?category_info.others?.views: "no views"}</span> views</p>
          </div>
        </div>
      </div>
        `;
        
        cardContainer.appendChild(div)
        
        
    })
}
handleCategoryID(1000)
handleCategory();