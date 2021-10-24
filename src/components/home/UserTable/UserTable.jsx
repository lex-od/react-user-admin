import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import css from './UserTable.module.scss';
import { usersSls, usersActs } from '../../../redux/users';

const UserTable = () => {
    const sortedUsers = useSelector(usersSls.getSortedUsers);
    const sortBy = useSelector(usersSls.getSortBy);
    const sortOrder = useSelector(usersSls.getSortOrder);
    const dispatch = useDispatch();

    const handleSortChange = newSortBy => {
        const newSortOrder = sortBy === newSortBy && sortOrder === 'asc' ? 'desc' : 'asc';

        dispatch(usersActs.setSortBy(newSortBy));
        dispatch(usersActs.setSortOrder(newSortOrder));
    };

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell>Аватар</TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortBy === 'name'}
                                direction={sortBy === 'name' ? sortOrder : 'asc'}
                                onClick={() => handleSortChange('name')}
                            >
                                Имя
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortBy === 'age'}
                                direction={sortBy === 'age' ? sortOrder : 'asc'}
                                onClick={() => handleSortChange('age')}
                            >
                                Возраст
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedUsers.map(({ id, avatar, name, age, status }, index) => (
                        <TableRow className={css.tableRow} key={id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{avatar}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{age}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell size="small">
                                <IconButton
                                    component={Link}
                                    to={`/users/edit/${id}`}
                                    title="Редактировать"
                                >
                                    <OpenInNewIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => dispatch(usersActs.deleteUser(id))}
                                    title="Удалить"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {!sortedUsers.length && <p className={css.emptyNotification}>Список пуст</p>}
        </div>
    );
};

export default UserTable;
