import Card from './Card';

const Projects = ({projectsRef}) => {
    return ( 
    <div class="" ref={projectsRef}>
    <h1 class="flex md:justify-center text-zinc-200 text-2xl md:text-4xl font-serif font-semibold p-4 pt-7 md:pt-4 ">Some Things I've Built</h1>

    <div class="flex flex-wrap gap-10 justify-center p-8 pt-5">

        <Card 
            image="blogpalace.png"
            title="Blog Palace" 
            description="A web application that allows a user to create and post blogs with ease."
            github="https://github.com/0xAckerMan/BlogPalace"
            link="https://k0r3s.me"
            languages={["Django","JavaScript","Bootstrap CSS","SQLite","HTML"]}
        />

        <Card 
            image="masoinet.png"
            title="Masoinet Tours and Safaris" 
            description="A website for a tourism and safaris company. Users can book their trips and check different destinations for their vaccation"
            
            link="http://masoinetsafaris.com/"
            languages={["PHP","Jquery","CSS", "Bootstrap","Daraja API"]}
        />
{/*
        <Card 
            image="utulivu.png"
            title="Utulivu Shopping Cart" 
            description="A web application that allows a customer to browse, grab a product off the shelf, and head to the checkout counter to make a purchase. It has capability for enabling instant mobile payment."
            github="https://github.com/Benson306/Shopping_Cart"
            link="https://utulivucart.netlify.app"
            languages={["React","Redux","Node.js","MongoDb", "Tailwind CSS"]}
        />

        <Card 
            image="hms.png"
            title="Hospital ERP" 
            description="A web application that aims at bringing quality in patient care & management with various important utilities like easy & quick patient registration, instant access to patient's complete health hsitory, integrated patient module with various other related departments and many more"
            github="https://github.com/Benson306/Hospital_Management_System"
            link="#"
            languages={["PHP","Javascript","MySQL","Mpdf"]}
        />

        <Card 
            image="brindex.png"
            title="Brindex Course Search" 
            description="A course finder application to compare diploma, undergraduate and postgraduate courses from colleges, top universities and higher education institutions across Kenya, incluiding entry requirements."
            github="https://github.com/Benson306/Brindex-Course-Search"
            link="#"
            languages={["PHP","Javascript","MySQL"]}
        />
    */}

    </div>

    </div> 
);
}
 
export default Projects;