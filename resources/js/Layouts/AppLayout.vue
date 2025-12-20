<template>
    <Head title="Laravel Vue Starter" />
    <div class="min-h-screen bg-gray-100">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto px-6 py-4">
                <h1 class="text-lg font-semibold">Laravel Vue Starter</h1>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-6 py-8">
            <slot />
        </main>
    </div>
</template>
<script setup>
import { Head } from '@inertiajs/vue3'
</script>
