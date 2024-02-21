<template>
    <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-4">
            <i :class="iconClass"></i>
        </span>
        <input v-model="internalValue" required :type="tipe"
            class="w-full pl-12 pr-4 py-3 text-sm placeholder-slate-300 text-slate-600 focus:text-center focus:text-utama bg-utama border border-transparent rounded-xl focus:outline-none focus:placeholder-white focus:bg-white focus:ring-2 focus:ring-utama"
            :placeholder="placeholder" />
    </div>
</template>
<script setup>
    import {
        ref,
        watch,
        defineEmits
    } from 'vue'
    const props = defineProps({

        tipe: {
            default: 'text',
            type: String
        },
        placeholder: {
            default: 'placeholder',
            type: String
        },
        iconClass: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        }
    })
    const emit = defineEmits()
    const internalValue = ref(props.modelValue)

    watch(() => props.modelValue, (newValue) => {
        internalValue.value = newValue
    })

    watch(internalValue, (newValue) => {
        emit('update:modelValue', newValue)
    })
</script>