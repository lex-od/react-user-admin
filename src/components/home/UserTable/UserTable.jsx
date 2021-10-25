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
    const users = useSelector(usersSls.getSortedUsersWithStatus);
    const sortBy = useSelector(usersSls.getSortBy);
    const sortOrder = useSelector(usersSls.getSortOrder);
    const dispatch = useDispatch();

    const handleSortChange = newSortBy => {
        const newSortOrder = sortBy === newSortBy && sortOrder === 'asc' ? 'desc' : 'asc';

        dispatch(usersActs.setSortBy(newSortBy));
        dispatch(usersActs.setSortOrder(newSortOrder));
    };

    const getAvavtarSrc = avatar => {
        return `data:image/svg+xml;utf8,${encodeURIComponent(avatar)}`;
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
                    {users.map(({ id, avatar, name, age, isActive }, index) => (
                        <TableRow className={css.tableRow} key={id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell size="small">
                                <img
                                    className={css.avatar}
                                    src={getAvavtarSrc(avatar)}
                                    alt="Avatar"
                                />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{age}</TableCell>
                            <TableCell>{isActive ? 'Активен' : '-'}</TableCell>
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

            {!users.length && <p className={css.emptyNotification}>Список пуст</p>}
        </div>
    );
};

export default UserTable;
