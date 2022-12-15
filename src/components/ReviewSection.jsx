import React from "react";
import { useAuth } from "../context/fireBaseAuth/FirebaseAuth";
import Alert from "../helpers/AlertService";
import { useModal } from "../hooks/useModal";
import LoginForm from "./LoginForm";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

const ReviewSection = () => {
  const reviews = {
    name: "Juan",
    lastName: "Perez",
    likes: 10,
    dislikes: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud",
    rating: 3,
    childStatus: "Niño egresado",
  };

  const { userData } = useAuth();
  const { triggerModal, closeModal } = useModal();

  const handleCallLogin = () => {
    triggerModal(<LoginForm closeForm={() => closeModal()} />);
  };

  const handleAddReview = async () => {
    if (!userData) {
      return Alert.confirm(
        {
          title: "Debe iniciar sesion",
          message: "Para poder dejarnos una reseña debe iniciar sesion",
        },
        handleCallLogin
      );
    }

    triggerModal(<ReviewForm closeForm={() => closeModal()} />);
  };

  return (
    <div className="container">
      <section className="review">
        <h2>Reseñas</h2>
        <div className="review-container">
          {new Array(6).fill(reviews).map((review, i) => (
            <ReviewCard key={i} data={review} />
          ))}
        </div>
        <div className="review__footer">
          <h2 className="review__footer-title">
            ¿Tu hijo/a esta cursando con nosotros?
          </h2>
          <span className="review__footer-description">
            Vos tambien podes comentar sobre como fue tu experiencia en Burbujas
            de Algodon, asi como compartir lo que te parecio el espacio y las
            personas.
          </span>
          <button className="review__footer-btn" onClick={handleAddReview}>
            Compartir mi experiencia
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
