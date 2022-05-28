<script setup>
import { ref as refs, set } from '@firebase/database';
import { ref } from 'vue';
import { db } from '../db';
import { generate_token } from '../helper';

const inputMessage = ref('');

function sendMessage() {
    if (inputMessage.value != '') {
        set(refs(db, 'messages/' + generate_token(10)), {
            message: inputMessage.value,
            comments: "",
            createdAt: Date.now()
        });
        inputMessage.value = '';
    }
}
</script>

<template>
    <form @submit.prevent="sendMessage">
        <p class="mb-2 text-center">Sampaikan pesan rahasia</p>
        <textarea v-model="inputMessage" class="w-full border border-indigo-600 outline-none p-2 font-mono text-sm"
            name="pesan" id="pesan" cols="30" rows="5" placeholder="Tulis pesan..."></textarea>
        <button type="submit" class="outline-none py-1 px-4 w-full bg-indigo-600 text-white border-none">Kirim</button>
    </form>
</template>