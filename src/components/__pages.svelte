<script>
    export const links = [
        { name: 'Home', href:'/'},
        { name: 'About', href:'/about'},
        { name: 'Projects', href:'/projects'},
        //{ name: 'Resume', href:'/resume'},
        { name: 'Contact', href:'/contact' }
    ];

    const hoverColor = "hover:text-sky-300";
    const transition = "transition transition-duration-1000 ease-in-out";
</script>

<li><a class="{hoverColor} {transition}" href="{links[0].href}">{links[0].name}</a></li>
<li><a class="{hoverColor} {transition}" href="{links[1].href}">{links[1].name}</a></li>
<li><a class="{hoverColor} {transition}" href="{links[2].href}">{links[2].name}</a></li>
<li><a class="{hoverColor} {transition}" href="{links[3].href}">{links[3].name}</a></li>
<!-- <li><a class="{hoverColor} {transition}" href="{links[4].href}">{links[4].name}</a></li> -->