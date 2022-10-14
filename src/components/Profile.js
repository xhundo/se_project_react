import "../blocks/Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({ weather, cards, cardClick, handleAddItemModal }) {
  return (
    <>
      <section className="profile">
        <Sidebar />
        <ClothesSection
          weather={weather}
          cards={cards}
          cardClick={cardClick}
          handleAddItemClick={handleAddItemModal}
        />
      </section>
    </>
  );
}

export default Profile;
