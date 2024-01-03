


const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content'); 

/*
btns.forEach(function(btn){
	btn.addEventListener('click',function(e){

	});
});*/

about.addEventListener('click',function (e){
	//console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){
        //remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
            
           // console.log(e.target.classList);
        });
        // hide other articles
        articles.forEach(function(article){
            //console.log(article.classList);

            article.classList.remove('active');
        });
        const elem = document.getElementById(id);
        elem.classList.add('active');
        //console.log(elem.classList);

    }
});