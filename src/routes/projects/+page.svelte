<script>
  import ContactCard from "../../components/contactCard.svelte";
  import ProjectCard from "../../components/projectCard.svelte";

</script>
<svelte:head>
    <title>Projects - Prakash</title>    
</svelte:head>
<main>
    <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 class="font-mono max-w-xl sm:text-5xl text-3xl font-semibold leading-[3.5rem]">
                    Projects
                </h1>
                <p class="max-w-2xl pt-6 leading-8 tracking-wider">
                    Over the years, I've tinkered with tons of little projects, but these are the ones I take the most pride in.
                    If any of them pique your interest, so don't be afraid to teach me something new!
                </p>
                <!-- Project Cards -->
                <div class="lg:grid lg:grid-cols-2 mt-6 lg:p-4">
                    <ProjectCard
                        picture="/img/PowerHouse.png"
                        title="PowerHouse"
                        description="Iot based Smart Classroom Automation."
                        repolink="https://github.com/PrakasRavichandran/PowerHouse"
                        website="https://smartclassroomiot.netlify.app/"
                        technologies="html python cpp"
                    />
                    <ProjectCard
                        picture="/img/nmer.png"
                        title="NMER"
                        description="Asia's 1st ATEX certified Zone 0 Robot."
                        repolink="https://github.com/PrakasRavichandran/NMER"
                        website="https://github.com/PrakasRavichandran/NMER"
                        technologies="cpp"
                    />
                    <ProjectCard
                        picture ="/img/cam.png"
                        title="ATEX-0-CAM"
                        description="Asia's 1st ATEX certified Zone 0 Camera with CU."
                        repolink="https://github.com/PrakasRavichandran/NMER"
                        website="https://github.com/PrakasRavichandran/NMER"
                        technologies="cpp"
                    />
                    <ProjectCard
                        picture="/img/rems.png"
                        title="REMS"
                        description="Advanced High-Tech Manhole and Sewage Cleaning Robot."
                        repolink="https://github.com/PrakasRavichandran/REMS"
                        website="https://github.com/PrakasRavichandran/REMS"
                        technologies="cpp"
                    />
                    <ProjectCard
                        picture="/img/ich.png"
                        title="iCheck"
                        description="Petroleum Density Measurement Project"
                        repolink="https://github.com/PrakasRavichandran/i-check"
                        website="https://github.com/PrakasRavichandran/i-check"
                        technologies="python"
                    />
                </div>
            </div>
        </div>
    </div>
</main>