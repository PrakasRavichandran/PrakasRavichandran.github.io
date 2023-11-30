<script>
    import ContactCard from "../../components/contactCard.svelte";
    import Links from "../../components/links.svelte";
</script>

<svelte:head>
    <title>Contact - Prakash</title>
</svelte:head>
<main>
    <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 class="font-mono sm:max-w-xl sm:text-5xl text-3xl font-semibold leading-[3.5rem]">
                    Let's talk
                </h1>
                <p class="max-w-2xl pt-6 text-neutral-300 leading-8 tracking-wider">
                    Just want to chat or have a project in mind? Feel free to reach out on any platform
                    that is listed below. I'm currently avaliable any day of the week.
                </p>
                <!-- Contact Cards -->
                <div class="lg:grid lg:grid-cols-2 mt-6 lg:p-4">
                    <ContactCard linkType="email" title="Email" description="Have official business to discuss? My Email is always open." />
                    <ContactCard linkType="github" title="Github" description="Check out some of my other projects!" />
                    <ContactCard linkType="instagram" title="Instagram" description="If you need to reach me quickly, this is where I'm the most active" />
                    <ContactCard linkType="linkedin" title="LinkedIn" description="Want to connect and network?" />
                </div>
            </div>
        </div>
    </div>
</main>