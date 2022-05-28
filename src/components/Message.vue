<script setup>
import { set, ref as refs, onValue, query, orderByChild } from '@firebase/database';
import { ref } from 'vue';
import { db } from '../db';
import { generate_token } from '../helper';
import Comment from './Comment.vue';

const props = defineProps(['message', 'id', 'comments']);

const comment = ref("");
const comments = ref();

function sendComment () {
    if (comment.value != "") {
        set(refs(db, 'messages/' + props.id + '/comments/' + generate_token(10)), {
            comment: comment.value,
            createdAt: Date.now()
        });
    }
    comment.value = "";
}

onValue(query(refs(db, 'messages/' + props.id + '/comments'), orderByChild('createdAt')), (snapshot) => {
    var temp = [];
    snapshot.forEach(el => {
        temp.push({
            id: el.key,
            comment: el.val().comment,
            createdAt: el.val().createdAt
        });
    });
    comments.value = temp.reverse();
});
</script>

<template>
    <div class="p-4 border border-indigo-600">
        <p class="text-sm text-justify">{{ props.message }}</p>
        <form @submit.prevent="sendComment">
            <div class="my-2 flex">
                <input v-model="comment" class="outline-none border border-indigo-600 px-2 text-sm py-1 w-full bg-transparent"
                    placeholder="Komen" type="text" name="comment" id="comment">
                <button type="submit"
                    class="outline-none py-1 px-4 text-sm bg-indigo-600 text-white border-none">Kirim</button>
            </div>
        </form>
        <div class="flex flex-col space-y-2">
            <Comment v-for="(comment, index) in comments" :index="index" :comment="comment.comment" />
        </div>
    </div>
</template>