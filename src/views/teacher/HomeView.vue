<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ListContainer, MenuModal } from '@/components';
import { useClassroomStore } from '@/stores/classrooms';

const route = useRoute();
const classrooms = useClassroomStore();

onMounted(() => {
    classrooms.fetchClassrooms(route.params.classId)
});

</script>

<template>
    <div>
        <MenuModal 
        :title="'Vælg eller tilføj klasse'"
        >
            <ListContainer 
            :columns="2"
            >
                dropdown
                <RouterLink to="{ name: 'menuView', params: { id: username } }" ></RouterLink>
            </ListContainer>
        </MenuModal>
    </div>
</template>

<style scoped lang="scss"></style>