import Skills from "./Skills";

const Education = ({educationRef}) => {
    return ( 
        <div class="md:flex">
            <div class="w-full md:w-1/2 px-4 md:px-16 pt-10" ref={educationRef}>
                <h2 class="text-zinc-200 text-xl md:text-4xl font-serif font-semibold pt-1 md:pt-1">Education and Certifications</h2>
                <div class="mt-5 ml-1 md:ml-5 pt-5 rounded bg-slate-700 hover:bg-slate-600 p-5 w-full">
                    <h1 class="text-xl md:text-2xl font-serif text-lime-300">Full Stack Software Enginnering</h1>
                    <h2 class="text-lg">ALX Africa</h2>
                    <h3 class=" font-mono">Sep 2022 - To date</h3>
                </div>

                <div class="mt-5 ml-1 md:ml-5 pt-5 rounded bg-slate-700 hover:bg-slate-600 p-5 w-full ">
                    <h1 class="text-xl md:text-2xl font-serif text-lime-300">Certified Security Analyst</h1>
                    <h2 class="text-lg">CyberShujaa, Serianu and USIU Africa</h2>
                    <h3 class=" font-mono">Jan 2023 - To date</h3>
                </div>

                <div class="mt-5 ml-1 md:ml-5 pt-5 rounded bg-slate-700 hover:bg-slate-600 p-5 w-full ">
                    <h1 class="text-xl md:text-2xl font-serif text-lime-300">Applied Computer Science</h1>
                    <h2 class="text-lg">Mount Kenya University</h2>
                    <h3 class=" font-mono">Sept 2020 - July 2023</h3>
                </div>
            

            </div>
            <div class="w-full md:w-1/2 p-5 pr-10">
                <Skills />
            </div>
            
        </div>
     );
}



            




export default Education;
