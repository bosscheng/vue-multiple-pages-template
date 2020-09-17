<template>
    <div>
        this is c page
        <br/>
        <a href="./">index page</a>
        <br/>
        <a href="./a.html">a page</a>
        <br/>
        <a href="./b.html">b page</a>
        <hello-world></hello-world>
        <demo></demo>
    </div>
</template>
<script>
    import HelloWorld from "../components/HelloWorld"
    import Demo from "../../../components/Demo";

    export default {
        name: "C",
        components: {HelloWorld, Demo}
    }
</script>
