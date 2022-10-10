import "../blocks/Sidebar.css";
import avatar from "../images/avatar.svg";

function Sidebar() {
  return (
    <div className="sidebar__info">
      <img className="sidebar__avatar" src={avatar} />
      <p className="sidebar__user-name">Terrence Tegegne</p>
    </div>
  );
}

export default Sidebar;
