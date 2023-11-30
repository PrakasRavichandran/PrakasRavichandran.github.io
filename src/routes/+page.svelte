<script>
    import Card from '../components/card.svelte';
    import Links from '../components/links.svelte';
</script>

<svelte:head>
    <title>Home - Prakash</title>    
</svelte:head>
<main>
    <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 class="font-mono max-w-xl sm:text-5xl text-3xl font-semibold leading-[3.5rem]">
                    I'm a Tech-Manager, Gymer, and lover of alone
                </h1>
                <p class="max-w-2xl pt-6 text-neutral-300 leading-8 tracking-wider">
                    I'm Prakash, a tech-manager and developer based in India. I have an interest
                    in building unique and Innovative projects, designs and web applications.
                </p>
                <!-- Icons -->
                <div class="mt-6 flex">
                    <ul class="flex gap-4">
                        <li class="relative"><Links website="github" style="h-6 w-6" /></li>
                        <li class="relative"><Links website="linkedin" style="h-6 w-6" /></li>
                        <li class="relative"><Links website="instagram" style="h-6 w-6" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Cards -->
    <div class="lg:flex lg:justify-between mt-6 p-4 lg:p-0">
        <Card title="PowerHouse" url="https://github.com/PrakasRavichandran/PowerHouse" bg_img="bg-[url('/img/PowerHouse.png')]" description="Iot based Smart Classroom Automation"/>
        <Card title="NMER" url="https://github.com/PrakasRavichandran/NMER" bg_img="bg-[url('/img/nmer.png')]" description="Asia's 1st ATEX certified Zone 0 Robot." />
        <Card title="iCheck" url="https://github.com/PrakasRavichandran/i-check" bg_img="bg-[url('/img/ich.png')]" description="Petroleum Density Measurement Project." />
    </div>
</main>
