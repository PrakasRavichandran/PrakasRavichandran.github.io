<script>
  import Links from "./links.svelte";

    export let bg_img;
    export let title;
    export let description;
    export let url;
</script>

<div class="lg:relative lg:inline-block overflow-hidden py-3 lg:py-6 text-white">
    <div class="w-full {bg_img} bg-center bg-cover rounded-lg">
        <div class="relative lg:h-[26rem] h-72 px-6 pb-8 pt-10 backdrop-brightness-50 backdrop-blur-[6px] border border-zinc-700 lg:max-w-sm sm:px-10 rounded-lg">
            <div class="static mx-auto max-w-4xl">
                <h1 class="font-mono font-semibold text-3xl">{title}</h1>
                <p class="mt-2">{description}</p>
                <div class="absolute bottom-8 sm:left-10 left-6">
                    <Links website="github" style="h-6 w-6" githubLink="{ url }" />
                </div>
            </div>
        </div>
    </div>
</div>