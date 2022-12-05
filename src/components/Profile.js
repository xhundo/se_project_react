import '../blocks/Profile.css';
import Sidebar from './Sidebar';
import ClothesSection from './ClothesSection';

function Profile({
  weather,
  cards,
  cardClick,
  handleAddItemModal,
  user,
  handleEditProfileModal,
  handleLogOut,
  onCardLike,
  loggedIn,
}) {
  const myCards = cards.filter((item) => item.owner === user.id);
  return (
    <>
      <section className="profile">
        <Sidebar
          user={user}
          handleEditProfileModal={handleEditProfileModal}
          handleLogOut={handleLogOut}
        />
        <ClothesSection
          weather={weather}
          cards={myCards}
          isLoggedIn={loggedIn}
          onCardLike={onCardLike}
          cardClick={cardClick}
          handleAddItemClick={handleAddItemModal}
        />
      </section>
    </>
  );
}

export default Profile;
