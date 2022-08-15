let reviews = [
    {
        id: 1,
        individual: "Genesis Apuya",
        jobTitle: "Data Scientist/Engineer/Doctor/Cong.",
        img: "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/57299344_1597607887037230_524264598870687744_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGjFUDtaF8GC-qCh_DA_67C1M6VpaBDuYDUzpWloEO5gOsjU2Id8F_pc9ZcXbZj1MJ6rxiUI_uYw-L3a3ijswGa&_nc_ohc=Do1D_OPHv9AAX_ychbL&tn=-GocdLYwJD8ta2WH&_nc_ht=scontent.fceb2-1.fna&oh=00_AT_Qg2blW3oQBUHbLh4JKlBmscL969jgkq9siqtN6JO8vQ&oe=6287C341",
        info: "I am Genesis Apuya, a dreamer, and I will achieve my dreams with my determination",
},
    {
        id: 2,
        individual: "Tricity",
        jobTitle: "Maestro",
        img: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/161968965_103321295182149_8624639503153065626_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeErfTDrenkXzmfSr5TZcHMQyUV5sXYxW53JRXmxdjFbnVS7fUtghgzvCJ6JCm9umzBfZ8UVNp9UR4Kn7q996_kW&_nc_ohc=W-Wc2AZNXxAAX-tsyTn&_nc_oc=AQnMIYjrxZV4AiqdPZmi0XihBt0dlN4xa1NYxtDKPfv0UA6Mq7sD5t5vSke7NJ6uu27xC1MMMa-3c7gzvwxlmuLW&tn=TbK3pSDsqvLv-wdq&_nc_ht=scontent-vie1-1.xx&oh=00_AT9W_cDEdbu1M7K039aZlku14J1A6pIwpai6fkFgV0EzbA&oe=6287A9EB",
        info: "Adik baya ko"
},
    {
        id: 3,
        individual: "Daniell",
        jobTitle: "Actor",
        img: "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/184210543_1594476217563524_6242087007311928870_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGzoo2EfFPyn-IxWY953XyDW9X3eCsU_tVb1fd4KxT-1ZnKA6lkVQHIN9qFBiW7Ob9PHRGZY680E13w0v6zTBbZ&_nc_ohc=x6f6TDRbafMAX8XI8s7&tn=z4JaPKozzXKD9Evx&_nc_ht=scontent.fceb2-2.fna&oh=00_AT-mI1tzVoB5OOuUAck2_lqcyk2To7Z7yfGALPM_em6Zbg&oe=62887EE5",
        info: "Mag artista adtos gawas sa pinas bati kaayo, mga gagmay ug utok ang tao"
},
    {
        id: 3,
        individual: "Samuel",
        jobTitle: "Architect",
        img: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/273028482_947819149503851_7684234354634001391_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHSbCAcjiV1Drw_GUjut-iQV6a3-L3K8hFXprf4vcryEQdsT9esWJipclJwEZN26AgZe-DGed0Z4mRwsyO1BY95&_nc_ohc=5QhG4ZlWrzEAX9JfYZE&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=00_AT82kaCA6Oo3ctSEyrjruOSTTtjo8-ALPhex-OjkEKs1yA&oe=6266A9C6",
        info: "Mag architect ko hahahahaha"
    }
]

// Selected Items from HTML Element Tags
let image = document.getElementById("pic");
let name = document.querySelector("#name-value");
let title = document.querySelector("#title-value");
let description = document.querySelector("#des")
// buttons
let surpriseBtn = document.getElementById("surprise-btn")
let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")

//Initial Item NO.
let currentItemNo = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItemNo)
});

//function

//This function is to showcase the data of the individual

function showPerson(person) {
    let item = reviews[person];
    image.src = item.img;
    name.textContent = item.individual;
    title.textContent = item.jobTitle;
    description.textContent = item.info;
};

nextBtn.addEventListener('click', function(){
    currentItemNo++;
    if (currentItemNo > reviews.length - 1) {
        currentItemNo = 0;
    }
    showPerson(currentItemNo);
});

prevBtn.addEventListener('click', function(){
    currentItemNo--;
    if(currentItemNo < 0){
        currentItemNo = reviews.length -1;
    }
    showPerson(currentItemNo)
})

surpriseBtn.addEventListener('click', function(){
    currentItemNo = Math.floor(Math.random() * reviews.length);
    showPerson(currentItemNo);
});