<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Users Management</h1>
                <p class="mt-2 text-sm text-gray-700">
                    A list of all users in your application including their name, email, role and
                    status.
                </p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <BaseButton variant="primary" text="Add User" @click="openUserModal()" />
            </div>
        </div>

        <!-- Search and Filter -->
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <BaseInput
                id="search-users"
                v-model="filters.search"
                placeholder="Search users..."
                type="search"
                class="max-w-xs"
            >
                <template #prefix>
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
                </template>
            </BaseInput>

            <BaseSelect
                id="role-filter"
                v-model="filters.role"
                :options="[
                    { label: 'All Roles', value: '' },
                    { label: 'Admin', value: 'admin' },
                    { label: 'User', value: 'user' },
                ]"
                class="max-w-xs"
            />
        </div>

        <!-- Users Table -->
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div
                        class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
                    >
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Status
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span class="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="user in filteredUsers" :key="user.id">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                                        <div class="flex items-center">
                                            <div class="h-10 w-10 flex-shrink-0">
                                                <img
                                                    :src="user.avatar || '/default-avatar.png'"
                                                    class="h-10 w-10 rounded-full"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="ml-4">
                                                <div class="font-medium text-gray-900">
                                                    {{ user.name }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ user.email }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <span
                                            :class="[
                                                user.role === 'admin'
                                                    ? 'bg-purple-100 text-purple-800'
                                                    : 'bg-gray-100 text-gray-800',
                                                'inline-flex rounded-full px-2 text-xs font-semibold leading-5',
                                            ]"
                                        >
                                            {{ user.role }}
                                        </span>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <span
                                            :class="[
                                                user.status === 'active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800',
                                                'inline-flex rounded-full px-2 text-xs font-semibold leading-5',
                                            ]"
                                        >
                                            {{ user.status }}
                                        </span>
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                                    >
                                        <div class="flex justify-end gap-2">
                                            <BaseButton
                                                variant="secondary"
                                                size="sm"
                                                @click="openUserModal(user)"
                                                text="Edit"
                                            />
                                            <BaseButton
                                                variant="danger"
                                                size="sm"
                                                @click="deleteUser(user)"
                                                text="Delete"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Modal -->
        <BaseModal v-model="showUserModal" :title="editingUser ? 'Edit User' : 'Add New User'">
            <div class="space-y-4">
                <BaseInput v-model="userForm.name" label="Name" required />
                <BaseInput v-model="userForm.email" label="Email" type="email" required />
                <BaseSelect
                    v-model="userForm.role"
                    label="Role"
                    :options="[
                        { label: 'User', value: 'user' },
                        { label: 'Admin', value: 'admin' },
                    ]"
                    required
                />
                <BaseSelect
                    v-model="userForm.status"
                    label="Status"
                    :options="[
                        { label: 'Active', value: 'active' },
                        { label: 'Inactive', value: 'inactive' },
                    ]"
                    required
                />
            </div>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <BaseButton variant="secondary" text="Cancel" @click="showUserModal = false" />
                    <BaseButton variant="primary" text="Save" :loading="saving" @click="saveUser" />
                </div>
            </template>
        </BaseModal>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { BaseButton, BaseInput, BaseModal, BaseSelect } from '@/components/ui';
    import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
    import { useUserStore } from '@/stores/userStore';

    const userStore = useUserStore();
    const showUserModal = ref(false);
    const saving = ref(false);
    const editingUser = ref(null);

    const filters = ref({
        search: '',
        role: '',
    });

    const userForm = ref({
        name: '',
        email: '',
        role: 'user',
        status: 'active',
    });

    // Fetch users on component mount
    const users = ref([]);
    async function fetchUsers() {
        try {
            users.value = await userStore.fetchUsers();
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    }

    const filteredUsers = computed(() => {
        return users.value.filter((user) => {
            const matchesSearch =
                !filters.value.search ||
                user.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
                user.email.toLowerCase().includes(filters.value.search.toLowerCase());

            const matchesRole = !filters.value.role || user.role === filters.value.role;

            return matchesSearch && matchesRole;
        });
    });

    function openUserModal(user = null) {
        editingUser.value = user;
        if (user) {
            userForm.value = { ...user };
        } else {
            userForm.value = {
                name: '',
                email: '',
                role: 'user',
                status: 'active',
            };
        }
        showUserModal.value = true;
    }

    async function saveUser() {
        saving.value = true;
        try {
            if (editingUser.value) {
                await userStore.updateUser(editingUser.value.id, userForm.value);
            } else {
                await userStore.createUser(userForm.value);
            }
            showUserModal.value = false;
            await fetchUsers();
        } catch (error) {
            console.error('Failed to save user:', error);
        } finally {
            saving.value = false;
        }
    }

    async function deleteUser(user) {
        if (!confirm(`Are you sure you want to delete ${user.name}?`)) return;

        try {
            await userStore.deleteUser(user.id);
            await fetchUsers();
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    }

    // Initial fetch
    fetchUsers();
</script>
