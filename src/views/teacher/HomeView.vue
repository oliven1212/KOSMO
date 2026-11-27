<script setup lang="ts">
import { ListContainer, MenuModal } from '@/components';
</script>

<template>
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
</template>

<style scoped lang="scss"></style>