const Experience = ({experienceRef}) => {

    return ( 
    <div class="px-4 md:px-16 pt-5" ref={experienceRef}>
        <h2 class="flex md:justify-center text-zinc-200 text-2xl md:text-4xl font-serif font-semibold pt-1 md:pt-1 ">Work / Volunteering  Experience</h2>
        <div class="md:flex hidden md:visible justify-center p-10">
            <table class="p-5 mx-16">
                <tr class="p-5 border-b-4 border-double hover:bg-slate-600">
                    <td class="p-5 text-xl">Ilkosonko Sacco </td>
                    <td class="p-5">
                        <h1 class="text-xl text-lime-300 font-serif">Industrial Attaché - Assistant System Administrator</h1>
                        <h2 class="text-lg font-mono">Sept 2022 - Nov 2022</h2>
                        <ul class="list-disc font-sans pt-4">
                            <li>Ensured that all system and process issues and incidents are logged and tracked using formal documentation.</li>
                            <li>Ensuring system data are backed up and up to date</li>
                            <li>Maintaing the organisation website</li>
                        </ul>

                    </td>
                </tr>

                <tr class="p-5 hover:bg-slate-600 rounded">
                    <td class="p-5 text-xl">Samericode Technologies </td>
                    <td class="p-5">
                        <h1 class="text-xl text-lime-300 font-serif"> Junior Web Developer </h1>
                        <h2 class="text-lg font-mono">May 2022 - Aug 2022</h2>
                        <ul class="list-disc font-sans pt-4">
                            <li>Writing and debugging code</li>
                            <li>Working with other developers on some of the projects</li>
                            <li>Updating and maintaining clients websites</li>
                        </ul>

                    </td>
                </tr>

            </table>
        </div>

        <div class="md:hidden">

            <div>
            <h1 class="p-4 pb-0 ml-1 font-sans text-lime-300 text-xl">Ilkisonko Sacco</h1>
                    <div class="p-5 pt-0">
                        <h1 class="text-xl text-zinc-300 font-serif"> Industrial Attaché - Assistant System Administrator </h1>
                        <h2 class="text-lg font-mono">Sept 2022 - Nov 2022</h2>
                        <ul class="list-disc font-sans ml-5 pt-2">
                        <li>Ensured that all system and process issues and incidents are logged and tracked using formal documentation.</li>
                        <li>Ensuring system data are backed up and up to date</li>
                        <li>Maintaing the organisation website</li>
                        </ul>

                    </div>
            </div>

            <hr />

            <div>
                <h1 class="p-4 pb-0 ml-1 font-sans text-lime-300 text-xl">Samericode Technologies</h1>
                <div class="p-5 pt-0">
                    <h1 class="text-xl text-zinc-300 font-serif">Junior Web Developer</h1>
                    <h2 class="text-lg font-mono">May 2022 - Aug 2022</h2>
                    <ul class="list-disc font-sans ml-5 pt-4">
                    <li>Writing and debugging code</li>
                    <li>Working with other developers on some of the projects</li>
                    <li>Updating and maintaining clients websites</li>
                    </ul>
                </div>
            </div>

        </div>
    </div> 
);
}
 
export default Experience;
