<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
        <hr>

        <b-button variant="primary" @click="show = !show" class="mb-3">Show message</b-button>

        <transition name="fade" appear>
            <b-alert variant="info" show v-if="show">This is a bootstrap alert with fade animation</b-alert>
        </transition>

        <transition name="slide" type='animation' appear>
            <b-alert variant="info" show v-if="show">This is a bootstrap alert with slide animation</b-alert>
        </transition>

        <transition
            enter-active-class="animated bounce"
            leave-active-class="animated shake"
            appear
        >
            <b-alert variant="info" show v-if="show">This is a bootstrap alert with custom transition classes</b-alert>
        </transition>

        <hr>

        <b-select v-model="animationType" class="mb-3">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </b-select>

        <transition :name="animationType" mode="out-in">
            <b-alert variant="info" show v-if="show" key="info">This is a bootstrap alert with slide animation</b-alert>
            <b-alert variant="warning" show v-else key="warn">This is a bootstrap alert with slide animation</b-alert>
        </transition>

        <hr>

        <b-button variant="secondary" @click="toggle_js_animation = !toggle_js_animation" class="mb-3">Show animated js width box</b-button>

        <transition
            @beforeEnter="beforeEnter"
            @enter="enter"
            @afterEnter="afterEnter"
            @enterCancelled="enterCancelled"

            @beforeLeave="beforeLeave"
            @leave="leave"
            @afterLeave="afterLeave"
            @leaveCancelled="leaveCancelled"
        >
            <div variant="warning" v-show="toggle_js_animation" show class="box-animation"></div>
        </transition>

        <hr>

        <div class="mb-3">
            <b-button class="mr-3" variant="info" @click="selectedComponent = 'AlertInfo'">Info</b-button>
            <b-button variant="warning" @click="selectedComponent = 'AlertWarning'">Warning</b-button>
        </div>

        <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
        </transition>

        <hr>

        <b-button @click="addStudent" class="primary mb-3"> Add Student</b-button>

        <b-list-group>
            <transition-group name="slide" tag="div">
                <b-list-group-item
                    v-for="(student, i) in students" :key="student"
                    @click="removeStudent(i)"
                >
                    {{ student }}
                </b-list-group-item>
            </transition-group>
        </b-list-group>
	</div>
</template>

<script>
import AlertWarning from "@/AlertWarning"
import AlertInfo from "@/AlertInfo"

export default {
    components: { AlertWarning, AlertInfo },
    data() {
        return {
            show: true,
            animationType: 'fade',
            toggle_js_animation: false,
            baseWidth: 0,
            selectedComponent: 'AlertInfo',
            students: ['João', 'Pedro', 'Paulo', 'Joaquim']
        }
    },
    methods: {
        addStudent() {
            const string = Math.random().toString(36).substring(2)

            this.students.push(string)
        },
        removeStudent(index) {
            this.students.splice(index, 1)
        },
        widthAnimate(el, done, positive = true) {
            let role = 0
            const interval = setInterval(() => {
                const newWidth = this.baseWidth + (positive? role : -role) * 10
                el.style.width = `${newWidth}px`
                role++
                if (role > 30) {
                    clearInterval(interval)
                    done()
                }
            }, 20)
            console.log("enter");
        },
        beforeEnter() {
            this.baseWidth = 0
        },
        enter(el, done) {
            this.widthAnimate(el, done)
        },
        afterEnter() {
            console.log("afterEnter");
        },
        enterCancelled() {
            console.log("enterCancelled");
        },

        beforeLeave() {
            this.baseWidth = 300
        },
        leave(el, done) {
            this.widthAnimate(el, done, false)
        },
        afterLeave() {
            console.log("afterLeave");
        },
        leaveCancelled() {
            console.log("leaveCancelled");
        },
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.box-animation {
    background-color: lightgreen;
    height: 100px;
    margin: 30px auto;
    width: 0px;
}

/* INITIAL ENTER/LEAVE STATE OPACITY  */
.fade-enter, .fade-leave-to {
    opacity: 0;
}
/* DURING ENTER/LEAVE ACTIVE TRANSITION */
.fade-enter-active, .fade-leave-active {
   transition: opacity 2s;
}

@keyframes slide-in {
    from { transform: translateY(40px); }
    to { transform: translateY(0); }
}

@keyframes slide-out {
    from { transform: translateY(0); }
    to { transform: translateY(40px); }
}

/* DURING ENTER/LEAVE ACTIVE ANIMATION */
.slide-enter-active {
    animation: slide-in 2s ease;
    transition: opacity 6s;
}
.slide-leave-active {
    position: absolute;
    width: 100%;
    animation: slide-out 2s ease;
    transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
    opacity: 0;
}

.slide-move {
    transition: transform 1s;
}
</style>
