//grab the navigation bar element
const navigation = document.getElementById('navigation');

//Have an event occur depending on the user's scroll 
window.onscroll = (e) => {

    //Whenever the user has scrolled down for a certain amount, we'll change the transparency of the navigation bar
    //The '50' represents that the user hasn't gone that far down the page.
    if(document.documentElement.scrollTop > 50){
        //change transparency on scroll
        navigation.style.background = "#392884eb";
    } else {
        //return original transparency when the user goes to the top of the page
        navigation.style.background = "#39288400";
    }
}