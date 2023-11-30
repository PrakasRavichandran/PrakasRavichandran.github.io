<script>
    import Links from '../components/links.svelte';

    export let linkType;
    export let title;
    export let description;
</script>

<div class="overflow-hidden py-3 lg:py-6 text-white flex justify-center">
    <div class="group relative hover:bg-neutral-900 lg:h-40 h-40 px-6 pb-8 pt-10 border border-zinc-700 lg:w-96 lg:min-w-0 min-w-full sm:px-10 rounded-lg">
        <div class="flex items-center">
            <Links website="{ linkType }" style="h-7 h-7 me-4"/>
            <h1 class="font-mono font-semibold text-3xl">{ title }</h1>
        </div>
        <p class=mt-2>{ description }</p>
    </div>
</div>