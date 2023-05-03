/* eslint-disable react/prop-types */
import Profile from "../Profile/Profile"
import style from "./User.module.css";
import { Trash2 } from 'react-feather';

// eslint-disable-next-line react/prop-types
function User({user}) {

  const accessHandler = ()=>{}

  const statusHandler = ()=>{}

  return (
    <tr>
        <td colSpan={2}>
            <Profile name={user.name} email={user.email} profileImg={user.profileImg}/>
        </td>   
        <td>
          <select name="status" defaultValue={user.status.toString()} onChange={statusHandler}>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </td>
        <td>
          <select name="access" defaultValue={user.access} onChange={accessHandler}>
            <option value="manager">Manager</option>
            <option value="read">Read</option>
          </select>
        </td>
        <td colSpan={0.5} style={{textAlign:'start'}}>
          <Trash2 className={style.icon}/>
        </td>
    </tr>
  )
}

export default User