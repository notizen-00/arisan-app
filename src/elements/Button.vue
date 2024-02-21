<template>
 
    <button :type="url" :class="buttonClasses">
        <i :class="iconClass"></i> <span :class="textClass">{{text}}</span>
    </button>
 
</template>

<script setup>
    const props = defineProps({
        text: String,
        textClass: String,
        iconClass: String,
        color: {
            type: String,
            default: 'red' 
        },
        url:{
            default:'#',
            type: String,
        }
    });

    const buttonClasses = {
        'transition': true,
        'ease-linear': true,
        'delay-5': true,
        'border-b-8': true,
        'border-red-900': props.color === 'red', 
        'border-blue-900': props.color === 'blue', 
        'border-green-900': props.color === 'green',
        'border-purple-900': props.color === 'purple',
        'active:border-b-0': false,
        'bg-red-500': props.color === 'red',
        'bg-blue-500': props.color === 'blue',
        'bg-green-500':props.color === 'green',
        'bg-purple-500':props.color === 'purple',
        'active:translate-y-1': true,
        'hover:bg-red-600': props.color === 'red',
        'hover:bg-blue-600': props.color === 'blue',
        'hover:bg-green-600': props.color === 'green',
        'hover:bg-purple-600': props.color === 'purple',
        'duration-300': true,
        'relative': true,
        'rounded-md': true,
        'px-3': true,
        'py-1': true,
        'flex': true,
        'text-white': true,
        'hover:text-slate-600': true,
        'focus:outline-none': true,
        'focus:ring-2': true,
        'focus:ring-slate-200': true,
        'focus:ring-offset-2': true,
        'focus:ring-offset-gray-800': true
    };
</script>