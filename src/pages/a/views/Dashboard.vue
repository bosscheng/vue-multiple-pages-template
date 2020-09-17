<template>
    <div>
        this is a page
        <br/>
        <a href="/">index page</a>
        <br/>
        <a href="/b.html">b page</a>
        <br/>
        <a href="/c.html">c page</a>
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
