
document.addEventListener("DOMContentLoaded", function(){

    var sectionDiv = document.querySelector(".section");

    sectionDiv.innerHTML = blogs.map(function (blog) {
        return `
        <div class="container">
            <img class="img" src="${blog.imgSrc}" alt="">
            <div class="text-1">
                <div class="name-1">
                    <span>${blog.author}</span>
                    <span>${blog.date}</span>
                </div>
                <h2>${blog.title}</h2>
                <div class="inline-span">
                    ${blog.categories.map(category => {
                        let btnClass ='';
                        switch(category) {
                            case 'მარკეტი':
                                btnClass = 'market';
                                break;
                            case 'აპლიკაცია':
                                btnClass = 'application';
                                break;
                            case 'figma':
                                btnClass = 'figma';
                                break;
                            case 'ხელოვნური ინტელექტი':
                                btnClass = 'ui-design';
                                break;
                            case 'UI/UX':
                                btnClass = 'ai';
                                break;
                            case 'კვლევა':
                                btnClass = 'research';
                                break;
                        }
                        return `<span class="${btnClass}">${category}</span>`;
                    }).join('')}
                </div>
                <p>${blog.content}</p>
                <div class="see-more">
                    <a href="">სრულად ნახვა</a>
                    <img src="images/Arrow.svg" alt="">
                </div>
            </div>
        </div>`;
    }).join('');
});


    var blogs = [
    {
        imgSrc: "./pages/images/unsplash_lmCajireIn8.png",
        author: "ნია გოგსაძე",
        date: "02.11.2023",
        title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      categories: ["მარკეტი", "აპლიკაცია", "ხელოვნური ინტელექტი"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },

    {
        imgSrc: "./pages/images/unsplash_newhL3aprGk.png",
        author: "თორნიკე მამასახლისი",
        date: "02.11.2023",
        title: "მოსმენა ყველს უფრო გემრიელს ხდის?",
        categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },


    {
        imgSrc: "./pages/images/unsplash_L0nipfx-Ry4.png",
        author: "კობა ბელთაძე",
        date: "02.11.2023",
        title: "მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია. მ...",
        categories: ["figma", "UI/UX"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },


    {
        imgSrc: "./pages/images/unsplash_v9FQR4tbIq8.png",
        author: "კობა ბელთაძე",
        date: "02.11.2023",
        title: "მოსმენა ყველს უფრო გემრიელს ხდის?",
      categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },



    {
        imgSrc: "./pages/images/unsplash_L0nipfx-Ry4.png",
        author: "კობა ბელთაძე",
        date: "02.11.2023",
        title: "მოსმენა ყველს უფრო გემრიელს ხდის?",
      categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },



    {
        imgSrc: "./pages/images/unsplash_v9FQR4tbIq8.png",
        author: "კობა ბელთაძე",
        date: "02.11.2023",
        title: "მოსმენა ყველს უფრო გემრიელს ხდის?",
      categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },

    {
        imgSrc: "./pages/images/unsplash_v9FQR4tbIq8.png",
        author: "კობა ბელთაძე",
        date: "02.11.2023",
        title: "მოსმენა ყველს უფრო გემრიელს ხდის?",
      categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },



    {
        imgSrc: "./pages/images/unsplash_L0nipfx-Ry4.png",
        author: "ნიკა ბელთაძე",
        date: "02.11.2023",
        title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },


    {
        imgSrc: "./pages/images/unsplash_L0nipfx-Ry4.png",
        author: "ნია გოგსაძე",
        date: "02.11.2023",
        title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      categories: ["figma", "UI/UX"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },

    {
        imgSrc: "./pages/images/unsplash_01_igFr7hd4.png",
        author: "ლილე კვარაცხელია",
        date: "02.11.2023",
        title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      categories: ["მარკეტი", "აპლიკაცია", "ხელოვნური ინტელექტი"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },

    {
        imgSrc: "./pages/images/unsplash_newhL3aprGk.png",
        author: "ტატო სამხარაძე",
        date: "02.11.2023",
        title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    },

    {
        imgSrc: "./pages/images/unsplash_newhL3aprGk.png",
        author: "ტატო სამხარაძე",
        date: "02.11.2023",
        title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      categories: ["UI/UX", "კვლევა"],
        content: "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
    }
]



