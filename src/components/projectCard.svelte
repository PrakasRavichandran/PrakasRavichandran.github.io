<script>
    import {onMount} from 'svelte';

    export let picture;
    export let title;
    export let description;
    export let repolink;
    export let website;
    export let technologies = "";

    const techArr = technologies.split(' ');

    let container;
    onMount(() => {
        for (let i = 0; i < techArr.length; i++) {
            if (techArr == 0) continue;
            
            const child = document.createElement('img');
            switch (techArr[i]) {
                case 'javascript':
                    child.src = "https://img.shields.io/badge/-Javascript-hsla%28000%2C%20000%25%2C%2000%25%2C%200%29?style=flat-square&logo=javascript";
                    break;
                case 'cpp':
                    child.src = "https://img.shields.io/badge/-C++-blue?logo=cplusplus";
                    break;
                case 'python':
                    child.src = "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54";
                    break;    
                case 'node.js':
                    child.src = "https://img.shields.io/badge/-Node.js-hsla%28000%2C%20000%25%2C%2000%25%2C%200%29?style=flat-square&logo=node.js";
                    break;
                case 'html':
                    child.src = "https://img.shields.io/badge/-HTML-hsla%28000%2C%20000%25%2C%2000%25%2C%200%29?style=flat-square&logo=html5";
                    break;
                case 'svelte':
                    child.src = "https://img.shields.io/badge/-Svelte-hsla%28000%2C%20000%25%2C%2000%25%2C%200%29?style=flat-square&logo=Svelte";
                    break;
                case 'tailwind':
                    child.src = "https://img.shields.io/badge/-Tailwind CSS-hsla%28000%2C%20000%25%2C%2000%25%2C%200%29?style=flat-square&logo=tailwindcss";
                    break;
                case 'java':
                    child.src = "https://img.shields.io/badge/-Java-hsla%28000%2C%20000%25%2C%2000%25%2C%200%29?style=flat-square&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+SmF2YTwvdGl0bGU+CiAgPHBhdGggZD0iTSAxNzMuOTU2IDM4NSBDIDE3My45NTYgMzg1IDE1NS4xNjMgMzk1Ljk0MyAxODcuMzM4IDM5OS42MzIgQyAyMjYuMzE5IDQwNC4xIDI0Ni4yMzkgNDAzLjQ2NSAyODkuMTc0IDM5NS4zMDggQyAyODkuMTc0IDM5NS4zMDggMzAwLjQ4NiA0MDIuMzk5IDMxNi4yNDYgNDA4LjU0OCBDIDIxOS45NDQgNDQ5LjgwMSA5OC4zMzQgNDA2LjEyOSAxNzMuOTU2IDM4NSBNIDE2Mi4xNzEgMzMxLjE2MSBDIDE2Mi4xNzEgMzMxLjE2MSAxNDEuMTA1IDM0Ni43NTggMTczLjI3OSAzNTAuMDk3IEMgMjE0LjkyMyAzNTQuMzgxIDI0Ny43OTYgMzU0Ljc1IDMwNC43MDggMzQzLjc4NiBDIDMwNC43MDggMzQzLjc4NiAzMTIuNTc4IDM1MS43NTggMzI0LjkzNSAzNTYuMTIzIEMgMjA4LjU1IDM5MC4xNjQgNzguODY0IDM1OC43ODggMTYyLjE3MSAzMzEuMTYxIE0gMjYxLjM2MyAyMzkuOCBDIDI4NS4wOTYgMjY3LjExNyAyNTUuMTMzIDI5MS43MTEgMjU1LjEzMyAyOTEuNzExIEMgMjU1LjEzMyAyOTEuNzExIDMxNS4zNjYgMjYwLjYwMSAyODcuNjk4IDIyMS42NjIgQyAyNjEuODU1IDE4NS4zNDYgMjQyLjAzNyAxNjcuMzExIDM0OS4zMjQgMTA1LjA5MSBDIDM0OS4zMjQgMTA1LjA3MiAxODAuOTQ0IDE0Ny4xMjYgMjYxLjM2MyAyMzkuOCBNIDM4OC43MTMgNDI0Ljg0IEMgMzg4LjcxMyA0MjQuODQgNDAyLjYyOCA0MzYuMjk3IDM3My40MDUgNDQ1LjE0OSBDIDMxNy44MjQgNDYxLjk5NSAxNDIuMDY3IDQ2Ny4wNTcgOTMuMjcgNDQ1LjgyNSBDIDc1LjcyOCA0MzguMTgxIDEwOC42NDIgNDI3LjU4NiAxMTguOTcgNDI1LjM3MyBDIDEyOS43NzIgNDIzLjAzNyAxMzUuOTQgNDIzLjQ2NyAxMzUuOTQgNDIzLjQ2NyBDIDExNi40MDggNDA5LjcxNiA5Ljc3OSA0NTAuNDU3IDgxLjc3NCA0NjIuMTM5IEMgMjc4LjEwNyA0OTMuOTY2IDQzOS42NDEgNDQ3Ljc5MyAzODguNzEzIDQyNC44NCBNIDE4Mi45OTQgMjc1LjM1NyBDIDE4Mi45OTQgMjc1LjM1NyA5My41OTkgMjk2LjU4OCAxNTEuMzUxIDMwNC4yOTQgQyAxNzUuNzE5IDMwNy41NTMgMjI0LjMzIDMwNi44MTUgMjY5LjYwMiAzMDMuMDIzIEMgMzA2LjYxMyAyOTkuOTA5IDM0My43NDkgMjkzLjI0NyAzNDMuNzQ5IDI5My4yNDcgQyAzNDMuNzQ5IDI5My4yNDcgMzMwLjY5NCAyOTguODIyIDMyMS4yNDYgMzA1LjI3NyBDIDIzMC40NzkgMzI5LjE1MyA1NS4xMTIgMzE4LjA0NSAxMDUuNjA4IDI5My42MzcgQyAxNDguMjc2IDI3My4wMiAxODIuOTk0IDI3NS4zNTcgMTgyLjk5NCAyNzUuMzU3IE0gMzQzLjM0IDM2NC45OTcgQyA0MzUuNjIzIDMxNy4wNDIgMzkyLjk1NSAyNzAuOTUgMzYzLjE3OCAyNzcuMTggQyAzNTUuOTAyIDI3OC42OTYgMzUyLjYyMiAyODAuMDA5IDM1Mi42MjIgMjgwLjAwOSBDIDM1Mi42MjIgMjgwLjAwOSAzNTUuMzI5IDI3NS43NjYgMzYwLjUxMyAyNzMuOTIyIEMgNDE5LjQzMyAyNTMuMjAzIDQ2NC43NDUgMzM1LjAxNSAzNDEuNDk1IDM2Ny40MTYgQyAzNDEuNDk1IDM2Ny4zOTYgMzQyLjkyOSAzNjYuMTQ1IDM0My4zNCAzNjQuOTk3IE0gMjg3LjY5OCA0LjYzIEMgMjg3LjY5OCA0LjYzIDMzOS4zNjQgNTcuOTU5IDIzOS43ODQgMTM2LjU3NSBDIDE1OS45MzggMTk5LjYzNSAyMjEuMDMxIDIzMy4zODQgMjM5LjIwOSAyNzQuNDU1IEMgMTkyLjYwNiAyMzIuMzgxIDE1OC40MDIgMTk1LjM4OSAxODEuMzMzIDE2MC45MzggQyAyMTUuMDI3IDExMC4zMzkgMzA4LjMzNSA4NS44MjggMjg3LjY5OCA0LjYzIE0gMTkyLjA1MiA0OTQuOTMgQyAyODAuNjI4IDUwMC42MDYgNDE2LjY0NiA0OTEuNzkzIDQxOS44NjUgNDQ5Ljg4NCBDIDQxOS44NjUgNDQ5Ljg4NCA0MTMuNjc0IDQ2NS43NjYgMzQ2LjY1OSA0NzguMzkgQyAyNzEuMDc3IDQ5Mi42MTQgMTc3LjgwOSA0OTAuOTU0IDEyMi41MTYgNDgxLjgzNCBDIDEyMi41MTYgNDgxLjgxNCAxMzMuODQ5IDQ5MS4yIDE5Mi4wNTIgNDk0LjkzIiBzdHlsZT0iZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpOyIvPgo8L3N2Zz4=";
                    break;
                case 'gradle':
                    child.src = "https://img.shields.io/badge/-Gradle-hsla%28000%2C%20000%25%2C%2000%25%2C%200%29?style=flat-square&logo=Gradle"
                    break;
            }
            child.className = "h-7 p-1 mx-1 border border-zinc-700 rounded"
            container.appendChild(child);
        }
    });
</script>

<div class="overflow-hidden py-3 lg:py-6 text-white flex justify-center">
    <div class="group relative transition hover:bg-neutral-900 px-6 pb-8 pt-6 lg:h-64 h-64 border border-zinc-700 lg:w-96 lg:min-w-0 min-w-full sm:px-6 rounded-lg">
        <div class="flex flex-row mb-4 items-center">
            <img class="h-12 w-12 mr-4 object-cover rounded-full border border-zinc-700" src="{ picture }" alt="Repository">
            <div class="flex flex-row" bind:this={container}/>
        </div>
        <h1 class="font-mono font-semibold text-2xl">
            { title }
        </h1>
        <p class="mt-2">
            { description }
        </p>
        <a class="group flex mt-6 transition group-hover:text-sky-300" href="{ repolink }">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
            <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
            <span class="ml-2">
                { website }
            </span>
        </a>
    </div>
</div>