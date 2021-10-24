import { createSelector } from '@reduxjs/toolkit';

const getAllUsers = state => state.users.list;

const getSortBy = state => state.users.sortBy;

const getSortOrder = state => state.users.sortOrder;

const getSortedUsers = createSelector(
    [getAllUsers, getSortBy, getSortOrder],
    (users, sortBy, sortOrder) => {
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

        return [...users].sort(isNumeric ? compareNumbers : compareStrings);
    },
);

const usersSelectors = {
    getAllUsers,
    getSortBy,
    getSortOrder,
    getSortedUsers,
};
export default usersSelectors;
