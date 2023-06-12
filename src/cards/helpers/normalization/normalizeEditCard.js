import initialCreateCard from "../initialForms/initialCreateCard";

const normalizeEditCard = (card) => {
  const initial = { ...initialCreateCard };

  if (card) {
    initial.title = card.title || initial.title;
    initial.description = card.description || initial.description;
    initial.subtitle = card.subtitle || initial.subtitle;
    initial.phone = card.phone || initial.phone;
    initial.email = card.email || initial.email;
    initial.webUrl = card.webUrl || initial.webUrl;
    initial.imageUrl = card.image?.url || initial.imageUrl;
    initial.imageAlt = card.image?.alt || initial.imageAlt;
    initial.state = card.address?.state || initial.state;
    initial.country = card.address?.country || initial.country;
    initial.city = card.address?.city || initial.city;
    initial.street = card.address?.street || initial.street;
    initial.zip = card.address?.zip || initial.zip;
    initial.houseNumber = card.address?.houseNumber || initial.houseNumber;
  }

  return initial;
};

export default normalizeEditCard;