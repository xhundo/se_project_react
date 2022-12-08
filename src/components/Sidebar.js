import '../blocks/Sidebar.css';

function Sidebar({ user, handleEditProfileModal, handleLogOut }) {
  return (
    <div className="sidebar">
      <div className="sidebar__info">
        {user.avatar === '' ? (
          <div className="sidebar__user-placeholder">
            {user.name.slice(0, 1)}
          </div>
        ) : (
          <img
            className="sidebar__user-avatar"
            src={user.avatar}
            alt={user.name}
          />
        )}
        <p className="sidebar__user-name">{user.name}</p>
      </div>
      <div className="sidebar__opt">
        <button className="sidebar__btn" onClick={handleEditProfileModal}>
          Change profile data
        </button>
        <button className="sidebar__btn" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
