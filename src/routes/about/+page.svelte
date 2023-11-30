<script>
    import Links from "../../components/links.svelte";

    const imageStyle = ''
</script>

<svelte:head>
    <title>About - Prakash</title>    
</svelte:head>
<main class="about">
    <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 class="font-mono max-w-xl sm:text-5xl text-3xl font-semibold leading-[3.5rem]">
                    I'm Prakash.
                </h1>
                <div class="lg:grid lg:grid-cols-2">
                    <div>
                        <br />
                        <p>
                           Electrical and Electronics Engineering student turned Tech Manager with a passion for programming 
                           and graphics design. Started my coding journey in 2021 during college and seamlessly integrated it
                            into my academic pursuits. Leveraging my skills, I create electrical and electronic projects, 
                            develop websites to showcase them, and bring concepts to life through graphic design. From my 
                            initial role as a robotics engineer, I swiftly transitioned to a Tech Manager, showcasing my 
                            diverse talents and earning promotions in my first job.
                        </p><br />
                        <p>
                            Beyond tech, I find joy in bodybuilding, playing the keyboard, and exploring culinary delights.
                        </p><br />
                    </div>
                    <div class="place-self-center justify-self-center">
                        <img class="hidden lg:inline-block w-64 object-center border border-zinc-700 rounded-lg" src="/img/pfp.png" alt="Code">
                        <div class="mt-8">
                            <ul role="list">
                                <hr class="block lg:hidden mt-4 mb-8 bg-neutral-700 border-0 h-px">
                                <li class="relative">
                                    <Links website="github" text="Follow on GitHub" style="h-6 w-6" />
                                </li>
                                <li class="mt-4 flex relative">
                                    <Links website="linkedin" text="Follow on LinkedIn" style="h-6 w-6" />
                                </li>
                                <li class="mt-4 flex relative">
                                    <Links website="instagram" text="Add on Instagram" style="h-6 w-6" />
                                </li>
                                <!-- 
                                <hr class="hidden lg:block my-4 bg-neutral-700 border-0 h-px">
                                <li class="flex relative">
                                    <a class="group flex mt-4 lg:mt-0" href="mailto:info@prakashravichandran.com">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 dark:fill-zinc-400 group-hover:fill-[#2d9248]">
                                            <path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                        <span class="ml-4">Emails are open!</span>
                                    </a>
                                </li>
                                -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>