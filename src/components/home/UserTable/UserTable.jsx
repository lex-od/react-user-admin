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
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import css from './UserTable.module.scss';
import { usersSls, usersActs } from '../../../redux/users';

const UserTable = () => {
    const users = useSelector(usersSls.getAllUsers);
    const dispatch = useDispatch();

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell>Аватар</TableCell>
                        <TableCell>Имя</TableCell>
                        <TableCell>Возраст</TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(({ id, avatar, name, age, status }, index) => (
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

            {!users.length && <p className={css.emptyNotification}>Список пуст</p>}
        </div>
    );
};

export default UserTable;
