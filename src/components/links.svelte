<script>
    export let website;
    export let text = "";
    export let style;

    export let githubLink = 'https://github.com/PrakasRavichandran';
</script>

<!-- GITHUB -->
<a class="group flex { website == 'github' ? 'display-block' : 'hidden' }" aria-label="GitHub" href="{ githubLink }">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#8b50a4]">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>

<!-- LINKEDIN -->
<a class="group flex { website == 'linkedin' ? 'display-block' : 'hidden' }" aria-label="LinkedIn" href="https://www.linkedin.com/in/prakashravichandrann10/">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#006ba3] ">
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>

<!-- INSTAGRAM -->
<a class="group flex { website == 'instagram' ? 'display-block' : 'hidden' }" aria-label="Instagram" href="https://instagram.com/prakashravichandrann">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#E1306C] ">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>

<!-- EMAIL -->
<a class="group flex { website == 'email' ? 'display-block' : 'hidden' }" aria-label="Email" href="mailto:infot@prakashravichandran.com">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#2d9248]">
        <path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>