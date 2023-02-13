import { Link } from "react-router-dom";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contacts = ({contactsRef}) => {
    return ( <div class="p-5 " ref={contactsRef}>
    <div class="flex bg-slate-700 p-10">

            <div class="invisible md:w-1/4">

            </div>
            <div class="w-full md:w-1/2">
                <h1 class="text-2xl flex place-content-center font-serif">Get In Touch</h1>
                <center>
                    <h2 class="flex place-content-center text-zinc-300  pt-5">I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi.</h2>
                    
                    <br />
            
                    <Link to="" onClick={() => window.location = 'mailto:joelkores1@gmail.com'} class="border-2  rounded border-lime-500 p-3 hover:bg-lime-600 text-white">Reach me!</Link>
                </center>
            </div>
            <div class="invisible md:w-1/4">

            </div>

    </div>
    <br />

    <center>
    <div class="w-1/4">
        <hr />
    </div>
    </center>

    <center class="font-mono pt-5">
        <div class="w-1/4 flex justify-between">
            <a href="#"><FacebookOutlinedIcon /></a>
            <a href="https://twitter.com/K0r3s"><TwitterIcon /></a>
            <a href="https://github.com/0xAckerMan" to=""><GitHubIcon /></a>
        </div>
        <br />
        Design and built by Joel Kores.
        <br />
        &#169; Copyright 2023
    </center>
</div> );
}
 
export default Contacts;