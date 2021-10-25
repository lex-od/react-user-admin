import { createSelector } from '@reduxjs/toolkit';

const getAllUsers = state => state.users.list;

const getUserById = (state, userId) => getAllUsers(state).find(({ id }) => id === userId);

const getActiveList = state => state.users.activeList;

const getSortBy = state => state.users.sortBy;

const getSortOrder = state => state.users.sortOrder;

const getSortedUsersWithStatus = createSelector(
    [getAllUsers, getActiveList, getSortBy, getSortOrder],
    (users, activeList, sortBy, sortOrder) => {
        const compareStrings = (userA, userB) => {
            const strA = userA[sortBy].toLowerCase();
            const strB = userB[sortBy].toLowerCase();

            if (strA < strB) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (strA > strB) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        };

        const compareNumbers = (userA, userB) => {
            const numA = userA[sortBy];
            const numB = userB[sortBy];

            if (sortOrder === 'asc') {
                return numA - numB;
            }
            return numB - numA;
        };

        const isNumeric = sortBy === 'age';

        const sortedUsers = [...users].sort(isNumeric ? compareNumbers : compareStrings);

        const sortedUsersWithStatus = sortedUsers.map(user => {
            const activeListItem = activeList.find(({ id }) => id === user.id);

            if (activeListItem) {
                return { ...user, isActive: activeListItem.isActive };
            }
            return user;
        });

        return sortedUsersWithStatus;
    },
);

const usersSelectors = {
    getAllUsers,
    getUserById,
    getActiveList,
    getSortBy,
    getSortOrder,
    getSortedUsersWithStatus,
};
export default usersSelectors;
