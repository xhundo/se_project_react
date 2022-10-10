import "../blocks/Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({ weather, cards, cardClick, handleAddClick }) {
  return (
    <>
      <section className="profile">
        <Sidebar />
        <ClothesSection
          weather={weather}
          cards={cards}
          cardClick={cardClick}
          handleAddClick={handleAddClick}
        />
      </section>
    </>
  );
}

export default Profile;
