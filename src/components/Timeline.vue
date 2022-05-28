<script setup>
import { limitToLast, onValue, orderByChild, query, ref as refs } from '@firebase/database';
import { ref } from 'vue';
import { db } from '../db';
import MessageVue from './Message.vue';

const messages = ref([]);

onValue(query(refs(db, 'messages'), orderByChild('createdAt')), (snapshot) => {
    var temp = [];
    snapshot.forEach(el => {
        temp.push({
            id: el.key,
            message: el.val().message,
            comments: el.val().comments
        });
    });
    messages.value = temp.reverse();
});
</script>

<template>
    <div class="flex flex-col space-y-6">
        <MessageVue v-for="(message, index) in messages" :index="index" :comments="message.comments" :message="message.message" :key="message.id" :id="message.id"></MessageVue>
    </div>
</template>